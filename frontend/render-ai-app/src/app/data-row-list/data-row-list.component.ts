import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataRowService } from '../data-row.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-data-row-list',
  templateUrl: './data-row-list.component.html',
  styleUrls: ['./data-row-list.component.css']
})
export class DataRowListComponent implements OnInit {

  public data_rows  = [];
  public error_text: string;
  // public loading: boolean;
  constructor(
    private http: HttpClient,
    private service: DataRowService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  get_all_rows() {

    this.service.get_all_data()
      .subscribe(
          (data: Array<any>) => {
            this.data_rows = data;
            this.spinnerService.hide();
          },
          error => this.spinnerService.hide()
      );
    this.spinnerService.show();
  }

  ngOnInit() {
    this.get_all_rows();
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
        formData.append('file', file, file.name);
        this.service.upload_file(formData)
          .subscribe(
                (data: any) => {
                  setTimeout(() => {
                    this.data_rows = data.body;
                    this.reset_file(event.target);
                    this.spinnerService.hide();
                  }, 0);

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

  del_row(event, cust_id) {
    event.stopPropagation();
    this.data_rows  = [];
    this.service.del_row(cust_id).subscribe(data => this.get_all_rows());
  }

  extractData(res: string) {
    const myBlob: Blob = new Blob([res], {type: 'application/csv'});
    const fileURL = URL.createObjectURL(myBlob);
    window.open(fileURL);
  }

  export_to_file(event, cust_id) {
    event.stopPropagation();
    this.service.get_row_to_csv(cust_id).subscribe(data => {
      this.extractData(data);
    });
  }
}
