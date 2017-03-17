var firstParty = new Parties("Penguins");
var secondParty = new Parties("Communists");
var whichParty;
var onHit = function (party) {
    var randoNum = randomNumber(5, 10);
    console.log(party.party + " took a hit! Population is now " + party.population);
    return party.population -= randoNum;
}

var onMiss = function (party) {
    console.log(party.party + " has missed!")
}

attackFirst();
while (firstParty.population > 0 && secondParty.population > 0) {
    sendNuke(whichParty, onHit, onMiss);
    if (whichParty === firstParty) {
        whichParty = secondParty
    } else if (whichParty === secondParty) {
        whichParty = firstParty
    }
}


function Parties(party, population) {
    this.party = party;
    this.population = 1000000;
}

function addParties(party, population) {
    new parties(party, population);
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attackFirst() {
    var randomNum = randomNumber(1, 2);
    console.log(randomNum);
    if (randomNum === 1) {
        whichParty = firstParty;
    } else if (randomNum === 2) {
        whichParty = secondParty;
    }
}

function sendNuke(party, onHit, onMiss) {
    var hitOrMiss = randomNumber(1, 2);
    if (hitOrMiss === 1) {
        return onHit(party);
    } else return onMiss(party);
}