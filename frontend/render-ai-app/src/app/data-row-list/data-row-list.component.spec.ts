import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowListComponent } from './data-row-list.component';

describe('DataRowListComponent', () => {
  let component: DataRowListComponent;
  let fixture: ComponentFixture<DataRowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
