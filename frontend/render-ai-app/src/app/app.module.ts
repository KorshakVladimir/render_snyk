import 'rxjs/add/operator/map';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PrettyJsonModule} from 'angular2-prettyjson';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';

import { DataTableModule } from 'primeng/datatable';

import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';
import { DataRowService } from './data-row.service';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { NewDataSetComponent } from './new-data-set/new-data-set.component';
import { DataSetEditComponent } from './data-set-edit/data-set-edit.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';

@NgModule({
  declarations: [

    AppComponent,
    MainMenuComponent,
    AddCompanyComponent,
    NewDataSetComponent,
    DataSetEditComponent,
    MainPageComponent,
    FormFieldErrorComponent,
  ],
  imports: [
    // PrimeNG
    MenubarModule,
    ButtonModule,
    DropdownModule,
    DataTableModule,
    TreeModule,
    // -------
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    PrettyJsonModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [DataRowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
