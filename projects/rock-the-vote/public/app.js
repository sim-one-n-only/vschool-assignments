var app = angular.module("rockTheVote", []);

app.controller("mainCntrl",["$scope", "voteService", function ($scope, voteService) {
    $scope.votes = [];


    voteService.getVotes().then(function (response) {
        $scope.votes = response;
    });
    $scope.post = function (newVote) {
        voteService.postVotes(newVote).then(function () {
            $scope.votes.push(newVote);
        });

    }

    $scope.upVote = function (vote) {
        voteService.upVote(vote).then(function (response) {
            vote = response;
        })
    }

    $scope.downVote = function (vote) {
        voteService.downVote(vote).then(function (response) {
            vote = response;
        })
    }


    }])

