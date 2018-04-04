import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyComponent } from './add-company.component';
import {Component, Input, Output} from '@angular/core';

@Component({selector: 'app-form-company', template: ''})
class StubFormComponent {
  @Output('formSubmit') formSubmit;
  @Input('model')model;
  @Input('server_error')server_error;
}

describe('AddCompanyComponent', () => {
  let component: AddCompanyComponent;
  let fixture: ComponentFixture<AddCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddCompanyComponent,
        StubFormComponent
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
