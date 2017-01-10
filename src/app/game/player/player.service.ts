import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { Player } from './Player'


@Injectable()
export class PlayerService {

  constructor(private af: AngularFire) { }
  //Player CRUD
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

  putPlayer(id: string, player: Player): any {
      return this.af.database.list('/games/' + id + '/players').push(player);
  }

  updatePlayer(id: string, player: Player): void {
    const tableRef = this.af.database.object('/games/' + id + '/players');
    tableRef.update(player);
  }
}
