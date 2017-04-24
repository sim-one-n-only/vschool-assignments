/**
 * Created by sim_one_n_only on 4/24/17.
 */
var app = angular.module("BountyHunter.Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "enter password";

    $scope.signup = function (user) {
        if(user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("There ws a problem" + response.data);
            });
        }
    }
}])