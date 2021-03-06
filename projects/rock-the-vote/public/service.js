var app = angular.module("rockTheVote");

app.service("voteService", ["$http", function ($http) {


    this.getVotes = function () {
        return $http.get("/votes").then(function (response) {
            return response.data;
        })
    };

    this.postVotes = function (vote) {
        return $http.post("/votes", vote).then(function (response) {
            return response.data;
        })
    };

    this.editVotes = function (vote) {
        return $http.put("/votes/" + vote._id, vote).then(function (response) {
            console.log(response.data);
            return response.data;


        })
    };

    this.deleteVotes = function (vote) {
        return $http.delete("/votes/" + vote._id).then(function (response) {
            return response.data;
        })
    };







}]);




