import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  counter: number;
  constructor(){}

  onGameStarted(counter:number){
    this.counter = counter;
    counter % 2 ? this.oddNumbers.push(counter) : this.evenNumbers.push(counter);
  }
}
