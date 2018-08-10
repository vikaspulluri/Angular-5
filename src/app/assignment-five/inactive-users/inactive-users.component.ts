import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users:object[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.users;
  }
  setToactive(id:number){
    this.usersService.changeStatus(id);
  }

}
