var shoppingList = []

$("#addBtn").click(function () {
    var item = $("#input").val();
    if (item === "") return;
    var deleteBtn = ("<button id='button'>X</button>");
    $("#list").append("<li id='listItem'>" + deleteBtn + "  " + item + "</li><br/>");
    $("#input").val("");
    localStorage.setItem("list", JSON.stringify(shoppingList));

})

$("#input").keypress(function (e) {
    if (e.which === 13) {
        $("#addBtn").click();
        return false;
    }
})

$(document).on("click", "#button", function () {
    $(this).parent('li').remove();
})