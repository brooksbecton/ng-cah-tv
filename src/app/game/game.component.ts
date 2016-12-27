import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  status: string = "";

  constructor() { }

  ngOnInit() {
  }

  initNewGame(): void {
    this.status = "bueno";
  }

}
