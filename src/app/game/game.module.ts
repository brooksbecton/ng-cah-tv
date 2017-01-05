import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { GameComponent } from './game.component'
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';

import { firebaseConfig } from './../../assets/firebaseConfig';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    CardComponent,
    GameComponent,
    TableComponent
  ],
  providers: [
    TableService
  ]
})
export class GameModule { }
