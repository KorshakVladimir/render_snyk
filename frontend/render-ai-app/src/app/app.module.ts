import 'rxjs/add/operator/map';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  providers: [DataRowService],
  bootstrap: [AppComponent],
})
export class AppModule { }
