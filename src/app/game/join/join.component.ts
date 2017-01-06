import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from './../player/player.service'
import { Player } from './../player/Player'


@Component({
  selector: 'join-game',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
  providers: [PlayerService]
})
export class JoinComponent implements OnInit {

  playerName = "";
  tableId: string = "";

  constructor(
    private playerDb: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {    
  }

  joinTable() {
    let newPlayer = new Player(this.playerName);
    this.playerDb.putPlayer(this.tableId, newPlayer);
    this.router.navigate(['/game/table/' + this.tableId]);
  }

}
