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
  update_data_mapping(formData, id) {
      return this.http.put(`${this.base_url}${this.company_base}map_data_settings/${id}/`, formData);
  }
  mark_some_origin_cols(_origin_cols_full, mapped_columns) {
    if (_origin_cols_full === undefined || _origin_cols_full.length === 0) {
      return;
    }
    let origin_cols_t = [..._origin_cols_full];
    origin_cols_t = origin_cols_t.map(el => ({...el, 'picked': false}));
    mapped_columns.forEach(m_col => {
      origin_cols_t = origin_cols_t.map(
          el => m_col.origin_column === el.name ? {...el, 'picked': true } : el  );
    });
    return origin_cols_t;
  }
}
