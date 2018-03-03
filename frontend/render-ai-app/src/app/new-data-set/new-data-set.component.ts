import { Component, OnInit } from '@angular/core';
import { DataRowService } from '../data-row.service';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-new-data-set',
  templateUrl: './new-data-set.component.html',
  styleUrls: ['./new-data-set.component.css']
})
export class NewDataSetComponent implements OnInit {
  public companies;
  public data_set_name;
  public error_text: string;
  public selectedCompany;
  constructor(
      private service: DataRowService,
      private spinnerService: Ng4LoadingSpinnerService,
      private router: Router
  ) { }

  ngOnInit() {
    this.service.get_company_names().subscribe(data => {
      this.companies = data;
    });
  }
  reset_file(target) {
    this.error_text = '';
    target.closest('form').reset();
  }
  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        this.spinnerService.show();
        const file: File = fileList[0];
        const formData: FormData = new FormData();
        formData.append('company', this.selectedCompany['id']);
        formData.append('name', this.data_set_name);
        formData.append('file', file, file.name);
        this.service.upload_file(formData)
          .subscribe(
                (res: any) => {
                  this.router.navigate(['/edit_data_set', res.id]);
                },
                error => {
                  this.spinnerService.hide();
                  this.error_text = error.error;
                  this.reset_file(event.target);
                }
          );
        this.spinnerService.show();
    }
  }
}
