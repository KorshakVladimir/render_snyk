import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'New Company',
          icon: 'fa-plus',
          routerLink: ['/new_company']
      },
      {
          label: 'New Data Set',
          icon: 'fa-plus',
          routerLink: ['/new_data_set']
      }
    ];
  }

}
