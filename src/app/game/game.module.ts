import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { GameComponent } from './game.component'
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { PlayerComponent } from './player/player.component';

import { firebaseConfig } from './../../assets/firebaseConfig';
import { BlackCardComponent } from './black-card/black-card.component';
import { WhiteCardComponent } from './white-card/white-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    BlackCardComponent,
    GameComponent,
    PlayerComponent,
    TableComponent,
    WhiteCardComponent
  ],
  providers: [
    TableService
  ]
})
export class GameModule { }
