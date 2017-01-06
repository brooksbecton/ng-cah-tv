import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { WhiteCard } from './white-card';

@Injectable()
export class WhiteCardService {

  constructor(private af: AngularFire) { }

  //White Card CRUD
  deleteCard(id: string, whiteCard: WhiteCard): void {
    const whiteCardsRef = this.af.database.object('/games/' + id + 'whiteCard');
    whiteCardsRef.remove();
  }

  getCard(id: string): any {
    return this.af.database.object('/games/' + id + 'whiteCard');
  }

  putCard(id: string, whiteCard: WhiteCard): void {
    const whiteCardsRef = this.af.database.object('/games/' + id + 'whiteCard');
    whiteCardsRef.set(whiteCard);
  }

  updateCard(id: string, whiteCard: WhiteCard): void {
    const whiteCardsRef = this.af.database.object('/games/' + id + 'whiteCard');
    whiteCardsRef.update(whiteCard);
  }


}
