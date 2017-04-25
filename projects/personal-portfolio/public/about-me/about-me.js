/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("personalPortfolio");

app.controller("aboutMeCntrl", ["$scope", function ($scope) {

}])

app.directive("aboutMe", function () {
    return {
        restrict: 'AE',
        templateUrl: 'background.html'
    }

})