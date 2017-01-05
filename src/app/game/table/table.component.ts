import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
var shortid = require('shortid');

import { Table } from './Table'
import { TableService } from './table.service'
import { Player } from './../player/Player'


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: FirebaseListObservable<any[]>;
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

    let defaultPlayer = new Player("Chris");


    defaultTable.id = this.id;
    defaultTable.players.push(defaultPlayer);

    this.tableDb.putTable(this.id, defaultTable);
  }

  OnDestroy(){
    this.routeSub.unsubscribe();
  }

}
