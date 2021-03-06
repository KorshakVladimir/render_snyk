import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataRowService } from '../../data-row.service';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import {DataSetModels, DataSetColumn} from '../../data-set.models';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-data-set-edit',
  templateUrl: './data-set-edit.component.html',
  styleUrls: ['./data-set-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataSetEditComponent implements OnInit {
  public cols: Array<DataSetColumn> = [];
  public scroll_height: string;
  public server_error = {};
  public model: DataSetModels = new DataSetModels(0, '', null, null);
  public data_set_id: number;
  public selectedColumns;
  public loading;

  constructor(
      private service: DataRowService,
      private route: ActivatedRoute,
      private router: Router,
      private spinnerService: Ng4LoadingSpinnerService
  ) { }
  ngOnInit() {
    this.get_data_set();
    this.scroll_height = `${window.innerHeight - 250}px`;

  }
  set_data_for_table(data) {
    this.cols = this.prepare_cols(data);
    this.selectedColumns = this.cols;
  }
  get_data_set() {
    this.data_set_id = +this.route.snapshot.paramMap.get('id');
    this.service.get_data_set(this.data_set_id).subscribe(
        (res: DataSetModels) => {
            this.model = res;
            this.set_data_for_table(res.data);
            this.loading = false;
        },
        error => {
            this.loading = false;
            }
        );
    this.loading = true;
  }
  prepare_cols (data) {
    const data_cols = [];
    if (data && data.length > 0) {
      Object.keys(data[0]).forEach(col =>
            data_cols.push({'name': col, 'exportable': true, 'field': col, 'picked': false}
          ));
    }
    return data_cols;
  }
  save_data_set(model) {
    const file = model.file;
    const formData: FormData = new FormData();
    formData.append('company', model.company.id.toString());
    formData.append('name', model.name);
    formData.append('key_data', model.key_data.name);
    if (file) {
      formData.append('file', file, file.name);
    }

    this.service.update_data_set(formData, this.data_set_id)
      .subscribe(
          (res: any) => {
            this.model.data = res.data;
            this.set_data_for_table(res.data);
            this.spinnerService.hide();
            this.server_error = {};
          },
          error => {
              this.server_error = error.error;
              this.spinnerService.hide();
          }
      );
    this.spinnerService.show();
  }
  handleEdit(value, col_name, row) {
    const formData: FormData = new FormData();
    formData.append('value', value);
    formData.append('col_name', col_name);
    formData.append('row_index', row['row_index']);
    this.service.update_data_set_row(formData, this.data_set_id).subscribe();
  }

  deleteDataSet(model) {
    this.service.delete_data_set(model.id).subscribe(res => {
          this.spinnerService.hide();
          this.router.navigate(['/main_page']);
        },
        error => {
          this.spinnerService.hide();
        });
    this.spinnerService.show();
  }
  check_for_data_key(col) {
      if (this.model.key_data) {
          if (col.name !== this.model.key_data.name) {
              return false;
          } else {
              return true;
          }
      } else {
          return false;
      }
  }
}
