var app = angular.module("BountyHunter.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })

        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })

        .when("/logout", {
            template: "<h2>You have successfully logged out</h2>",
            controller: "LogoutController"
        })
}])

app.service("TokenService", function () {
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };
})

app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {
    this.signup = function (user) {
        return $http.post("auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            return response;
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        // $location.path("/")
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };
}])

