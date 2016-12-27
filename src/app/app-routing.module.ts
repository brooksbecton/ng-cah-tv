import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { TableComponent } from './game/table/table.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'game/table', component: TableComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }