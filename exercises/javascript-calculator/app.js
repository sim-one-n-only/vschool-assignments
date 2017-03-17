var readline = require("readline-sync");

var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");
operations = ["add", "sub", "mul", "div"];
var choice = readline.keyInSelect(operations, "Please enter the operation to perform: ");
var math = function getAnswer(num1, num2) {
        if(choice === 0) {
        var add = parseInt(num1) + parseInt(num2);
        console.log(add);
    }else if(choice === 1) {
        var sub = parseInt(num1) - parseInt(num2);
        console.log(sub);
    }else if(choice === 2) {
        var mul = parseInt(num1) * parseInt(num2);
        console.log(mul);
    }else if(choice === 3) {
        var div = parseInt(num1) / parseInt(num2);
        console.log(div);
    }
}

math(num1, num2);