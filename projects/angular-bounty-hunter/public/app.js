var app = angular.module("bountyHunter", ["ngRoute"]);

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
        .when("/rates", {
            templateUrl: "/"
        })

    .when("/level-1", {
        templateUrl: "/rates/level-1/level-1.html",
        controller: "levelOneController"

    })

    .when("/level-2", {
        templateUrl: "/rates/level-2/level-2.html",
        controller: "levelTwoController"
    })

    .when("/level-3", {
        templateUrl: "/rates/level-3/level-3.html",
        controller: "levelThreeController"
    })

    .otherwise({
        redirectTo: "/home"
    })
}])

