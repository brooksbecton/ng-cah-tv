import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { CardsService } from './../cards.service'
import { BlackCard } from './../black-card/black-card'
import { Table } from './Table'
import { WhiteCard } from './../white-card/white-card'
import { WhiteCardService } from './../white-card/white-card.service'

let cahCards = require('./../../../assets/masterCah.json');

@Injectable()
export class TableService {
  whiteCards: WhiteCard[];
  blackCards: BlackCard[];
  constructor(
    private af: AngularFire,
    private cardsService: CardsService,
    private whiteCardService: WhiteCardService
  )
  {
    this.getDefaultCards();
   }

  //Table CRUD
  deleteTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.remove();
  }

  getDefaultCards() {
    this.whiteCards = this.cardsService.getWhiteCards();
    this.blackCards = this.cardsService.getBlackCards();
  }

  getTable(id: string): any {
    return this.af.database.object('/games/' + id);
  }

  putTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.set(table);
  }

  updateTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.update(table);
  }

  dealPlayerCards(tableId: string, playerId: string, cardAmount: number) {
    let cards = this.whiteCards.slice(0, cardAmount);
    this.whiteCardService.dealPlayerCards(tableId, playerId, cards);
  }


}
