import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataSetEditComponent } from './components/data-set-edit/data-set-edit.component';
import { DataSetFormComponent } from './components/data-set-form/data-set-form.component';
import { NewDataSetComponent } from './components/new-data-set/new-data-set.component';
import { DataSetMapperComponent } from './components/data-set-mapper/data-set-mapper.component';

import { DataMapSettingsModule } from './modules/data-map-settings/data-map-settings.module';

import { DataRowService } from './data-row.service';
import { RoutingModule } from './data-sets-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/steps';
import { OrderListModule } from 'primeng/orderlist';

import { PapaParseModule } from 'ngx-papaparse';
import { DataHelperService } from './data-helper.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    TabViewModule,
    DialogModule,
    FileUploadModule,
    RoutingModule,
    FormsModule,
    MultiSelectModule,
    PapaParseModule, 
    StepsModule,
    OrderListModule,
    DataMapSettingsModule
  ],
  declarations: [
      NewDataSetComponent,
      DataSetFormComponent,
      DataSetEditComponent,
      DataSetMapperComponent
  ],
  providers: [
      DataRowService,
      DataHelperService,
  ]
})
export class DataSetsManagementModule { }
