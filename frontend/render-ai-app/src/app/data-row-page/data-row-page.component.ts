import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataRowService } from '../data-row.service';

@Component({
  selector: 'app-data-row-page',
  templateUrl: './data-row-page.component.html',
  styleUrls: ['./data-row-page.component.css']
})
export class DataRowPageComponent implements OnInit {
  private id: number;

  public data_row;
  public cols_count: number;
  public saved_successfully: boolean;
  public error_text: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataRowService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.get_data_row(this.id).subscribe(data => {
      this.data_row = data;
      this.cols_count = Object.keys(data).length + 1;
    });
  }

  handle_save(rowData) {
    // todo: implement reformatting post results
    const formData: FormData = new FormData();
    formData.append('data', rowData.value);
    this.service.save_data_row(this.id, formData).subscribe((data: any) => {
      this.data_row = data;
      this.saved_successfully = true;
      this.error_text = '';
      setTimeout(() => this.saved_successfully = false, 2000);
      },
      error => {
        this.error_text = error.error;
      }
    );
    this.data_row = [];
  }

}

