var app = angular.module("bountyHunter");

app.controller("levelTwoController", ["$scope", "$location", function ($scope, $location) {
    $scope.bookMe = function () {
        $location.path("/bounties")
    }
}])