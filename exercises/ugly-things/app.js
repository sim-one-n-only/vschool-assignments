var app = angular.module('uglyThings', []);

app.controller('mainCntrl', ["$scope", function ($scope) {
    $scope.uglyThings = [];

    $scope.submit = function (newThing) {
        $scope.uglyThings.push(newThing);
        $scope.newThing = {};
    }

    $scope.delete = function (item) {
        var index = $scope.uglyThings.indexOf(item);
        $scope.uglyThings.splice(index, 1);
    }


}])