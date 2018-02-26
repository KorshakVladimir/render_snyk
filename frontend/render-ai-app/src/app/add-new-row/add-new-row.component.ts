import { Component, OnInit } from '@angular/core';
import {  DataRowService } from '../data-row.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-row',
  templateUrl: './add-new-row.component.html',
  styleUrls: ['./add-new-row.component.css']
})
export class AddNewRowComponent implements OnInit {
  public textValue = `{
"cust_ID":""
}`;
  public error_text: string;
  constructor(private service: DataRowService,
              private router: Router) { }

  ngOnInit() {
  }

  handle_save() {
    const formData: FormData = new FormData();
    formData.append('data', this.textValue);
    let data_obj;
    try {
       data_obj = JSON.parse(this.textValue);
    } catch {
      this.error_text = 'Could not parse to json';
      return;
    }
    if (!('cust_ID' in data_obj)) {
      this.error_text = 'key cust_ID is required';
      return;
    }
    const id = data_obj['cust_ID'];

    this.service.add_new_row(formData).subscribe((data: any) => {
        this.router.navigate(['/cust_id', id]);
      },
      error => {
        this.error_text = error.error;
      }
    );
  }
}
