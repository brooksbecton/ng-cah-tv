import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { Player } from './Player'


@Injectable()
export class PlayerService {

  constructor(private af: AngularFire) { }
  
  deletePlayer(id: string, player: Player): void {
    const tableRef = this.af.database.object('/games/' + id + '/players');
    tableRef.remove();
  }

  getPlayer(tableId: string, playerId: string): FirebaseListObservable<any> {
    return this.af.database.list('/games/' + tableId + '/players/' + playerId);
  }

  getAllPlayers(tableId: string): FirebaseListObservable<any> {
    return this.af.database.list('/games/' + tableId + '/players');
  }

  putPlayer(tableId: string, player: Player): any {
    console.log("putplayer: " + tableId + " " + player.id);
      return this.af.database.object('/games/' + tableId + '/players/' + player.id).set(player);
  }

  updatePlayer(id: string, player: Player): void {
    const tableRef = this.af.database.object('/games/' + id + '/players');
    tableRef.update(player);
  }
}
