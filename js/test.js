"use strict";
class Test {
    constructor(name) {
        this.name = name;
    }
    display() {
        return "This is a " + this.name;
    }
}
let firsttest = new Test('CheckTEST');
let newmsg = firsttest.display();
