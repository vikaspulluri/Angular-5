import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = "";
  
  constructor() {  }

  onReset() {
  	this.username = "";
  }
  
}
