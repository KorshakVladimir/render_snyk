import 'rxjs/add/operator/map';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

// PrimeNG
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';


import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';
import { DataRowService } from './data-sets-management/data-row.service';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainPageComponent } from './main-page/main-page.component';

import { CompanyManagementModule } from './company-management/company-management.module';
import { DataSetsManagementModule } from './data-sets-management/data-sets-management.module';
const Raven = require('raven-js');
Raven
  .config('https://3ac96c5ebd9d41dfadc9cbbfce219bc4@sentry.io/629479')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError || err);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainPageComponent,
  ],
  imports: [
    // PrimeNG
    MenubarModule,
    TreeModule,
    // -------
    DataSetsManagementModule,
    CompanyManagementModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [DataRowService, { provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [AppComponent],
})
export class AppModule { }
