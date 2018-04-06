import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@Component({selector: 'app-main-menu', template: ''})
class StubMainMenuComponent {
}
@Component({selector: 'router-outlet', template: ''})
class StubRouterOutletComponent {
}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng4LoadingSpinnerModule.forRoot()
      ],
      declarations: [
        AppComponent,
        StubMainMenuComponent,
        StubRouterOutletComponent
      ],
      providers: [ Ng4LoadingSpinnerService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
