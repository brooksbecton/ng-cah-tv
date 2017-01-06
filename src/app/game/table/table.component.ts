import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
var shortid = require('shortid');

import { CardsService } from './../cards.service'
import { Player } from './../player/Player'
import { WhiteCard } from './../white-card/white-card'
import { Table } from './Table'
import { TableService } from './table.service'


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  whiteCards: WhiteCard[];
  table: FirebaseListObservable<any[]>;
  id: string;
  private routeSub: any;

  constructor(
    private route: ActivatedRoute,
    private tableDb: TableService,
    private cards: CardsService) {
      this.whiteCards = cards.getWhiteCards();
    }

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

  getDefaultCards(){

  }

  OnDestroy(){
    this.routeSub.unsubscribe();
  }

}
