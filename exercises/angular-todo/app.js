var app = angular.module("angularTodo", []);

app.controller("mainCntrl", ["$scope", "$http", function ($scope, $http) {

    $scope.getFunction = function () {
        $http.get("http://api.vschool.io/simone/todo/")
            .then(function (response) {
                console.log(response.data);
                $scope.todoList = response.data;
            });
    }
    $scope.getFunction();

    $scope.delete = function ($index, id) {
        $scope.todoList.splice($index, 1);

        $http.delete("http://api.vschool.io/simone/todo/" + id)
            .then(function (response) {
                console.log("item deleted");

            })
    };

    $scope.add = function (object) {
        $http.post("http://api.vschool.io/simone/todo/", object)
            .then(function (response) {
                console.log(response);
                $scope.todoList.push(response.data);
            })
    }



    //    $scope.edit = function (item) {
    //        $http.put("http://api.vschool.io/simone/todo" + item._id, item)
    //    }
}])