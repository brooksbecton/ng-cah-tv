import { BlackCard } from './../black-card/black-card'

export class Player {
    id: string;
    name: string;
    points: number;
    czar: boolean;
    cards: Array<BlackCard>;

    constructor(
        id: string = "", 
        name: string = "",
        points: number = 0,
        czar: boolean = false,
        cards: BlackCard[] = []) {
        this.id = id;
        this.name = name;
        this.points = points;
        this.czar = czar;
        this.cards = cards;
    };
}