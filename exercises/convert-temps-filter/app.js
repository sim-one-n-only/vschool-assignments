var app = angular.module("tempFilter", []);

app.controller("mainCntrl", ["$scope", "tempService", "$filter", function ($scope, tempService, $filter) {
    $scope.temps = [10, 15, 20, 25, 30];

    $scope.Items = ["F","C","K"];




    tempService.getTemp().then(function (currentTemp) {

        $scope.temp = currentTemp.currently.temperature
    })


}])

app.filter("convertTemps", function () {
    return function (input, symbol) {
        console.log(symbol);
        if (isNaN(input)) {
            return input;
        } else {
            var symbol = symbol || 'F';
            if (symbol === "F") {
                return Math.round(input) + "°" + symbol;
            } else if (symbol === "C") {
                console.log(Math.round((input - 32) * (5 / 9)) + "°" + symbol)
                return Math.round((input - 32) * (5 / 9)) + "°" + symbol;
            } else if (symbol === "K") {
                return Math.round((input - 32) * (5 / 9) + 273.15) + "°" + symbol;
            }
        }
    }
})