var readline = require("readline-sync");

var fnumber = readline.question("What is your first number? ");
var snumber = readline.question("What is your second number? ");
var operation = readline.question("Which operation do you want? ");

module.exports = {
    fnumber: fnumber,
    snumber: snumber,
    operation: operation
}