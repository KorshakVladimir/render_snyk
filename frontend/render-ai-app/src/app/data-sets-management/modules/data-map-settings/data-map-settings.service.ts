import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataMapSettingsService {

  constructor(private http: HttpClient) { }

  private base_url = '/api/';
  private company_base = 'data_mapping/';

  get_all_data_mapping() {
      return this.http.get(`${this.base_url}${this.company_base}map_data_settings/`);
  }
  create_data_mapping(formData) {
      return this.http.post(`${this.base_url}${this.company_base}map_data_settings/`, formData);
  }
}
