import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

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
