import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMappingFormComponent } from './data-mapping-form.component';
import { DataMapModels } from '../data-map-models';
import { FormsModule } from '@angular/forms';
import {Component, Input} from '@angular/core';


@Component({selector: 'app-form-field-error', template: ''})
class StubFieldErrorComponent {
  @Input('errors') errors;
  @Input('name')name;
}

describe('DataMappingFormComponent', () => {
  let component: DataMappingFormComponent;
  let fixture: ComponentFixture<DataMappingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        DataMappingFormComponent,
        StubFieldErrorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMappingFormComponent);
    component = fixture.componentInstance;
    component.model = new DataMapModels(0, '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
