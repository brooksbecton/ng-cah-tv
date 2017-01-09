import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
let uid = require('human-readable-ids').hri, i;

import { BlackCard } from './../black-card/black-card'
import { CardsService } from './../cards.service'
import { Player } from './../player/Player'
import { PlayerService } from './../player/player.service'
import { WhiteCard } from './../white-card/white-card'
import { WhiteCardService } from './../white-card/white-card.service'
import { Table } from './Table'
import { TableService } from './table.service'


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: FirebaseListObservable<any[]>;
  players: FirebaseListObservable<any[]>;
  tableId: string;
  private routeSub: any;

  constructor(
    private cards: CardsService,
    private playersService: PlayerService,
    private route: ActivatedRoute,
    private tableService: TableService,
    private whiteCardService: WhiteCardService
  ) {

    this.tableService.getDefaultCards();
  }

  ngOnInit() {
    this.getRouteParams();
  }

  getPlayers() {
    this.players = this.playersService.getAllPlayers(this.tableId);
  }

  getRouteParams(): void {
    let id = ""

    this.routeSub = this.route.params.subscribe(params => {
      this.tableId = params['id'];
      this.getTableInfo(this.tableId);
    });
  }

  getTableInfo(id) {
    this.table = this.tableService.getTable(id)
  }

  initNewTable(): void {
    this.tableId = uid.random();
    let defaultTable = new Table;

    defaultTable.id = this.tableId;

    this.tableService.putTable(this.tableId, defaultTable);
  }


  OnDestroy() {
    this.routeSub.unsubscribe();
  }

}
