import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-assignment-five',
  templateUrl: './assignment-five.component.html',
  styleUrls: ['./assignment-five.component.css'],
  providers: [UsersService]
})
export class AssignmentFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}
