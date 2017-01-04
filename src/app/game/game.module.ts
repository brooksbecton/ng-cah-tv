import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { FirebaseService } from './firebase.service'
import { GameComponent } from './game.component'
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

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
    FirebaseService
  ]
})
export class GameModule { }
