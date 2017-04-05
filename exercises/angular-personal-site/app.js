var app = angular.module("urbanDic", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            controller: 'homeController',
            templateUrl: "/#/home.html"
        })

    .otherwise({
        redirectTo: "/home"
    })

})

app.controller("mainCntrl", ["$scope", "dicService", function ($scope, $dicService) {

}])

app.directive("nav", function () {
    return {
        restrict: 'E',
        templateUrl: "/navbar/navbar.html"
    }
})