import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlackCardComponent } from './black-card/black-card.component';
import { BlackCardPipe } from './black-card/black-card.pipe';
import { CardsService } from './cards.service'
import { GameComponent } from './game.component'
import { JoinComponent } from './join/join.component';
import { KeysPipe } from './keys.pipe';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { WhiteCardComponent } from './white-card/white-card.component';
import { WhiteCardPipe } from './white-card/white-card.pipe';
import { WhiteCardService } from './white-card/white-card.service';

import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    BlackCardComponent,
    GameComponent,
    JoinComponent,
    PlayerComponent,
    TableComponent,
    WhiteCardComponent,

    BlackCardPipe,
    KeysPipe,
    WhiteCardPipe,
    LobbyComponent
  ],
  providers: [
    CardsService,
    PlayerService,
    TableService,
    WhiteCardService
  ]
})
export class GameModule { }
