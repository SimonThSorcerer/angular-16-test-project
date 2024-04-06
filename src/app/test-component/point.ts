export class Point {
  x: number;
  y: number;




  constructor (x : number, y: number) {
    this.x = x;
    this.y = y;
  }

  drawPoint(x: number,y: number) {
    return x+y;
  }
}
