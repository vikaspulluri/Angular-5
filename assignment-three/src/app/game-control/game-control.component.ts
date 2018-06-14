import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	counter: number = 0;
	interval;
	@Output() gameStarted = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  	onStart(){
  		this.interval = setInterval(() => {
  			this.gameStarted.emit(this.counter++)
  		},1000) 
  	}

  	onStop(){
  		clearInterval(this.interval);
  	}
}
