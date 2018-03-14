import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataRowService {

  constructor(private http: HttpClient) { }

  private base_url = '/api/';
  private module_base = 'ml_data/';

  get_data_set(id) {
      return this.http.get(`${this.base_url}${this.module_base}data_set/${id}`);
  }
  create_data_set(formData: FormData) {
    return this.http.post(`${this.base_url}${this.module_base}data_set/0/`, formData);
  }
  update_data_set(formData: FormData, id) {
    return this.http.put(`${this.base_url}${this.module_base}data_set/${id}/`, formData);
  }
  update_data_set_row(formData: FormData, id) {
    return this.http.put(`${this.base_url}${this.module_base}data_set_row/${id}/`, formData);
  }
  all_data_sets() {
    return this.http.get(`${this.base_url}${this.module_base}all_data_sets/`);
  }
  delete_data_set(id) {
    return this.http.delete(`${this.base_url}${this.module_base}data_set/${id}/`);
  }
}
