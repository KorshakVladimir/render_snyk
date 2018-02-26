import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowPageComponent } from './data-row-page.component';

describe('DataRowPageComponent', () => {
  let component: DataRowPageComponent;
  let fixture: ComponentFixture<DataRowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
