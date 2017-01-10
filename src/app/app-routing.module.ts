import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { JoinComponent } from './game/join/join.component';
import { LobbyComponent } from './game/lobby/lobby.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './game/table/table.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'game/lobby/:id', component: LobbyComponent },
  { path: 'game/table', component: TableComponent },
  { path: 'game/join', component: JoinComponent },
  { path: 'game/join/:id', component: JoinComponent },
  { path: 'game/table/:id', component: TableComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }