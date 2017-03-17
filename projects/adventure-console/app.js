var readline = require("readline-sync");
var types = ["February Cohort", "January Cohort", "VSchool Founders"];
var attackMoves = ["Machette", "Pocket Knife", "Chainsaw", "Machine Gun"];

var greet = readline.question("You wake up late! \"Ugh! How did I miss my alarm?\" You jump out of bed, throw on some clothes and run out the door. You know you're gonna be late to class, but you're instructors are cool so you figure they won't make a big deal. You walk into Impact Hub and its eerily quiet. You hop on the elevator and push 2...a bit nervous, but at least you made it. The elevator opens. You look through the glass to see the class is full, but everyone is kind of pacing around. \"Damn it! They must have had a fun activity! I bet I missed it!\" As you open the door to class, everyone's face turns toward you....\"Wait, somethings not right...\" ENTER PLAYER NAME: ");

var player = {
    name: greet,
    hitPoints: randomNumber(100, 150),
    inventory: attackMoves,
    printInventory: function () {
        console.log("Name: " + this.name);
        console.log("Hit Points: " + this.hitPoints);
        console.log("Inventory: " + this.inventory);
    }
}
player.printInventory();

while (player.hitPoints > 0) {
    start()
}

console.log("You dead!");

function start() {
    var walk = readline.question("To walk select w. To print inventory select p ");
    if (walk === 'p') {
        return player.printInventory();
    }
    if (walk === 'w') {
        console.log("walk forward");
        var rando = randomNumber(0, 30);
        console.log(rando);
        if (rando <= 10) {
            return enemyAttack(new Enemy());
        } else {
            return;
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Enemy() {
    this.type = getTypes(types);
    this.hitPoints = getHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

function getTypes(types) {
    return types[randomNumber(0, (types.length - 1))];
    types.splice(randomNumber(), 1);
}

function getHitPoints(type) {
    if (type === "February Cohort") {
        return randomNumber(80, 100);
    } else if (type === "January Cohort") {
        return randomNumber(50, 79);
    } else if (type === "VSchool Founders") {
        return randomNumber(20, 49);
    }
}

function enemyAttack(enemy) {
    var userResponseToEnemy = readline.question("You have come across the " + enemy.type + " of living dead. Hit points are " + enemy.hitPoints + " To attack select a. To run select r ")
    if (userResponseToEnemy === 'a') {
        console.log("ATTACK!!");
        return attack(enemy);
    } else if (userResponseToEnemy === 'r') {
        console.log("RUN!!");
        return run(enemy);
    }
}

function attack(enemy) {
    console.log("\"Holy shit! Wtf happened to the\" " + enemy.type + " \"Sorry guys, but it's you or me!\"")
    while (enemy.hitPoints > 0 && player.hitPoints > 0) {
        var willAttack = readline.keyIn("To attack with one of your items, select s ")
        if (willAttack === 's') {
            var damage = getAttacks();
            enemy.hitPoints -= damage;
            console.log(damage, "There are " + enemy.hitPoints + " remaining!")
        }
        if (enemy.hitPoints <= 0) {
            break;
        }
        enemyAttacks(enemy);
    }
    if (player.hitPoints > 0) {
        return beatEnemy();
    }
}

function getAttacks() {
    var attack = attackMoves[randomNumber(0, 3)];
    console.log("You attack with " + attack);
    if (attack === attackMoves[0]) {
        return randomNumber(11, 30);
    } else if (attack === attackMoves[1]) {
        return randomNumber(1, 10);
    } else if (attack === attackMoves[2]) {
        return randomNumber(31, 50);
    } else if (attack === attackMoves[3]) {
        return randomNumber(51, 70);
    }
}

function run(enemy) {
    var willRun = randomNumber(1, 2)
    if (willRun === 1) {
        console.log("You failed to escape!")
        enemyAttacks(enemy);
        return attack(enemy);
    } else {
        console.log("You've escaped!You might not be so lucky next time!")
        return start();
    }
}

function beatEnemy() {
    var playerHitIncrease = randomNumber(30, 50);
    player.hitPoints += playerHitIncrease;
    var inventoryItems = ["Pistol", "Shotgun", "Sword", "Baseball Bat", "Cellphone"];
    player.inventory.push(inventoryItems[randomNumber(0, 4)]);
    console.log("You just earned a " + player.inventory[player.inventory.length - 1] + ". You gained " + playerHitIncrease + " hit points!");
}

function enemyAttacks(enemy) {
    readline.keyIn(enemy.type + " attacks!");
    var enemyHit = randomNumber(10, 30);
    player.hitPoints -= enemyHit;
    console.log("You took " + enemyHit + " damage. You have " + player.hitPoints + " remaining!");
}