$(".button").click(function () {
    var newTodo = {};
    newTodo.title = $("#task").val();
    newTodo.description = $("#description").val();
    console.log(newTodo);
    $("#checkbox").is("checked")
    $.post("http://api.vschool.io/simone/todo/", newTodo, function (response) {
        console.log(response);
        $("#todos").text(newTodo);
    })
})

$.get("http://api.vschool.io/simone/todo/", function (response) {
    console.log(response);
    $("#todos").push(response);
})

//Delete (Destroy)

//get add their ids_
//access them by their ids_
//delete them from html