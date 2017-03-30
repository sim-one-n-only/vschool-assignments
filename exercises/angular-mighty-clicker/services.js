var app = angular.module('mightyClicker');

app.service("blueService", function () {
    this.score = 100;

    this.counterIncrement = function () {
        return this.score += 1;
    }

    this.counterDecrement = function () {
        return this.score -= 1;
    }

    this.reset = function () {
        if (this.score === -1) {
            return this.score = 100;
        } else {
            return this.score;
        }
    }

})

app.service("redService", function () {
    this.score = 100;

    this.counterIncrement = function () {
        return this.score += 1;
    }

    this.counterDecrement = function () {
        return this.score -= 1;
    }

    this.reset = function () {
        if (this.score === -1) {
            return this.score = 100;
        } else {
            return this.score;
        }
    }

})