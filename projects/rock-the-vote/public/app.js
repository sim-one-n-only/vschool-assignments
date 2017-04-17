var app = angular.module("rockTheVote", []);

app.controller("mainCntrl",["$scope", "voteService", function ($scope, voteService) {
    $scope.votes = [];
    $scope.userComments = [];


    voteService.getVotes().then(function (response) {
        $scope.votes = response;
    });
    $scope.post = function (newVote) {
        voteService.postVotes(newVote).then(function (newVote) {
            $scope.votes.push(newVote);
        });

    };

    $scope.upVote = function (vote) {
        vote.vote.upVotes++;


        voteService.editVotes(vote).then(function (response) {
            vote = response;
        })
    };

    $scope.downVote = function (vote) {
        vote.vote.downVotes++;


        voteService.editVotes(vote).then(function (response) {
            vote = response;
        })
    };

    $scope.addComment = function (comment, vote) {


        vote.comments.push(comment);
        voteService.editVotes(vote).then(function () {

        })
        delete vote.comment;
    }

    $scope.deleteComment = function (vote, index) {
        vote.comments.splice(index, 1);


        voteService.editVotes(vote).then(function (response) {
            vote = response;
        })
    }

    $scope.deletePost = function (votes, index) {
       var deletedPost = votes.splice(index, 1);
        console.log(deletedPost);
        voteService.deleteVotes(deletedPost[0]).then(function (response) {
            votes = response;
        })
    }



    }]);

