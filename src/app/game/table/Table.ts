import { WhiteCard }  from './../white-card/white-card'
import { Player }  from './../player/player'

export class Table{
    id: string = null;
    players: Array<Player> = null;
    whiteCard: WhiteCard = null;
    czarId: number = null;
}