import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  private base_url = '/api/';
  private company_base = 'company_management/';

  get_company_names() {
      return this.http.get(`${this.base_url}${this.company_base}company_names/`);
  }
  get_company(id) {
      return this.http.get(`${this.base_url}${this.company_base}company/${id}/`);
  }
  create_company(formData) {
      return this.http.post(`${this.base_url}${this.company_base}company/0/`, formData);
  }
  update_company(formData, id) {
      return this.http.put(`${this.base_url}${this.company_base}company/${id}/`, formData);
  }
  delete_company(id) {
      return this.http.delete(`${this.base_url}${this.company_base}company/${id}/`);
  }
}
