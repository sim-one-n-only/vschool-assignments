var app = angular.module("yodaSpeak", []);


app.controller("mainCntrl", ["$scope", "yodaService", function ($scope, yodaService) {

    $scope.translate = function () {
        yodaService.translate($scope.sentence).then(function (data) {
            $scope.yoda = data;
        })
        $scope.sentence = "";
    }


}])