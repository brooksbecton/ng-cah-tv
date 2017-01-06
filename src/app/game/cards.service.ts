import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
let cards = require('./../../assets/masterCah.json');

import { BlackCard } from './black-card/black-card'
import { WhiteCard } from './white-card/white-card'


@Injectable()
export class CardsService {

  blackCards: BlackCard[];
  whiteCards: WhiteCard[];

  constructor(
    private af: AngularFire
  ) { 
    this.blackCards = this.shuffle(cards.Base.black);
    this.whiteCards = this.shuffle(cards.Base.white);
  }

  shuffle(array): Array<any> {
    for (var i = array.length - 1; i > 0; i--) {
      var index = Math.floor(Math.random() * i);
      //swap
      var tmp = array[index];
      array[index] = array[i];
      array[i] = tmp;
    }
    return array;
  }

  getWhiteCards(): WhiteCard[]{
    return this.whiteCards;
  }

}
