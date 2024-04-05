"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingClass = void 0;
var TestingClass = /** @class */ (function () {
    function TestingClass(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
    }
    TestingClass.prototype.doSomeThing = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    TestingClass.prototype.doSomethingElse = function (another) {
        console.log("something else: " + another);
    };
    return TestingClass;
}());
exports.TestingClass = TestingClass;
var point = new TestingClass(12, 23);
point.x = 13;
point.y = 45;
point.doSomeThing();
