import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute } from '@angular/router';
import { DataRowService } from '../data-row.service';
import { Router } from '@angular/router';

import { Company } from '../models/company-models';

import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditCompanyComponent implements OnInit {
  public company_id: number;
  public server_error = {};
  public model: Company = new Company(0, '');
  constructor(
      private service: DataRowService,
      private route: ActivatedRoute,
      private router: Router,
      private spinnerService: Ng4LoadingSpinnerService
  ) { }

  get_company_data() {
    this.company_id = +this.route.snapshot.paramMap.get('id');
    this.service.get_company(this.company_id).subscribe(
        (res: Company) => {
            this.model = res;
        },
        error => error.error
    );
  }

  ngOnInit() {
    this.get_company_data();
  }

  save_changes(model) {
    const formData: FormData = new FormData();
    formData.append('name', model.name);
    this.service.update_company(formData, this.company_id).subscribe(
        (res: Company) => {
            this.model = res;
            this.spinnerService.hide();
        },
        error => {
          this.server_error = error.error;
          this.spinnerService.hide();
        }
    );
    this.spinnerService.show();
  }
  deleteCompany(model) {
    this.service.delete_company(model.id).subscribe(
        res => {
          this.spinnerService.hide();
          this.router.navigate(['/main_page']);
        },
        error => {
          this.spinnerService.hide();
        }
    );
    this.spinnerService.show();
  }
}
