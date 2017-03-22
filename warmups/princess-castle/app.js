var player = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    isStarActive: false,
    setName: function (namePicked) {
        this.name = namePicked;
    },
    gotHit: function () {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        }
    },
    gotPowerUp: function () {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    },
    gameActive: true,
    addCoin: function (totalCoins) {
        this.totalCoins++;
    },
    print: function () {
        console.log("Name: " + this.name + ", Total Coins: " + this.totalCoins + ", Status: " + this.status + ", Star: " + this.isStarActive)
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function action() {
    var randomNum = randomNumber(0, 2);
    console.log(randomNum);
    if (randomNum === 0) {
        player.gotHit();
    } else if (randomNum === 1) {
        player.gotPowerUp();
    } else if (randomNum === 2) {
        player.totalCoins++;
    }
};

player.print();

for (var i = 0; i < 3; i++) {
    action();
    player.print();
}