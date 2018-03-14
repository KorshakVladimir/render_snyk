import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataSetEditComponent } from './data-set-edit/data-set-edit.component';
import { DataSetFormComponent } from './data-set-form/data-set-form.component';
import { NewDataSetComponent } from './new-data-set/new-data-set.component';

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
  ],
  declarations: [
      NewDataSetComponent,
      DataSetFormComponent,
      DataSetEditComponent,
  ],
  providers: [
      DataRowService
  ]
})
export class DataSetsManagementModule { }
