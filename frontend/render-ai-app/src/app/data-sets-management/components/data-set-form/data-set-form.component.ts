import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Company } from '../../../company-management/company.models';
import { ViewEncapsulation } from '@angular/core';
import { CompanyService } from '../../../company-management/company.service';
import { PapaParseService } from 'ngx-papaparse';
import { DataHelperService } from '../../data-helper.service';

@Component({
  selector: 'app-data-set-form',
  templateUrl: './data-set-form.component.html',
  styleUrls: ['./data-set-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataSetFormComponent implements OnInit {
  public _data_set_columns;
  @Input('data_set_columns')
  set data_set_columns(data_set_columns) {
    this._data_set_columns = data_set_columns.map(el => ({'name': el.name}));
  }
  get data_set_columns() { return this._data_set_columns; }
  @Input('model') model;
  @Input('server_error') server_error;
  @Output() formSubmit = new EventEmitter();
  @Output() deleteDataSet = new EventEmitter();
  public file;
  public companies: Company[];
  public display = false;
  constructor(
      private service: CompanyService,
      private papa: PapaParseService,
      private data_helper: DataHelperService
  ) { }

  ngOnInit() {
    this.service.get_company_names().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

  get_data_set(res) {
    if (res.data.length === 0) {
      return;
    }
    this._data_set_columns = this.data_helper.get_columns_from_data_set(res);
  }

  get_files(event, form_instance) {
     this.file = event.files[0];
     this.papa.parse(this.file, {complete: this.get_data_set.bind(this)});
     if (this.file) {
       form_instance.form.pristine = false;
     }
  }
  handleSubmit(upLoader, form_instance) {
    this.model.file = this.file;
    this.formSubmit.emit(this.model);
    upLoader.clear();
    form_instance.form.pristine = true;
  }
  handleDelete() {
    this.deleteDataSet.emit(this.model);
  }
}
