var app = angular.module("bountyHunter");

app.controller("homeController", ["$scope", "bountyService", "$location", function ($scope, bountyService, $location) {
    //    $scope.enterSite = function () {
    //        location.href = "#/bounty";
    //            $location.path("/define");
    //    }
}])
app.directive("homePage", function () {
    return {
        restrict: 'E',
        template: "<div class='starwars-demo'><img src='//cssanimation.rocks/demo/starwars/images/star.svg' alt='Star' class='star'><img src='//cssanimation.rocks/demo/starwars/images/wars.svg' alt='Wars' class='wars'><h2 class='byline' id='byline'>The bounty</h2></div class='row'><div class='col-xs-6 col-xs-offset-4 col-md-6 col-md-offset-4'><button type='button' id='enterSite' class='btn btn-block' ng-click='enterSite()'>ENTER</button></div></div>"
    }
})