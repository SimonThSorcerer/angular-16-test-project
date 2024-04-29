function printToConsole(message) {
    console.log(message);
}
var message2 = "somethin";
printToConsole(message2);
function doSomething() {
    var counter = 0;
    for (var i = 0; i < 5; i++) {
        console.log(i);
        counter = i;
    }
    console.log("Finally" + counter);
}
doSomething();
var ColorRed = 0;
var ColorGreen = 1;
var count = 5;
count = 12;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
;
var message3 = 'abc';
var endswith = message3.endsWith('c');
