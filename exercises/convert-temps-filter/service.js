var app = angular.module("tempFilter");

app.service("tempService", function ($http) {
    this.getTemp = function () {
        return $http.jsonp("https://api.darksky.net/forecast/a8ae4d07eda560c4e46c543b2d560c1d/37.8267,-122.4233?callback=JSON_CALLBACK").then(function (response) {
            console.log(response.data);
            return currentTemp = response.data;

        })


    }
})

//        this.displayTemp = function (object) {
//            return $http.post("https://api.darksky.net/forecast/a8ae4d07eda560c4e46c543b2d560c1d/37.8267,-122.4233", object).then(function (response) {
//                return response.data;
//            })
//        }
//})

//```this.getWeather = function (lat, long) {
//        return $http.jsonp(”https://api.darksky.net/forecast/(yourkey)/" + lat + "," + long + "?callback=JSON_CALLBACK")
//    }`