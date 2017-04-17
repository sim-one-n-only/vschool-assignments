/**
 * Created by sim_one_n_only on 4/17/17.
 */
var app = angular.module("personalPortfolio", [ngRoute]);

app.config(["$routeProvider", function ($routeProvider) {
    .when("/home", {
        templateUrl: "/home.html",
        controller: "homeCntrl",
    })

        .when("/aboutMe", {
            templateUrl: "/aboutMe.html",
            controller: "aboutMeCntrl",
    })

        .when("/projects", {
            templateUrl:"/projects.html",
            controller: "projectsCntrl",
        })

        .when("/contactMe", {
            templateUrl: "/contactMe.html",
            controller: "contactMe"
        })
}])