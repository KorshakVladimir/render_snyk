import { Injectable } from '@angular/core';

@Injectable()
export class DataHelperService {

  constructor() { }
  sorting_mapping_list(a: any, b: any) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }
  get_columns_from_data_set(res) {
      return res.data[0].map(el => ({'name': el})).sort(this.sorting_mapping_list);
  }

}
