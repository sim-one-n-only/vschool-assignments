var app = angular.module("mightyClicker", []);

app.controller("mainCntrl", ["$scope", "blueService", "redService", function ($scope, blueService, redService) {

    $scope.blueScore = blueService.score;

    $scope.blueBoom = false;

    $scope.clickBlue = function () {
        $scope.blueScore = blueService.counterIncrement();
        $scope.redScore = redService.counterDecrement();
        $scope.redScore = redService.reset();
        $scope.blueBoom = !$scope.blueBoom;
    }



    $scope.redScore = redService.score;

    $scope.redPow = false

    $scope.clickRed = function () {
        $scope.redScore = redService.counterIncrement();
        $scope.blueScore = blueService.counterDecrement();
        $scope.blueScore = blueService.reset();
        $scope.redPow = !$scope.redPow;
    }
}])