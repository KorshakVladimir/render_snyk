import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { DataRowService } from '../../data-row.service';

import { DataSetModels } from '../../data-set.models';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-new-data-set',
  templateUrl: './new-data-set.component.html',
  styleUrls: ['./new-data-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewDataSetComponent implements OnInit {
  public server_error: object = {};
  public model = new DataSetModels(0, '', null);

  constructor(
      private service: DataRowService,
      private spinnerService: Ng4LoadingSpinnerService,
      private router: Router
  ) { }

  ngOnInit() {

  }
  create_new_data_set(model) {
    const file = model.file;
    const formData: FormData = new FormData();
    formData.append('company', model.company.id.toString());
    formData.append('name', model.name);
    formData.append('key_data', model.key_data ? model.key_data.name : '');
    if (file) {
      formData.append('file', file, file.name);
    }

    this.service.create_data_set(formData)
      .subscribe(
          (res: any) => {
              this.spinnerService.hide();
              this.router.navigate(['/edit_data_set', res.id]);
          },
          error => {
              this.server_error = error.error;
              this.spinnerService.hide();
          }
      );
    this.spinnerService.show();
  }
}
