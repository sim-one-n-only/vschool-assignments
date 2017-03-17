var caughtGoombas = document.getElementById("caughtGoombas");
var caughtBobombs = document.getElementById("caughtBobombs");
var caughtCheeps = document.getElementById( "caughtCheeps" );
var costGoombas = 5;
var costBobombs = 7;
var costCheeps = 11;


 function calcGoomba() {
    console.log(caughtGoombas.value);
     document.getElementById("totalGoomba").innerHTML = caughtGoombas.value * costGoombas;
     totalCost += caughtGoombas.value * costGoombas;
     console.log(totalCost);
}

function calcBobombs() {
    console.log(caughtBobombs.value);
    document.getElementById("totalBobomb").innerHTML = caughtBobombs.value * costBobombs;
    totalCost += caughtBobombs.value * costBobombs;
    console.log(totalCost);
}

function calcCheeps() {
    console.log(caughtCheeps.value);
    document.getElementById("totalCheep").innerHTML = caughtCheeps.value * costCheeps;
    totalCost += caughtCheeps.value * costCheeps;
    console.log(totalCost);
}


function calcTotal() {
   document.getElementById("caughtGoombas").value;
    document.getElementById(costGoombas);
    document.getElementById("caughtBobombs").value;
    document.getElementById(costBobombs);
    document.getElementById("caughtCheeps").value;
    document.getElementById(costCheeps);
    var calcTotal = (costGoombas * caughtBobombs.value) + (costBobombs * caughtBobombs.value)+ (costCheeps * caughtCheeps.value);
    document.getElementById("totalCost").innerHTML = calcTotal;
}
