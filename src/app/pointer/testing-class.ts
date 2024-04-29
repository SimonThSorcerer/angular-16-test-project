export class TestingClass {

  constructor(private x?: number, private y?: number) {
  }

  doSomeThing() {
    console.log(`X: ` + this.x + `, Y: ` + this.y)
  }

  doSomethingElse(another: TestingClass) {

    console.log(`something else: ` + another)
  }

  set X(newX: number) {
    if (newX < 0) {
      throw new Error(`value cannot be less than 0.`)
    }
    this.x = newX;
  }

  set Y(newY: number) {
    this.y = newY;
  }

  get X() {
    return this.x !== undefined ? this.x : 0;
  }

  get Y() {
    return this.y !== undefined ? this.y : 0;
  }


}

let point = new TestingClass(12, 23);
point.X = 12;
point.Y = 24;
point.doSomeThing();


