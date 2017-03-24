var app = angular.module("yodaSpeak", []);


app.controller("mainCntrl", ["$scope", "$http", function ($scope, $http) {

    var config = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
        }
    };

    $scope.translate = function () {
        config.url = "https://yoda.p.mashape.com/yoda?sentence=" + $scope.sentence;
        $http(config).then(function (response) {
            $scope.yoda = response.data;
            console.log(response);
            $scope.speak = "";

        })
    }
}])