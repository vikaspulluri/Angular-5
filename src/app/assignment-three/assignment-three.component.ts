import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isMsgVisible:boolean = false;
  logs:number[] = [];
  toggleDisplay(){
  	this.isMsgVisible = !this.isMsgVisible;
  	this.logs.push(this.logs.length+1);
  }
}
