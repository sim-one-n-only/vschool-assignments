var app = angular.module("bountyHunter");

app.service("bountyService", ["$http", function ($http) {

    this.getBounties = function () {
        return $http.get("/bounty").then(function (response) {
            return response.data
        })
    }

    this.postBounty = function (newBounty) {
        //        var newBounty = [];
        return $http.post("/bounty/", newBounty).then(function (response) {
            return response.data;
        })
    }

        this.editBounty = function (bounty) {
            return $http.put('/bounty/' + bounty._id)
                .then(function (response) {
                    return response.data;
            })
        }

    this.deleteBounty = function (bounty) {
        return $http.delete("/bounty/" + bounty._id)
            .then(function (response) {
                console.log(response.data);
                return response.data
            })

    }
}])