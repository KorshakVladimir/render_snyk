import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyComponent } from './add-company.component';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CompanyService} from '../company.service';
import {Router} from '@angular/router';

@Component({selector: 'app-form-company', template: ''})
class StubFormComponent {
  @Output('formSubmit') formSubmit = new EventEmitter();
  @Input('model')model;
  @Input('server_error')server_error;
}

describe('AddCompanyComponent', () => {
  let component: AddCompanyComponent;
  let fixture: ComponentFixture<AddCompanyComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['create_company']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddCompanyComponent,
        StubFormComponent
      ],
      providers: [
        { provide: CompanyService, useValue: companyServiceSpy },
        { provide: Router,      useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
