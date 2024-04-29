import { Component } from '@angular/core';

@Component({
  selector: 'app-simon-test-1',
  templateUrl: './simon-test-1.component.html',
  styleUrls: ['./simon-test-1.component.css']
})
export class SimonTest1Component {
  x:number = 10;
  y:number = 15;

  constructor () {

  }

  draw() {
  console.log(`X: `+  this.x  + `Y: ` + this.y)
  }
}
