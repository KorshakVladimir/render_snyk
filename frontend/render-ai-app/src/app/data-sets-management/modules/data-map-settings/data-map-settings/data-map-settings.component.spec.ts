import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListModule } from 'primeng/orderlist';

import { DataMapSettingsComponent } from './data-map-settings.component';
import { FormsModule } from '@angular/forms';

describe('DataMapSettingsComponent', () => {
  let component: DataMapSettingsComponent;
  let fixture: ComponentFixture<DataMapSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OrderListModule,
        FormsModule
      ],
      declarations: [ DataMapSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMapSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
