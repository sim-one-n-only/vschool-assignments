var app = angular.module("urbanDictionary");

app.controller("homeCntrl", ["$scope", "urbanService", "$location", function ($scope, urbanService, $location) {

    $scope.define = function () {
        urbanService.word = $scope.word;
        urbanService.define($scope.word).then(function (data) {
            location.href = "#/define"
            $location.path("/define");
        })

        $scope.word = "";
    }
}])