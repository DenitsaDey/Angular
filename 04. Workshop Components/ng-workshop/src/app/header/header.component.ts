import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  constructor(public userService: UserService) { }

  LoginHandler():void{
    this.userService.login();
  }
  LogoutHandler(): void{
    this.userService.logout();
  }

}
