import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataRowService {

  constructor(private http: HttpClient) { }

  private base_url = '/api/';
  private module_base = 'ml_data/';
  get_data_row(id: number | string) {
    return this.http.get(`${this.base_url}${this.module_base}${id}/`);
  }

  save_data_row(id: number | string, formData) {
    return this.http.post(`${this.base_url}${this.module_base}${id}/`, formData);
  }

  upload_file(formData: FormData) {
    const req = new HttpRequest('POST', `${this.base_url}${this.module_base}main_data/`, formData);
    return this.http.request(req);
  }

  get_all_data() {
    return this.http.get(`${this.base_url}${this.module_base}list/`);
  }

  add_new_row(formData) {
    return this.http.post(`${this.base_url}${this.module_base}list/`, formData);
  }

  del_row(cust_id) {
    return this.http.delete(`${this.base_url}${this.module_base}${cust_id}/`, cust_id);
  }

  get_row_to_csv(cust_id) {
    return this.http.post(`${this.base_url}${this.module_base}row_to_csv/${cust_id}/`, cust_id, {responseType: 'text'});
  }
}
