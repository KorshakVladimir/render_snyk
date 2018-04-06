import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDataSetComponent } from './new-data-set.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DataRowService } from '../../data-row.service';
import { Router } from '@angular/router';

@Component({selector: 'app-data-set-form', template: ''})
class StubFormComponent {
  @Output('formSubmit') formSubmit = new EventEmitter();
  @Input('model') model;
  @Input('server_error') server_error;
}


describe('NewDataSetComponent', () => {
  let component: NewDataSetComponent;
  let fixture: ComponentFixture<NewDataSetComponent>;
  const dataRowServiceSpy = jasmine.createSpyObj('DataRowService', ['get_company_names']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewDataSetComponent,
        StubFormComponent
      ],
      providers: [
        { provide: DataRowService, useValue: dataRowServiceSpy },
        { provide: Router, useValue: routerSpy },
        Ng4LoadingSpinnerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
