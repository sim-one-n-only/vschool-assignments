var app = angular.module("practice", []);

$scope.test = "this is a test"

app.controller("mainCntrl", ["$scope", function ($scope) {
   $scope.people = []
    $scope.submit = function (info) {
        $scope.people.push(info);
        $scope.newPerson = {};
    }
    
    
}])