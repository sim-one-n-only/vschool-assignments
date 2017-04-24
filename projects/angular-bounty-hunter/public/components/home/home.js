var app = angular.module("bountyHunter");

app.controller("homeController", ["$scope", "bountyService", "$location", function ($scope, bountyService, $location) {



}])
app.directive("homePage", function () {
    return {
        restrict: 'E',
        template: "<div class='starwars-demo'><img src='//cssanimation.rocks/demo/starwars/images/star.svg' alt='Star' class='star'><img src='//cssanimation.rocks/demo/starwars/images/wars.svg' alt='Wars' class='wars'><h2 class='byline' id='byline'>The bounty</h2></div>"
    }
})