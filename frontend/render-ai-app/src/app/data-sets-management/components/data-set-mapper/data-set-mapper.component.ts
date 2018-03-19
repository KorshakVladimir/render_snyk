import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PapaParseService } from 'ngx-papaparse';
import { MenuItem } from 'primeng/api';
import { DataRowService } from '../../data-row.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-data-set-mapper',
  templateUrl: './data-set-mapper.component.html',
  styleUrls: ['./data-set-mapper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataSetMapperComponent implements OnInit {
  public _origin_cols;
  @Input('origin_cols')
  set origin_cols(origin_cols: Array<object>) {
    this._origin_cols =  origin_cols.sort(
      (a: any, b: any) => {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                  }
      );
  }
  get origin_cols(): Array<object> { return this._origin_cols; }

  @Output('update_data') update_data = new EventEmitter();
  public activeIndex = 0;
  public new_set_columns = [];
  public mapped_columns = [];
  public primary_columns = [];
  public new_data_set;
  public origin_column;
  public new_set_column;
  public new_data_set_file;
  public data_set_id;
  public server_error = {};
  public displayError = false;

  constructor(
      private papa: PapaParseService,
      private data_row_service: DataRowService,
      private route: ActivatedRoute,
      private spinnerService: Ng4LoadingSpinnerService,
  ) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Load File'},
      {label: 'Map Data'}
    ];
  }

  get_new_data_set(res) {
    if (res.data.length === 0) {
      return;
    }
    this.new_data_set = res.data;
    this.new_set_columns = res.data[0].map(el => ({'name': el})).sort(
        (a: any, b: any) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }
      );
  }

  get_files(event) {
    this.new_data_set_file = event.files[0];
    this.papa.parse(this.new_data_set_file, {complete: this.get_new_data_set.bind(this)});
    this.activeIndex = 1;
  }

  select_origin_column(event) {
    this.origin_column = event.value[0];
  }

  select_new_set_column(event) {
    this.new_set_column = event.value[0];
  }

  push_to_mapped() {
    const origin_column = this.origin_column ? this.origin_column.name : '';
    const new_set_column = this.new_set_column ? this.new_set_column.name : '';
    this.mapped_columns.push({'origin_column': origin_column, 'new_set_column': new_set_column});
  }

  map_new_data_set() {
    const file = this.new_data_set_file;
    const formData: FormData = new FormData();
    formData.append('mapped_columns', JSON.stringify(this.mapped_columns));
    formData.append('primary_columns', JSON.stringify(this.primary_columns));
    formData.append('file', file, file.name);
    this.data_set_id = +this.route.snapshot.paramMap.get('id');

    this.data_row_service.map_new_data_set(this.data_set_id, formData)
      .subscribe(
          (res: any) => {
            this.spinnerService.hide();
            this.server_error = {};
            this.update_data.emit();
          },
          error => {
              this.server_error = error.error;
              this.displayError = true;
              this.spinnerService.hide();
          }
      );
    this.spinnerService.show();
  }
}
