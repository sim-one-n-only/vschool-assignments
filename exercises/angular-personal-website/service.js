var app = angular.module("urbanDictionary");

app.service("urbanService", function ($http) {
    var config = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "hjirrF7NHymshkZHcOzjBvKI0WdBp1SNVsxjsnjoACWKwf2P95"
        }
    };

    this.word = "";

    this.define = function (word) {

        if (word != undefined) {
            this.word = word;
        }

        config.url = "https://mashape-community-urban-dictionary.p.mashape.com/define?term=" + this.word;
        return $http(config).then(function (response) {
            return response.data.list;
        })
    }
})