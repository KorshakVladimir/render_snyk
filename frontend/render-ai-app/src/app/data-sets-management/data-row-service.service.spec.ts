import { TestBed, inject } from '@angular/core/testing';

import { DataRowServiceService } from './data-row.service';

describe('DataRowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRowServiceService]
    });
  });

  it('should be created', inject([DataRowServiceService], (service: DataRowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
