var app = angular.module("yodaSpeak");

app.service("yodaService", function ($http) {
    var config = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
        }
    };

    this.translate = function (sentence) {
        config.url = "https://yoda.p.mashape.com/yoda?sentence=" + sentence;
        return $http(config).then(function (response) {
            return response.data

        })
    }
})