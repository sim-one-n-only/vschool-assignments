var enemies = [];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function Enemy() {
    this.type = getTypes(types);
    this.hitPoints = getHitPoints(this.type);
    this.hordeSize = this.hitPoints * 3;
}

var types = ["Ancient Dragon", "Prowler", "Mighty Grunt"];

function getTypes(types) {
    return types[randomNumber(0, 2)];
}

function getHitPoints(type) {
    if (type === "Ancient Dragon") {
        return randomNumber(80, 100);
    } else if (type === "Prowler") {
        return randomNumber(50, 79);
    } else if (type === "Mighty Grunt") {
        return randomNumber(20, 49);
    }
}

for (var i = 0; i < 100; i++) {
    enemies.push(new Enemy);

}

console.log(enemies);