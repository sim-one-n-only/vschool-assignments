var app = angular.module('angularNameBadge', []);

app.controller('mainCntrl', ['$scope', function ($scope) {
    $scope.submit = function () {
        $scope.addName = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            phone: $scope.phone,
            pob: $scope.pob,
            favFood: $scope.favFood,
            email: $scope.email,
            about: $scope.about
        }
    }

    //    $scope.firstName = 3;


}])