/**
 * Created by sim_one_n_only on 4/24/17.
 */
var app = angular.module("BountyHunter.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/bounty");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);

