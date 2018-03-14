import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {
  @Input('errors') errors;
  @Input('name')name;
  public field_errors = [];
  constructor() { }

  ngOnInit() {}
  show_message() {
    const field_name = this.name.name;
    if (Object.keys(this.errors).indexOf(field_name) > -1) {
      this.field_errors = this.errors[field_name];
    }
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.show_message();
  }

}
