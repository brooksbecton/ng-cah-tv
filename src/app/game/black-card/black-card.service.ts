import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { BlackCard } from './black-card';

@Injectable()
export class BlackCardService {

  blackCards: BlackCard[];

  constructor(private af: AngularFire) {
  }

  //Black Card CRUD
  deleteCard(id: string, blackCard: BlackCard): void {
    const blackCardRef = this.af.database.object('/games/' + id + 'blackCard');
    blackCardRef.remove();
  }

  getCard(id: string): any {
    return this.af.database.object('/games/' + id + 'blackCard');
  }

  putCard(id: string, blackCard: BlackCard): void {
    const blackCardRef = this.af.database.object('/games/' + id + 'blackCard');
    blackCardRef.set(blackCard);
  }

  updateCard(id: string, blackCard: BlackCard): void {
    const blackCardRef = this.af.database.object('/games/' + id + 'blackCard');
    blackCardRef.update(blackCard);
  }


}
