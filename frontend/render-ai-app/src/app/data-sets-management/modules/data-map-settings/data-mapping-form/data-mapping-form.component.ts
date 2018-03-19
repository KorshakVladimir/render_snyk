import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-mapping-form',
  templateUrl: './data-mapping-form.component.html',
  styleUrls: ['./data-mapping-form.component.css']
})
export class DataMappingFormComponent implements OnInit {
  @Input('model') model;
  @Input('server_error') server_error;
  @Output() formSubmit = new EventEmitter();
  public display;
  constructor() { }

  ngOnInit() {
  }
  handleSubmit() {
    this.formSubmit.emit(this.model);
  }
  onCancel(event) {
    event.preventDefault();
    this.formSubmit.emit(null);
  }
}
