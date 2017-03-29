var app = angular.module('favJordans');

app.service('shoeService', function () {
    this.jordans = [];

    var self = this;

    this.addShoe = function (shoe) {
        self.jordans.push(shoe);
        return self.jordans;
    }


    this.removeShoe = function (shoe, index) {
        var shoe = self.jordans[i];
        self.jordans.splice(shoe, 1);
        return self.jordans;
    }

})