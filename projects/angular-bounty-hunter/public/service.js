var app = angular.module("bountyHunter");

app.service("bountyService", ["$http", function ($http) {

    this.getBounties = function () {
        return $http.get("/api/bounty").then(function (response) {
            return response.data
        })
    }

    this.postBounty = function (newBounty) {

        return $http.post("/api/bounty/", newBounty).then(function (response) {
            return response.data;
        })
    }

    this.editBounty = function (bounty) {
        return $http.put('/api/bounty/' + bounty._id)
            .then(function (response) {
                return response.data;
            })
    }

    this.deleteBounty = function (bounty) {
        return $http.delete("/api/bounty/" + bounty._id)
            .then(function (response) {
                console.log(response.data);
                return response.data
            })

    }
}])