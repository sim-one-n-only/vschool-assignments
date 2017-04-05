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

app.directive("mikeTheMink", function () {
    return {
        restrict: "E",
        template: "<img ng-src='{{mike}}'></span>",
        //                link: function (scope, element, attrs) {
        //                    element.bind("hover", function () {
        //                            element.hide();
        //                        }
        //                    }
    }
})