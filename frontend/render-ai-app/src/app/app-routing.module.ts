import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCompanyComponent } from './company-management/add-company/add-company.component';
import { NewDataSetComponent } from './data-sets-management/new-data-set/new-data-set.component';
import { DataSetEditComponent } from './data-sets-management/data-set-edit/data-set-edit.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditCompanyComponent } from './company-management/edit-company/edit-company.component';

const appRoutes: Routes = [

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
