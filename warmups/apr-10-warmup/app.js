//write a function that takes an array of coins, and a string representing a coin. Options to the strings in the array, and the the string representing a coin are restricted to: penny, nickel, dime, quarter, half dollar, and dollar.
//
//This function will output how many of the second argument (the string) it would take to cover the total value of all of the coins in the array.
//
//Tests:


function coverValue(array, string) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "penny") {
            total += 1;
        } else if (array[i] === "nickel") {
            total += 5;
        } else if (array[i] === "dime") {
            total += 10;
        } else if (array[i] === "quarter") {
            total += 25;
        } else if (array[i] === "halfDollar") {
            total += 50;
        } else if (array[i] === "dollar") {
            total += 100;
        }
    }
    if (string === "quarter") {
        return (Math.ceil(total / 25))
    } else if (string === "nickel") {
        return Math.ceil(total / 5)
    } else if (string === "dime") {
        return Math.ceil(total / 10)
    }
}








console.log(coverValue(["penny", "nickel", "dime"], "quarter"));
console.log(coverValue(["penny", "nickel", "dime"], "nickel"));
console.log(coverValue(["penny", "nickel", "dime", "dime", "quarter"], "dime"));