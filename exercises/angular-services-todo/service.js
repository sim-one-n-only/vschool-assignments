var app = angular.module("angularTodo");

app.service("todoService", function ($http) {
    var todoList = [];

    this.getTodos = function () {
        return $http.get("http://api.vschool.io/simone/todo/")
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
    }

    this.addTodos = function (object) {
        return $http.post("http://api.vschool.io/simone/todo/", object)
            .then(function (response) {
                return response.data;
            })

    }

    this.deleteTodos = function (id) {
        return $http.delete("http://api.vschool.io/simone/todo/" + id)
            .then(function (response) {
                console.log(response.data);
                return response.data
            })
    }
})