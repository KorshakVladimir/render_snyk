import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataMapSettingsComponent } from './data-map-settings/data-map-settings.component';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { InplaceModule } from 'primeng/inplace';

import { SharedModule } from '../../../shared/shared.module';

import { DataMapSettingsService } from './data-map-settings.service';

import { DataMappingFormComponent } from './data-mapping-form/data-mapping-form.component';
import { SettingsEntitiesComponent } from './settings-entties/settings-entities.component';


@NgModule({
  imports: [
    CommonModule,
    OrderListModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    DialogModule,
    InplaceModule,
    SharedModule
  ],
  declarations: [
      DataMapSettingsComponent,
      DataMappingFormComponent,
      SettingsEntitiesComponent
  ],
  exports: [DataMapSettingsComponent, SettingsEntitiesComponent],
  providers: [DataMapSettingsService]
})
export class DataMapSettingsModule { }
