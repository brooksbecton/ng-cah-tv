import { BlackCard }  from './black-card'

export class Player{
    name: string;
    points: number;
    czar: boolean;
    cards: Array<BlackCard>;
}