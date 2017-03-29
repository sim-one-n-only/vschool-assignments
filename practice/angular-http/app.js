var app = angular.module('angularHTTP', []);

app.controller('mainCntrl', ["$scope", "$http", function ($scope, $http) {
    var req = {
        method: "GET",
        url:"http://pokeapi.co/api/v1/pokemon/1"
    }
    
    $http(req).then(function (response) {
        $scope.pokemon = response.data.objects[0].pokemon;
    })
    
    $http.get('http://pokeapi.co/api/v1/pokemon/1')
        .then(function (response) {
            console.log(response.data);
        });
    

    var todos = {
        title: "Buy Fish",
        desciption: "Not Salmon",
        completed: false
    };

    $http.post("http://api.vschool.io/simone/todo/", todos)
        .then(function (response) {
            console.log(response.data);
        })
}]);