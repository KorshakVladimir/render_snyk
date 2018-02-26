import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {PrettyJsonModule} from 'angular2-prettyjson';

import { AppComponent } from './app.component';
import { DataRowPageComponent } from './data-row-page/data-row-page.component';
import { RoutingModule } from './app-routing.module';
import { DataRowListComponent } from './data-row-list/data-row-list.component';


import { DataRowService } from './data-row.service';
import { AddNewRowComponent } from './add-new-row/add-new-row.component';
import 'rxjs/add/operator/map';

import { FormsModule } from '@angular/forms';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DataRowPageComponent,
    DataRowListComponent,
    AddNewRowComponent
  ],
  imports: [
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
