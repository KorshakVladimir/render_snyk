import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewDataSetComponent } from './new-data-set/new-data-set.component';
import { DataSetEditComponent } from './data-set-edit/data-set-edit.component';

const companyRoutes: Routes = [
    {
    path: 'new_data_set',
    component: NewDataSetComponent
  },
  {
    path: 'edit_data_set/:id',
    component: DataSetEditComponent
  },
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
