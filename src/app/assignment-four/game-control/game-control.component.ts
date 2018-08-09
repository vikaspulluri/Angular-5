import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() started = new EventEmitter<number>();
  counter:number = 1;
  interval;
  constructor() { }

  ngOnInit() {
  }
  onStart(){
    this.interval = setInterval(function(){
      this.started.emit(this.counter++);
    }.bind(this),1000)
    
  }
  onEnd(){
    clearInterval(this.interval);
  }

}
