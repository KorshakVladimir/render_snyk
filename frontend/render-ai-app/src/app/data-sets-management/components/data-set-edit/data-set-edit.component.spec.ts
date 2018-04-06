import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetEditComponent } from './data-set-edit.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { DataRowService } from '../../data-row.service';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { asyncData } from '../../../testing/async-observable-helpers';
import {FormsModule} from '@angular/forms';

@Component({selector: 'app-data-set-form', template: ''})
class StubFormComponent {
  @Output('formSubmit') formSubmit = new EventEmitter();
  @Output('deleteDataSet') deleteDataSet = new EventEmitter();
  @Input('model') model;
  @Input('server_error') server_error;
  @Input('data_set_columns') data_set_columns;
}

@Component({selector: 'app-data-set-mapper', template: ''})
class StubDataMapperComponent {
  @Output('update_data') update_data = new EventEmitter();
  @Input('origin_cols') origin_cols;
}

describe('DataSetEditComponent', () => {
  let component: DataSetEditComponent;
  let fixture: ComponentFixture<DataSetEditComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const dataRowServiceSpy = jasmine.createSpyObj('DataRowService', ['get_data_set']);
  const activatedRoute = new ActivatedRouteStub();
  activatedRoute.setParamMap({'id': 1});
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TableModule,
        TabViewModule,
        DialogModule,
        MultiSelectModule,
        FormsModule
      ],
      declarations: [
        DataSetEditComponent,
        StubFormComponent,
        StubDataMapperComponent
      ],
      providers: [
        { provide: DataRowService, useValue: dataRowServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute },
        Ng4LoadingSpinnerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSetEditComponent);
    component = fixture.componentInstance;
    dataRowServiceSpy.get_data_set.and.returnValue( asyncData('testQuote') );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
