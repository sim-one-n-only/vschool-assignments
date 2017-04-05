var app = angular.module("angularTodo", []);

app.controller("mainCntrl", ["$scope", "todoService", function ($scope, todoService) {

    todoService.getTodos().then(function (todoList) {
        $scope.todoList = todoList;
    })

    $scope.add = function (item) {
        todoService.addTodos(item).then(function (item) {
            $scope.todoList.push(item);
        })
    }

    $scope.delete = function (id, index) {
        console.log(id)
        todoService.deleteTodos(id).then(function (object) {
            $scope.todoList.splice(index, 1);
            console.log(object);
        })
    }

    //    $scope.getFunction = function () {
    //        $http.get("http://api.vschool.io/simone/todo/")
    //            .then(function (response) {
    //                console.log(response.data);
    //                $scope.todoList = response.data;
    //            });
    //    }
    //    $scope.getFunction();
    //
    //    $scope.delete = function ($index, id) {
    //        $scope.todoList.splice($index, 1);
    //
    //        $http.delete("http://api.vschool.io/simone/todo/" + id)
    //            .then(function (response) {
    //                console.log("item deleted");
    //
    //            })
    //    };

    //    $scope.add = function (object) {
    //        $http.post("http://api.vschool.io/simone/todo/", object)
    //            .then(function (response) {
    //                console.log(response);
    //                $scope.todoList.push(response.data);
    //            })
    //    }



    //    $scope.edit = function (item) {
    //        $http.put("http://api.vschool.io/simone/todo" + item._id, item)
    //    }
}])