import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  initialValue: number = 0;
  countUp() {
    this.initialValue++
    console.log(this.initialValue)
  }
  countDown() {
    this.initialValue--
    console.log(this.initialValue);
  }
}
