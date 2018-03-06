import { Component, OnInit } from '@angular/core';
import { DataRowService } from '../data-row.service';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

import { DataSetModels } from '../models/data-set.models';
import { Company } from '../models/company-models';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-new-data-set',
  templateUrl: './new-data-set.component.html',
  styleUrls: ['./new-data-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewDataSetComponent implements OnInit {
  public companies: Company[];
  public server_error: object = {};
  public model = new DataSetModels(0, '', null, []);
  public file;
  constructor(
      private service: DataRowService,
      private spinnerService: Ng4LoadingSpinnerService,
      private router: Router
  ) { }

  ngOnInit() {
    this.service.get_company_names().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }
  get_files(event) {
     this.file = event.files[0];
  }
  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('company', this.model.company.id.toString());
    formData.append('name', this.model.name);
    if (this.file) {
      formData.append('file', this.file, this.file.name);
    }

    this.service.upload_file(formData)
      .subscribe(
          (res: any) => {
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
