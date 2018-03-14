import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Company } from '../../company-management/company.models';
import { ViewEncapsulation } from '@angular/core';
import { CompanyService } from '../../company-management/company.service'

@Component({
  selector: 'app-data-set-form',
  templateUrl: './data-set-form.component.html',
  styleUrls: ['./data-set-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataSetFormComponent implements OnInit {
  @Input('model') model;
  @Input('server_error') server_error;
  @Output() formSubmit = new EventEmitter();
  @Output() deleteDataSet = new EventEmitter();
  public file;
  public companies: Company[];
  public display = false;

  constructor(private service: CompanyService) { }

  ngOnInit() {
    this.service.get_company_names().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }
  get_files(event, form_instance) {
     this.file = event.files[0];
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
