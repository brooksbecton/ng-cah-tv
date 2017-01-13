import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service'



@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  player;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login(nickname: string): void {
    this.authService.login(nickname).then((data) => {
      this.player = data
    });
  }

}
