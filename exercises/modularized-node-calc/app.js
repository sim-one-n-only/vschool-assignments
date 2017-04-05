var math = require("./start");
var addition = require("./add");
var subtraction = require("./sub");
var multiplication = require("./mult");
var division = require("./div");
var exponentiation = require("./exp");

var calculate = function () {
    if (math.operation === "add") {
        var total = addition.add();
        console.log(total);
    } else if (math.operation === "subtract") {
        var total = subtraction.sub();
        console.log(total);
    } else if (math.operation === "multiply") {
        var total = multiplication.multiply();
        console.log(total);
    } else if (math.operation === "divide") {
        var total = division.div();
        console.log(total);
    } else if (math.operation === "exponent") {
        var total = exponentiation.exp();
        console.log(total);
    }
}

calculate();