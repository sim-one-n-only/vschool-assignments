var app = angular.module('hitList');

app.service("hitService", function ($http) {
    this.getHittas = function () {

        return $http.get("http://api.vschool.io:6543/hitlist.json")
            .then(function (response) {
                return response.data;

            })
    }
})