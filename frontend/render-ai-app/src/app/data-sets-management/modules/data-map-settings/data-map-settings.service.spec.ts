import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { DataMapSettingsService } from './data-map-settings.service';

describe('DataMapSettingsService', () => {
  let service: DataMapSettingsService;
  // let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // const httpSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        DataMapSettingsService,
        { provide: HttpClient }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    service = TestBed.get(DataMapSettingsService);
    // httpSpy = TestBed.get(HttpClient);
  });


  it('get_all_data_mapping turn off picked', () => {
  const _origin_cols_full = [{'name': '1', 'picked': true}, {'name': '2', 'picked': false}];
  const mapped_columns = [{'origin_column': '3'}];
  expect(service.mark_some_origin_cols(_origin_cols_full, mapped_columns).filter(el => el.picked).length)
    .toBe(0,
        'must be false all picked value');
  });
  it('get_all_data_mapping turn on picked', () => {
  const _origin_cols_full = [{'name': '1', 'picked': false}, {'name': '2', 'picked': false}];
  const mapped_columns = [{'origin_column': '1'}, {'origin_column': '2'}];
  expect(service.mark_some_origin_cols(_origin_cols_full, mapped_columns).filter(el => el.picked).length)
    .toBe(2,
        'must be false one picked');
  });
  it('get_all_data_mapping replace picked', () => {
  const _origin_cols_full = [{'name': '1', 'picked': true}, {'name': '2', 'picked': false}];
  const mapped_columns = [{'origin_column': '2'}];
  expect(service.mark_some_origin_cols(_origin_cols_full, mapped_columns).filter(el => el.picked).length)
    .toBe(1,
        'picked value should be replaced');
  });
});
