var app = angular.module("urbanDictionary");

app.controller("defineCntrl", ["$scope", "urbanService", function ($scope, urbanService) {
    urbanService.define().then(function (response) {
        console.log(response);
        $scope.definitions = response;
    })
}])

app.directive("define", function () {
    return {
        restrict: 'E',
        template: "<span><h1>Definition:</h1><h4 ng-repeat='item in definitions'>{{item.definition}}</h4></span>"
    }

})