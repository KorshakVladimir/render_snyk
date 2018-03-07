import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataRowService } from '../data-row.service';
import { Company } from '../models/company-models';
import { ViewEncapsulation } from '@angular/core';

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

  public file;
  public companies: Company[];

  constructor(private service: DataRowService) { }

  ngOnInit() {
    this.service.get_company_names().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }
  get_files(event) {
     this.file = event.files[0];
  }
  handleSubmit(upLoader) {
    this.model.file = this.file;
    this.formSubmit.emit(this.model);
    upLoader.clear();
  }
}
