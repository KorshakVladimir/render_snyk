import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataRowService } from '../data-row.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-set-edit',
  templateUrl: './data-set-edit.component.html',
  styleUrls: ['./data-set-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataSetEditComponent implements OnInit {
  public data_set;
  public cols;
  constructor(private service: DataRowService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.get_data_set();
  }
  get_data_set() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.get_data_set(id).subscribe(
        res => {
            this.data_set = res;
            this.cols = this.prepare_cols(this.data_set);
        },
        error => error.error
        );
  }
  prepare_cols (data) {
    let data_cols = [];
    if (data.length > 0) {
      data_cols = Object.keys(data[0]);
    }
    return data_cols;
  }
  upload(dt) {
    dt.exportCSV();
  }
}
