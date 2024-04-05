function printToConsole(message : string): void {

  console.log(message);

}

let message2 = `something`

printToConsole(message2);

function doSomething() {
  let counter =0;
  for (let i = 0; i <5; i++) {
    console.log(i);
    counter = i;
  }
  console.log(`Finally` + counter);
}

doSomething();

const ColorRed = 0;
const ColorGreen = 1;

let count : number = 5;
count = 12;


enum Color {Red=0, Blue = 1, Green = 1};


let message3 = `12`;


let endswith = (<string>message3).endsWith(`c`);
let alternativeWay = (message3 as string).endsWith(`2`);

//arrow function

let log = function(message3 : string) {
  console.log(message3);
}

function arrowLog (message : string) {
  console.log(message);
}

arrowLog(`12`);


function drawPoint (x : string, y : number, c : any) {
  // ..
};

drawPoint(`12`,12,12);

interface testI {
  ez: string,
  az: string,
  megEz: number
}

function drawt (x : testI) {
};


let fsgsf= {ez: `Mosh`, az: `12`, megEz: 12};

drawt(
fsgsf
);


let oo = {
  tesa: 12,
  thgj: `12`
};

let x = `12`

let fc = drawPoint(`ez`, 12, 12);



function newFunctionTest (test: {x: string, y: number}, test2: {x: number, y: number}){

}



newFunctionTest({x:`120`, y: 23}, {x:12, y:12});



