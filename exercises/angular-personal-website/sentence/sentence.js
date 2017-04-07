var app = angular.module("urbanDictionary");

app.controller("sentenceCntrl", ["$scope", "urbanService", function ($scope, urbanService) {
    urbanService.define().then(function (response) {
    $scope.definitions = response;
})
}])

app.directive("sentence", function () {
    return {
        restrict: 'E',
        template: "<span><h1>Usage</h1><h4 ng-repeat='item in definitions'>{{item.example}}</h4></span>"
    }
})