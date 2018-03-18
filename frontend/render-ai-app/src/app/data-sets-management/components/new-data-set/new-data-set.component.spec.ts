import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDataSetComponent } from './new-data-set.component';

describe('NewDataSetComponent', () => {
  let component: NewDataSetComponent;
  let fixture: ComponentFixture<NewDataSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDataSetComponent ]
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
