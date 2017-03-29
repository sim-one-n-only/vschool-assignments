var app = angular.module("hitList", []);

app.controller('mainCntrl', ['$scope', '$http', function ($scope, $http) {

    $http.get("http://api.vschool.io:6543/hitlist.json")
        .then(function (response) {
            console.log(response.data);
            $scope.hitList =response.data;
        })


}])