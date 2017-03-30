var app = angular.module('favJordans');

app.service('shoeService', function () {
    this.jordans = [];

    var self = this;

    this.addShoe = function (shoe) {
        self.jordans.push(shoe);
        return self.jordans;
    }


    this.removeShoe = function (deleteShoe) {
        for (var i = 0; i < self.jordans.length; i++) {
            if (deleteShoe === self.jordans[i].shoeName) {
                self.jordans.splice(i, 1);
                return self.jordans;
            }
        }
    }
})