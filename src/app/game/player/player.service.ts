import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Player } from './Player'


@Injectable()
export class PlayerService {

  constructor(private af: AngularFire) { }
  //Player CRUD
  deletePlayer(id: string, player: Player): void {
    const tableRef = this.af.database.object('/games/' + id + '/players');
    tableRef.remove();
  }

  getPlayer(id: string): Player {
    var player: Player;
    const tableRef = this.af.database.list('/games/' + id + '/players');
    tableRef
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          player = snapshot.val();
        });
      })
    return player;
  }

  putPlayer(id: string, player: Player): void {
    const tableRef = this.af.database.object('/games/' + id + '/players');
    tableRef.set(player);
  }

  updatePlayer(id: string, player: Player): void {
    const tableRef = this.af.database.object('/games/' + id + '/players');
    tableRef.update(player);
  }
}
