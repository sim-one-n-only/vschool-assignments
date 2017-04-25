/**
 * Created by sim_one_n_only on 4/24/17.
 */
var app = angular.module("bountyHunter");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}])