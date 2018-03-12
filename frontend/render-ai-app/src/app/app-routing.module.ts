import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCompanyComponent } from './add-company/add-company.component';
import { NewDataSetComponent } from './new-data-set/new-data-set.component';
import { DataSetEditComponent } from './data-set-edit/data-set-edit.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

const appRoutes: Routes = [
  {
    path: 'new_company',
    component: AddCompanyComponent
  },
  {
    path: 'new_data_set',
    component: NewDataSetComponent
  },
  {
    path: 'edit_data_set/:id',
    component: DataSetEditComponent
  },
  {
    path: 'edit_company/:id',
    component: EditCompanyComponent
  },
  { path: 'main_page',  component: MainPageComponent },
  { path: '', redirectTo: 'main_page', pathMatch: 'full' },
  { path: '**', redirectTo: 'main_page' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
