var app = angular.module('angularNGModel', []);

app.controller('mainCntrl', ['$scope', function ($scope) {
        $scope.person = {
            firstName: $scope.firstName,
            middleName: $scope.middleName,
            lastName: $scope.lastName
        }


}
    ])