import { WhiteCard }  from './../white-card/white-card'
import { Player }  from './../player/player'

export class Table{
    id: string = "";
    players: Array<Player> = [];
    whiteCard: WhiteCard = {text: ""};
    czarId: number = -1;
}