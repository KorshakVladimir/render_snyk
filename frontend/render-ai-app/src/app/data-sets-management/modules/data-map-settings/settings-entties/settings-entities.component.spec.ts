import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEntitiesComponent } from './settings-entities.component';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataMapSettingsService } from '../data-map-settings.service';
import { FormsModule } from '@angular/forms';
import { DataMapModels } from '../data-map-models';
import {asyncData} from '../../../../testing/async-observable-helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({selector: 'app-data-mapping-form', template: ''})
class StubFormComponent {
  @Output('formSubmit') formSubmit = new EventEmitter();
  @Input('model') model;
  @Input('server_error') server_error;
}

const dataMappingServiceSpy = jasmine.createSpyObj('DataMapSettingsService', ['get_all_data_mapping']);

describe('SettingsEntitiesComponent', () => {
  let component: SettingsEntitiesComponent;
  let fixture: ComponentFixture<SettingsEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DialogModule,
        DropdownModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        SettingsEntitiesComponent,
        StubFormComponent
      ],
      providers: [
        { provide: DataMapSettingsService, useValue: dataMappingServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEntitiesComponent);
    component = fixture.componentInstance;
    component.selected_data_mapping_value = new DataMapModels(0, '');
    dataMappingServiceSpy.get_all_data_mapping.and.returnValue(asyncData('test'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
