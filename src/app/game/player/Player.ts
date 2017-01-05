import { BlackCard }  from './../black-card/black-card'

export class Player{
    name: string;
    points: number;
    czar: boolean;
    cards: Array<BlackCard>;

    constructor(name: string, 
                points: number = 0, 
                czar: boolean = false, 
                cards: BlackCard[] = []){
        this.name = name;
        this.points = points;
        this.czar = czar;
        this.cards = cards;
    };
}