import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataMapModels } from '../data-map-models';
import { DataMapSettingsService } from '../data-map-settings.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-settings-entities',
  templateUrl: './settings-entities.component.html',
  styleUrls: ['./settings-entities.component.css']
})
export class SettingsEntitiesComponent implements OnInit {
  public selected_data_mapping_value: DataMapModels;
  private _origin_cols;
  private _origin_cols_full;
  private _new_set_columns;
  @Input('origin_cols')
  set origin_cols(origin_cols) {
    if (origin_cols === undefined) {
      return;
    }
    this._origin_cols_full = origin_cols;
    this._origin_cols = origin_cols.map(el => el.name);
  }
  get origin_cols() {
    return this._origin_cols;
  }
  @Output('origin_colsChange') origin_colsChange = new EventEmitter();

  @Input('new_set_columns')
  set new_set_columns(new_set_columns) {
    this._new_set_columns = new_set_columns.map(el => el.name);
  }
  get new_set_columns() {
    return this._new_set_columns;
  }

  @Input('mapped_columns') mapped_columns;
  @Output('mapped_columnsChange') mapped_columnsChange = new EventEmitter();
  @Input('primary_columns') primary_columns;
  @Output('primary_columnsChange') primary_columnsChange = new EventEmitter();
  public data_mapping: SelectItem[];
  
  public selected_data_mapping: SelectItem;
  public display = false;
  public server_error = {};
  public mapped_origin_error = {};
  public mapped_new_set_error = {};
  
  constructor(private service: DataMapSettingsService) { }

  ngOnInit() {
    this.get_all_mapping_settings();
    this.selected_data_mapping_value = new DataMapModels(0, '');
  }
  mark_cols() {
    const origin_cols = this.service.mark_some_origin_cols(this._origin_cols_full, this.mapped_columns);
    this.origin_colsChange.emit(origin_cols);
  }
  change_data_mapping() {
    this.selected_data_mapping_value = this.selected_data_mapping.value;
    this.mapped_columns = this.selected_data_mapping_value.data;
    this.mapped_columnsChange.emit(this.mapped_columns);
    this.primary_columns = this.selected_data_mapping_value.primary_columns;
    this.primary_columnsChange.emit(this.primary_columns);
    this.validate_mapping();
    this.mark_cols();
  }

  prepare_form_data(model) {
    const formData: FormData = new FormData();
    formData.append('name', model.name);
    formData.append('data', JSON.stringify(this.mapped_columns));
    formData.append('primary_columns', JSON.stringify(this.primary_columns));
    return formData;
  }

  validate_mapping() {
    this.mapped_origin_error = {};
    this.mapped_new_set_error = {};
    this.mapped_columns.forEach( el => {
      if (this.origin_cols.indexOf(el.origin_column) === -1) {
        this.mapped_origin_error[el.origin_column] = true;
      }
      if (this.new_set_columns.indexOf(el.new_set_column) === -1) {
        this.mapped_new_set_error[el.new_set_column] = true;
      }
    });
  }

  save_on_server(model) {
    if (!model) {
      this.display = false;
      return;
    }
    const formData = this.prepare_form_data(model);
    this.service.create_data_mapping(formData).subscribe(
      (res: DataMapModels) => {
        this.selected_data_mapping_value = res;
        const prepared_data = {'label': res.name, 'value': res};
        this.data_mapping = [...this.data_mapping, prepared_data];
        this.selected_data_mapping = prepared_data;
        this.primary_columns = res.primary_columns;
        this.primary_columnsChange.emit(this.primary_columns);
        this.display = false;
      },
      error => this.server_error = error.error
    );
  }

  update_map_element(data) {
    const formData = this.prepare_form_data(data);
    this.service.update_data_mapping(formData, data.id).subscribe(
      (res: DataMapModels) => {
      },
      error => this.server_error = error.error);
  }

  save_map_element() {
    if (this.selected_data_mapping_value.id !== 0) {
      this.update_map_element(this.selected_data_mapping_value);
    } else {
      this.display = true;
    }
  }

  save_as_map_element() {
    this.display = true;
  }

  get_all_mapping_settings() {
    this.service.get_all_data_mapping().subscribe(
        (res: Array<DataMapModels>) => {
            this.data_mapping = res.map(el => ({'label': el.name, 'value': el}));
        },
        error => error.error
    );
  }
  
  check_primary_columns() {
    return Object.keys(this.primary_columns).length === 0;
  }
}
