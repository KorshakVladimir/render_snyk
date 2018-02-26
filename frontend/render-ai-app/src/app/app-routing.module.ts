import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataRowListComponent } from './data-row-list/data-row-list.component';
import { DataRowPageComponent } from './data-row-page/data-row-page.component';
import { AddNewRowComponent } from './add-new-row/add-new-row.component';

const appRoutes: Routes = [
  {
    path: 'cust_id/:id',
    component: DataRowPageComponent
  },
  {
    path: 'add_new',
    component: AddNewRowComponent
  },
  { path: '',  component: DataRowListComponent, },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
