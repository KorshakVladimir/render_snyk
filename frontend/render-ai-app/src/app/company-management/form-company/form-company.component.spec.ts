import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { FormCompanyComponent } from './form-company.component';
import {Company} from '../company.models';


@Component({selector: 'app-form-field-error', template: ''})
class StubFieldErrorComponent {
  @Input('errors') errors;
  @Input('name')name;
}
@Component({selector: 'p-dialog', template: ''})
class StubDialogComponent {
  @Input('visible') visible;
  @Input('modal') modal;
  @Input('closeOnEscape')closeOnEscape;
}

describe('FormCompanyComponent', () => {
  let component: FormCompanyComponent;
  let fixture: ComponentFixture<FormCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        FormCompanyComponent,
        StubFieldErrorComponent,
        StubDialogComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyComponent);
    component = fixture.componentInstance;
    component.model = new Company(0, '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
