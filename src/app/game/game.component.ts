import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TableService } from './table/table.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  tableId: string = "";

  constructor(
    private router: Router,
    private tableService: TableService) {
  }

  ngOnInit() {
  }

  initNewTable(): void {
    let id = this.tableService.initNewTable();
    this.router.navigateByUrl('game/table/' + id);
  }

}
