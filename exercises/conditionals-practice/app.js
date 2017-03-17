var lessThan = function (num1, num2) {
    if (num1 < num2) {
        return(num1);
    } else {
        return(num2);
    }
}

console.log(lessThan(99, 56));


var monkeyTrouble = function (aSmile, bSmile) {
    if (aSmile && bSmile) {
        return true;
    } else if (aSmile || bSmile) {
        return false;
    } else if (!aSmile || !bSmile) {
        return true;
    }
} 

console.log(monkeyTrouble(true, true)); //→ true  
console.log(monkeyTrouble(false, false)); //→ true  
console.log(monkeyTrouble(true, false)) //→ false 