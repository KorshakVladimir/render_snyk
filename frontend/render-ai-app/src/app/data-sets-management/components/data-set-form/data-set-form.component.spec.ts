import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetFormComponent } from './data-set-form.component';
import { CompanyService } from '../../../company-management/company.service';
import { PapaParseService } from 'ngx-papaparse';
import { DataHelperService } from '../../data-helper.service';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { asyncData } from '../../../testing/async-observable-helpers';
import { DataSetModels} from '../../data-set.models';
import {Component, Input} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({selector: 'app-form-field-error', template: ''})
class StubFieldErrorComponent {
  @Input('errors') errors;
  @Input('name')name;
}

describe('DataSetFormComponent', () => {
  let component: DataSetFormComponent;
  let fixture: ComponentFixture<DataSetFormComponent>;
  const companyServiceSpy = jasmine.createSpyObj('CompanyService', ['get_company_names']);
  const stubDataHelperService = jasmine.createSpyObj('DataHelperService', ['get_columns_from_data_set']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        DropdownModule,
        FileUploadModule,
        DialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        DataSetFormComponent,
        StubFieldErrorComponent
      ],
      providers: [
        { provide: CompanyService, useValue: companyServiceSpy },
        PapaParseService,
        { provide: DataHelperService, useValue: stubDataHelperService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSetFormComponent);
    component = fixture.componentInstance;
    companyServiceSpy.get_company_names.and.returnValue( asyncData('testQuote') );
    component.model = new DataSetModels(0, '', null, null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
