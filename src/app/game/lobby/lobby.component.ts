import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from './../player/player'
import { PlayerService } from './../player/player.service'


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  tableId: string;
  players: Player[];
  private routeSub: any;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getRouteParams().subscribe((paramTableId) =>{
      this.tableId = paramTableId.id;
      this.getTablePlayers();
    });
  }

  getTablePlayers(){
      this.playerService.getAllPlayers(this.tableId).subscribe((players) => {
        this.players = players;
      });
  }

  getRouteParams(): any {
    return this.route.params;
  }

  OnDestroy() {
    this.routeSub.unsubscribe();
  }

}
