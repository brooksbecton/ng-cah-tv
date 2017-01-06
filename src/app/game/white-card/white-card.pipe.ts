import { Pipe, PipeTransform } from '@angular/core';

let cards = require('./../../../assets/masterCah.json');

@Pipe({
  name: 'whiteCard'
})
export class WhiteCardPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return cards.whiteCards[value];
  }

}
