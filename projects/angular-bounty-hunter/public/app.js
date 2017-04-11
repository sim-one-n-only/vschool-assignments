var app = angular.module("bountyHunter", ["ngRoute", "ngAudio"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeController",

        })

    .when("/bounties", {
        templateUrl: "bounties/getbounties.html",
        controller: "bountiesController"
    })

    .when("/level-1", {
        templateUrl: "/rates/level-1/level-1.html"

    })

    .when("/level-2", {
        templateUrl: "/rates/level-2/level-2.html"
    })

    .when("/level-3", {
        templateUrl: "/rates/level-3/level-3.html"
    })

    .otherwise({
        redirectTo: "/home"
    })
}])