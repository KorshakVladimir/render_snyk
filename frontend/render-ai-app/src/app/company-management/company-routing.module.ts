import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

const companyRoutes: Routes = [
  {
    path: 'new_company',
    component: AddCompanyComponent
  },
  {
    path: 'edit_company/:id',
    component: EditCompanyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
