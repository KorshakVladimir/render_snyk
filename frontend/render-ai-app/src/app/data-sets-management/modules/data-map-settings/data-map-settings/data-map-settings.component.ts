import { Component, Input, Output, EventEmitter, ViewChild  } from '@angular/core';


import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-map-settings',
  templateUrl: './data-map-settings.component.html',
  styleUrls: ['./data-map-settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataMapSettingsComponent {
  @Input('mapped_columns') mapped_columns;
  @Output('mapped_columnsChange') mapped_columnsChange = new EventEmitter();
  @Input('primary_columns') primary_columns;
  @Output('primary_columnsChange') primary_columnsChange = new EventEmitter();
  @Input('mapped_origin_error') mapped_origin_error;
  @Input('mapped_new_set_error') mapped_new_set_error;
  @Output('delete_mapped_columns') delete_mapped_columns = new EventEmitter();

  delete_mapping(i) {
    this.delete_mapped_columns.emit(this.mapped_columns[i].origin_column);
    this.mapped_columns.splice(i, 1);
    this.mapped_columnsChange.emit(this.mapped_columns);

  }

  select_primary_mapping(event) {
    this.primary_columns = event.value[0];
    this.primary_columnsChange.emit(this.primary_columns);
  }

}
