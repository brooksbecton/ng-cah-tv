import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Table } from './Table'
import { TableService } from './table.service'

var shortid = require('shortid');


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: Table;
  id: string;
  private routeSub: any;

  constructor(
    private route: ActivatedRoute,
    private tableDb: TableService) { }

  ngOnInit() {
    this.getRouteParams();
  }

  getRouteParams(): void {
    let id = ""
    
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getTableInfo(this.id);
    });
  }

  getTableInfo(id){
    this.table = this.tableDb.getTable(id)
  }

  initTable(): void {
    this.id = shortid.generate();
    let defaultTable = new Table;

    defaultTable.id = this.id;

    this.tableDb.putTable(this.id, defaultTable);
  }

  OnDestroy(){
    this.routeSub.unsubscribe();
  }

}
