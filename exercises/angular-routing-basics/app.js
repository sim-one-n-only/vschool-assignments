var app = angular.module("favoriteState", ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeController"
        })

    .when("/about", {
        templateUrl: "about/about.html",
        controller: "aboutController"
    })

    .when("/whyILove", {
        templateUrl: "whyILove/whyILove.html",
        controller: "whyILoveController"
    })

    .otherwise({
        redirectTo: "/home"
    })
}])