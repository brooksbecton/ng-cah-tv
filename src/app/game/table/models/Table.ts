import { WhiteCard }  from './white-card'
import { Player }  from './player'

export class Table{
    id: string = null;
    players: Array<Player> = null;
    whiteCard: WhiteCard = null;
    czarId: number = null;
}