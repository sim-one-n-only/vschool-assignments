var app = angular.module("bountyHunter");

app.controller("levelOneController", ["$scope", "$location", function ($scope, $location) {
    $scope.bookMe = function () {
        $location.path("/bounties")
    }
}])