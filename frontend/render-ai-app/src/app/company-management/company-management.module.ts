import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { FormCompanyComponent } from './form-company/form-company.component';

import { SharedModule } from '../shared/shared.module';

import { CompanyService } from './company.service';
import { RoutingModule } from './company-routing.module';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    RoutingModule
  ],
  declarations: [
      AddCompanyComponent,
      EditCompanyComponent,
      FormCompanyComponent,
  ],
  providers: [ CompanyService ]
})
export class CompanyManagementModule { }
