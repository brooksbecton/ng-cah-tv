import { Pipe, PipeTransform } from '@angular/core';

let cards = require('./../../../assets/masterCah.json');

@Pipe({
  name: 'blackCard'
})
export class BlackCardPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return cards.blackCards[value];
  }

}
