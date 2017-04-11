var app = angular.module("bountyHunter");

app.controller("bountiesController", ["$scope", "bountyService", function ($scope, bountyService) {


    $scope.bounties = [];

    bountyService.getBounties().then(function (response) {
        $scope.bounties = response;
    })

    $scope.delete = function (bounty, index) {
        $scope.bounties.splice(index, 1);
        bountyService.deleteBounty(bounty);
    }

    $scope.post = function (newBounty) {
        bountyService.postBounty(newBounty).then(function () {
            $scope.bounties.push(newBounty)
        })

        $scope.newBounty = {};
    }

    $scope.edit = function (bounty) {
        $scope.editBox = true;
        bountyService.editBounty(bounty);
    }

//    $scope.save = function (bounty) {
           //        
           //        $scope.editBox = false;
           //    }
}])

app.directive("bounties", function () {
    return {
        restrict: 'A',
        templateUrl: "getbounties.html"
    }
})