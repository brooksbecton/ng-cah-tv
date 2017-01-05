import { Component, OnInit } from '@angular/core';

import { Table } from './models/Table'
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

  constructor(private tableDb: TableService) { }

  ngOnInit() {
    //this.initTable();
  }

  initTable(): void{
    this.id = shortid.generate();
    let defaultTable = new Table;

    defaultTable.id = this.id;

    this.tableDb.putTable(this.id, defaultTable);
  }

}
