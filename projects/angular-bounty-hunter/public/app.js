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
        controller: "levelTwoControlller"
    })

    .when("/level-3", {
        templateUrl: "/rates/level-3/level-3.html",
        controller: "levelThreeController"
    })

    .otherwise({
        redirectTo: "/home"
    })
}])

var middleTwo = function (str) {
        if (str.length % 2 === 0) {
            var newStr = str.slice((str.length / 2) - 1, (str.length / 2) + 1);
            return newStr;
        } else {
            return str;
        }