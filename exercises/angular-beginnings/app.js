var app = angular.module('angularBeginnings', []);

app.controller('mainCntrl', ['$scope', function ($scope) {

    $scope.name = function () {
        return $scope.myName;
    }

}])