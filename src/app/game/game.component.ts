import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  status: string = "";

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
  }

  initNewGame(): void {
    this.putNewGameOnDb();
  }

  putNewGameOnDb() {
    const games = this.af.database.object('/games');
    games.set({ 'id': '1', 'name': 'YaBoiBrooks' });
  };

}
