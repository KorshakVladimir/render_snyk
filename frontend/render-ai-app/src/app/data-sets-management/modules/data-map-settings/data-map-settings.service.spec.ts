import { TestBed, inject } from '@angular/core/testing';

import { DataMapSettingsService } from './data-map-settings.service';

describe('DataMapSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMapSettingsService]
    });
  });

  it('should be created', inject([DataMapSettingsService], (service: DataMapSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
