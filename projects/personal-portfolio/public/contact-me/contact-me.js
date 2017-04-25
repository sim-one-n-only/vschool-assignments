/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("personalPortfolio");

app.controller("contactMeCntrl", ["$scope", function ($scope) {

}])

app.directive("contactMe", function () {
    return {
        restrict: 'AE',
        templateUrl: 'contact-info.html'
    }
})