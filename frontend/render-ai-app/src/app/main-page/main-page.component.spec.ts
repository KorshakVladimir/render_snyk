import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataRowService } from '../data-sets-management/data-row.service';

import { MainPageComponent } from './main-page.component';
import { TreeModule } from 'primeng/tree';
import { Router } from '@angular/router';
import {asyncData} from '../testing/async-observable-helpers';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const dataRowServiceSpy = jasmine.createSpyObj('DataRowService', ['all_data_sets']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TreeModule
      ],
      providers: [

        { provide: DataRowService, useValue: dataRowServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
      declarations: [ MainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    dataRowServiceSpy.all_data_sets.and.returnValue( asyncData('testQuote') );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
