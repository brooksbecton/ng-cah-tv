import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Player } from './../game/player/Player'


@Injectable()
export class AuthService {
  
  private player: Player = new Player();

  constructor(
    private af: AngularFire
  ) { 
  }

  getPlayerInfo(): Player{
    if(this.player) return this.player
    else return undefined
  }
  
  isSignedIn(){
    return this.af.auth;
  }

  login(nickname: string): any {
    this.player.name = nickname;

    return this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    }).then((user) => {
      this.player.id = user.uid;
    });
  }

  logout() {
    this.af.auth.logout();
  }

  showLogin(){
    
  }

}
