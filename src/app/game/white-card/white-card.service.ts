import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { WhiteCard } from './white-card';

@Injectable()
export class WhiteCardService {

  constructor(private af: AngularFire) { }

  //White Card CRUD
  deleteCard(tableId: string, playerId: string, whiteCard: WhiteCard): void {
    const whiteCardsRef = this.af.database.list('/games/' + tableId + '/' + playerId + '/cards');
    whiteCardsRef.remove();
  }

  putCard(tableId: string, playerId: string, whiteCard: WhiteCard): void {
    const whiteCardsRef = this.af.database.list('/games/' + tableId + '/players/' + playerId + '/cards');
    whiteCardsRef.push(whiteCard);
  }

  dealPlayerCards(tableId: string, playerId: string, cards: WhiteCard[]): void {
    console.log(playerId);
    while (cards.length > 0) {
      this.putCard(tableId, playerId, cards.pop())
    }
  }

}
