import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataRowService {

  constructor(private http: HttpClient) { }

  private base_url = '/api/';
  private module_base = 'ml_data/';

  get_data_set(id) {
      return this.http.get(`${this.base_url}${this.module_base}data_set/${id}`);
  }
  upload_file(formData: FormData) {
    return this.http.post(`${this.base_url}${this.module_base}main_data/`, formData);
  }
  all_data_sets() {
    return this.http.get(`${this.base_url}${this.module_base}all_data_sets/`);
  }
  private company_base = 'company/';
  create_company(formData) {
      return this.http.post(`${this.base_url}${this.company_base}create/`, formData);
  }
  get_company_names() {
      return this.http.get(`${this.base_url}${this.company_base}company_names/`);
  }
}
