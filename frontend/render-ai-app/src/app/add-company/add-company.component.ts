import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataRowService } from '../data-row.service';

import { Company } from '../models/company-models';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  public server_error = {};
  public model: Company;
  constructor(private service: DataRowService,
              private router: Router) { }

  ngOnInit() {
     this.model = new Company(0, '');
  }
  create_new(model) {
    const formData = JSON.stringify(model);
    this.service.create_company(formData).subscribe(
      res => this.router.navigate(['/main_page']),
      error => this.server_error = error.error
      );
  }
}
