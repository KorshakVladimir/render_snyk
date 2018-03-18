import { Component, OnInit, Input, Output, EventEmitter, ViewChild  } from '@angular/core';
import { DataMapSettingsService } from '../data-map-settings.service';
import { DataMapModels, DataMapItem } from '../data-map-models';
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-data-map-settings',
  templateUrl: './data-map-settings.component.html',
  styleUrls: ['./data-map-settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataMapSettingsComponent implements OnInit {
  // @Input('new_data_set_columns') new_data_set_columns;
  @Input('mapped_columns') mapped_columns;
  @Output('mapped_columnsChange') mapped_columnsChange = new EventEmitter();
  @Input('primary_columns') primary_columns;
  @Output('primary_columnsChange') primary_columnsChange = new EventEmitter();
  public data_mapping: Array<DataMapModels>;
  public selected_data_mapping: DataMapModels;
  public display = false;
  public server_error = {};
  constructor(private service: DataMapSettingsService) { }

  ngOnInit() {
    this.get_all_mapping_settings();
    this.selected_data_mapping = new DataMapModels(0, '');
  }
  get_all_mapping_settings() {
    this.service.get_all_data_mapping().subscribe(
        (res: Array<DataMapModels>) => {
            this.data_mapping = res;
        },
        error => error.error
    );
  }
  change_data_mapping() {
    const data = this.selected_data_mapping.data;
    this.mapped_columns = data;
    this.mapped_columnsChange.emit(this.mapped_columns);
    this.primary_columns = this.selected_data_mapping.primary_columns;
    this.primary_columnsChange.emit(this.primary_columns);
  }
  add_new_map_element() {
    this.mapped_columns.push(new DataMapItem('', ''));
    this.mapped_columnsChange.emit(this.mapped_columns);
  }
  save_on_server(model) {
    const formData: FormData = new FormData();
    formData.append('name', model.name);
    formData.append('data', JSON.stringify(this.mapped_columns));
    formData.append('primary_columns', JSON.stringify(this.primary_columns));
    this.service.create_data_mapping(formData).subscribe(
        (res: DataMapModels) => {
          this.data_mapping.push(res);
          this.selected_data_mapping = res;
          this.primary_columns = res.primary_columns;
          this.primary_columnsChange.emit(this.primary_columns);
          this.display = false;
        },
        error => this.server_error = error.error
    );
  }
  save_map_element() {
    if (this.selected_data_mapping.id !== 0) {

    } else {
      this.display = true;
    }
  }
  save_as_map_element() {

  }
  delete_map_element() {

  }
  delete_mapping(i) {
    this.mapped_columns = this.mapped_columns.splice(i + 1, 1);
    this.mapped_columnsChange.emit(this.mapped_columns);
  }
  select_primary_mapping(event) {
    this.primary_columns = event.value[0];
    this.primary_columnsChange.emit(this.primary_columns);
  }
}
