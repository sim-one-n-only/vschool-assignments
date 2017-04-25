/**
 * Created by sim_one_n_only on 4/24/17.
 */
var app = angular.module("BountyHunter.Auth");

app.controller("logoutController", ["UserService", function (UserService) {
    UserService.logout();
}])