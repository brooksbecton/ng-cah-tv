import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { GameComponent } from './game.component'
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { PlayerComponent } from './player/player.component';
import { BlackCardComponent } from './black-card/black-card.component';
import { BlackCardService } from './black-card/black-card.service';
import { WhiteCardComponent } from './white-card/white-card.component';
import { JoinComponent } from './join/join.component';

import { firebaseConfig } from './../../assets/firebaseConfig';
import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    BlackCardComponent,
    GameComponent,
    PlayerComponent,
    TableComponent,
    WhiteCardComponent,
    JoinComponent,
    KeysPipe
  ],
  providers: [
    BlackCardService,
    TableService
  ]
})
export class GameModule { }
