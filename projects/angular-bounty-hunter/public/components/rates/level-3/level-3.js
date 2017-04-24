var app = angular.module("bountyHunter");

app.controller("levelThreeController", ["$scope", "$location", function ($scope, $location) {
    $scope.bookMe = function () {
        $location.path("/bounties")
    }
}])