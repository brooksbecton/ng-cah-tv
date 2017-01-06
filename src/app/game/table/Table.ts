import { BlackCard } from './../black-card/black-card'
import { Player } from './../player/player'

export class Table {
    id: string;
    players: Array<Player>;
    blackCard: BlackCard;
    czarId: number;

    constructor(
        id: string = "",
        players: Array<Player> = [],
        blackCard: BlackCard = { text: "", pick: 1 },
        czarId: number = -1,) {
            this.id = id;
            this.players = players;
            this.blackCard = blackCard;
            this.czarId = czarId;
    }

    

}