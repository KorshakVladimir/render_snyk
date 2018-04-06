import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';

import { EditCompanyComponent } from './edit-company.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRouteStub} from '../../testing/activated-route-stub';
import { asyncData } from '../../testing/async-observable-helpers';
import {CompanyService} from '../company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({selector: 'app-form-company', template: ''})
class StubFormComponent {
  @Output('formSubmit') formSubmit = new EventEmitter();
  @Input('model')model;
  @Input('server_error')server_error;
  @Input('deleteCompany')deleteCompany = new EventEmitter();
}

describe('EditCompanyComponent', () => {
  let component: EditCompanyComponent;
  let fixture: ComponentFixture<EditCompanyComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['get_company']);
  const spinnerServiceSpy = jasmine.createSpyObj('Ng4LoadingSpinnerService', ['hide', 'show']);
  const activatedRoute = new ActivatedRouteStub();
  activatedRoute.setParamMap({'id': 1});
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditCompanyComponent,
        StubFormComponent
      ],
      providers: [

        { provide: CompanyService, useValue: companyServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Ng4LoadingSpinnerService, useValue: spinnerServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyComponent);
    component = fixture.componentInstance;
    companyServiceSpy.get_company.and.returnValue( asyncData('testQuote') );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
