var app = angular.module("urbanDictionary", ["ngRoute"]);


app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCntrl"
        })

    .when("/define", {
        templateUrl: "/define/define.html",
        controller: "defineCntrl"
    })

    .when("/sentence", {
        templateUrl: "/sentence/sentence.html",
        controller: "sentenceCntrl"
    })

    .otherwise({
        redirectTo: "/home"
    })

}])