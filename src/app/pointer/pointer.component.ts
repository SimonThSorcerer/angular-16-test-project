import { Component } from '@angular/core';
// import {TestComponentComponent} from './point-importing-test';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.css']
})

export class PointerComponent {
  x: number = 5;
  y: number = 15;
  // pointerFunction: TestComponentComponent;

  // constructor () {
  //   this.pointerFunction = new TestComponentComponent(2,3);
  // }

  draw() {
    console.log(`X: ` + this.x + `, Y: ` + this.y);
  }
}
