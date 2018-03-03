import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataRowService } from '../data-row.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  public company_name;
  public form_error;
  constructor(private service: DataRowService,
              private router: Router) { }

  ngOnInit() {
  }
  create_new() {
    const formData: FormData = new FormData();
    formData.append('name', this.company_name);
    this.service.create_company(formData).subscribe(
        res => this.router.navigate(['/main_page']),
        error => this.form_error = error.error
        );
  }
}
