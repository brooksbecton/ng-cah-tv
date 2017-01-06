import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
let uid = require('human-readable-ids').hri, i;

import { BlackCard } from './../black-card/black-card'
import { CardsService } from './../cards.service'
import { Player } from './../player/Player'
import { PlayerService } from './../player/player.service'
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
  blackCards: BlackCard[];
  table: FirebaseListObservable<any[]>;
  players: FirebaseListObservable<any[]>;
  id: string;
  private routeSub: any;

  constructor(
    private cards: CardsService,
    private playersService: PlayerService,
    private route: ActivatedRoute,
    private tableDb: TableService,
    ) {

    this.getDefaultCards();
  }

  ngOnInit() {
    this.getRouteParams();

  }

  getDefaultCards() {
    this.whiteCards = this.cards.getWhiteCards();
    this.blackCards = this.cards.getBlackCards();
  }

  getPlayers(){
    this.players = this.playersService.getAllPlayers(this.id);
  }

  getRouteParams(): void {
    let id = ""

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getTableInfo(this.id);
    });
  }

  getTableInfo(id) {
    this.table = this.tableDb.getTable(id)
  }

  initNewTable(): void {
    this.id = uid.random();
    let defaultTable = new Table;

    defaultTable.id = this.id;

    this.tableDb.putTable(this.id, defaultTable);
  }


  OnDestroy() {
    this.routeSub.unsubscribe();
  }

}
