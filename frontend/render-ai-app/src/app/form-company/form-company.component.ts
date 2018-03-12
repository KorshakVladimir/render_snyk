import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {
  @Input('model') model;
  @Input('server_error') server_error;
  @Output() formSubmit = new EventEmitter();
  @Output() deleteCompany = new EventEmitter();
  public display;
  constructor() { }

  ngOnInit() {
  }
  handleSubmit(form_instance) {
    this.formSubmit.emit(this.model);
    form_instance.form.pristine = true;
  }
  handleCompany() {
    this.deleteCompany.emit(this.model);
  }
}
