import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Player } from './../player/Player'
import { PlayerService } from './../player/player.service'
import { TableService } from './../table/table.service'
import { WhiteCardService } from './../white-card/white-card.service'
import { AuthService } from './../../auth/auth.service'

@Component({
  selector: 'join-game',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
  providers: [PlayerService]
})
export class JoinComponent implements OnInit {

  idFromParam: boolean = false;
  playerName = "";
  tableId: string = "";

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private tableService: TableService,
    private whiteCardService: WhiteCardService,
  ) { }

  ngOnInit() {
    this.getRouteParams().subscribe((paramTableId) => {
      if (paramTableId.id) {
        this.tableId = paramTableId.id;
        this.idFromParam = true;
        this.playerService.getAllPlayers(this.tableId);
      }
    });
  }

  getRouteParams(): any {
    return this.route.params;
  }

  joinTable() {
    let defaultCardAmount = 10;
    let newPlayer: Player;

    this.authService.isSignedIn().subscribe((user) => {

       
      //If the user is not signed in we will sign them in Anon 
      if(!user){
        this.authService.login(this.playerName);
      }

      newPlayer = new Player(user.uid, this.playerName);

      this.playerService.putPlayer(this.tableId, newPlayer).then((snapshot) => {
        this.tableService.dealPlayerCards(this.tableId, newPlayer.id, defaultCardAmount);
      });

      this.router.navigate(['/game/lobby/' + this.tableId]);
    });

  };



}
