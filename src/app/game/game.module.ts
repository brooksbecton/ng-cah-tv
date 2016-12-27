import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component'
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    GameComponent,
    TableComponent
  ]
})
export class GameModule { }
