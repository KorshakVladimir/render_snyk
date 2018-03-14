import { Component, OnInit } from '@angular/core';
import { DataRowService } from '../data-sets-management/data-row.service';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
  public data_sets_tree: Array<object> = [];
  public selected_set;

  constructor(
      private service: DataRowService,
      private router: Router
  ) { }

  ngOnInit() {
    this.all_data_sets();
  }
  private expandRecursive(node, isExpand) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        });
    }
  }
  all_data_sets() {
    this.service.all_data_sets().subscribe(
        (res: Array<object>)  => {
            this.data_sets_tree = res;
            setTimeout(() => {
                this.data_sets_tree.forEach( node => {
                    this.expandRecursive(node, true);
                } );
            },200);
        },
        error => error.error
        );
  }
  select_data_set() {
      if (Object.keys(this.selected_set).indexOf('children') > -1 ) {
          this.router.navigate(['/edit_company', this.selected_set.data]);
          return;
      }
      this.router.navigate(['/edit_data_set', this.selected_set.data]);
  }
}
