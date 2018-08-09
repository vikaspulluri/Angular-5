import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent implements OnInit {
  num:number;
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  constructor() { }

  ngOnInit() {
  }
  onStarted(event:number){
    console.log(event);
    this.num = event;
    if(this.num%2 == 0){
      this.evenNumbers.push(this.num);
    }else{
      this.oddNumbers.push(this.num);
    }
  }

}
