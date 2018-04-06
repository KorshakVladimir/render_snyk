import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetMapperComponent } from './data-set-mapper.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';

import { PapaParseService } from 'ngx-papaparse';
import {DataHelperService} from '../../data-helper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {DataMapSettingsService} from '../../modules/data-map-settings/data-map-settings.service';
import {DataRowService} from '../../data-row.service';
import {ActivatedRouteStub} from '../../../testing/activated-route-stub';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({selector: 'app-data-map-settings', template: ''})
class StubMapSettingsComponent {
  @Input('mapped_columns') mapped_columns;
  @Output('mapped_columnsChange') mapped_columnsChange = new EventEmitter();
  @Input('primary_columns') primary_columns;
  @Output('primary_columnsChange') primary_columnsChange = new EventEmitter();
  @Input('mapped_origin_error') mapped_origin_error;
  @Input('mapped_new_set_error') mapped_new_set_error;
  @Output('delete_mapped_columns') delete_mapped_columns = new EventEmitter();
}

@Component({selector: 'app-settings-entities', template: ''})
class StubSettingsEntitiesComponent {
  @Input('origin_cols') origin_cols;
  @Output('origin_colsChange') origin_colsChange = new EventEmitter();
  @Input('new_set_columns') new_set_columns;
  @Input('mapped_columns') mapped_columns;
  @Output('mapped_columnsChange') mapped_columnsChange = new EventEmitter();
  @Input('primary_columns') primary_columns;
  @Output('primary_columnsChange') primary_columnsChange = new EventEmitter();
}

describe('DataSetMapperComponent', () => {
  let component: DataSetMapperComponent;
  let fixture: ComponentFixture<DataSetMapperComponent>;
  const dataRowServiceSpy = jasmine.createSpyObj('DataRowService', ['map_new_data_set']);
  const dataMapSettingsServiceSpy = jasmine.createSpyObj('DataMapSettingsService', ['mark_some_origin_cols']);
  const dataHelpersServiceSpy = jasmine.createSpyObj('DataHelperService', ['get_columns_from_data_set']);
  const activatedRoute = new ActivatedRouteStub();
  activatedRoute.setParamMap({'id': 1});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OrderListModule,
        FileUploadModule,
        DialogModule,
        StepsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        DataSetMapperComponent,
        StubMapSettingsComponent,
        StubSettingsEntitiesComponent
      ],
      providers: [
        PapaParseService,
        Ng4LoadingSpinnerService,
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: DataRowService, useValue: dataRowServiceSpy },
        { provide: DataMapSettingsService, useValue: dataMapSettingsServiceSpy },
        { provide: DataHelperService, useValue: dataHelpersServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSetMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
