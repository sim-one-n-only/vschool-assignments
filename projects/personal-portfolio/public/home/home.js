/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("personalPortfolio");

app.controller("homeCntrl", ["$scope", function ($scope) {

}])

app.directive("home", function () {
    return {
        restrict: 'AE',
        template: "<h1>Simone Nathaniel</h1><h3>FULL STACK WEB DEVELOPER</h3><img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Meanstack-624x250.jpg'>"
    }
})