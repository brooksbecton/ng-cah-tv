import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './../player/Player'
import { PlayerService } from './../player/player.service'
import { TableService } from './../table/table.service'
import { WhiteCardService } from './../white-card/white-card.service'

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
    private playerService: PlayerService,
    private router: Router,
    private tableService: TableService,
    private whiteCardService: WhiteCardService,
  ) { }

  ngOnInit() {
  }

  joinTable() {

    let defaultCardAmount = 10;

    let newPlayer = new Player(this.playerName);

    this.playerService.putPlayer(this.tableId, newPlayer).then(snapshot =>{
      newPlayer.id = snapshot.key;
      this.tableService.dealPlayerCards(this.tableId, newPlayer.id, defaultCardAmount);
    });

    

    this.router.navigate(['/game/table/' + this.tableId]);
  }

}
