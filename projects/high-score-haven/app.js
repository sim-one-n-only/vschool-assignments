var trashTalk = ["Yall are wack!", "You suck!", "Can't beat me homie!", "Kiss it!"];

var randomAnswer = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#button").click(function postData() {
    var name = $("#name").val();
    var game = $("#game").val();
    var date = $("#date").val();
    var highScore = $("#highScore").val();
    $("#playerName").append(("<tr><td>") + name + ("</td></tr>"));
    $("#playerGame").append(("<tr><td>") + game + ("</td></tr>"));
    $("#playerDate").append(("<tr><td>") + date + ("</td></tr>"));
    $("#playerHighScore").append(("<tr><td>") + highScore + ("</td></tr>"));
    $("#name").val('');
    $("#game").val('');
    $("#date").val('');
    $("#highScore").val('');


    var checked = $("#checkbox").prop('checked');
    console.log(checked);
    if (checked) {
        var message = trashTalk[randomAnswer(0, (trashTalk.length - 1))];
        $("#playerMessage").append(("<tr><td>") + message + ("</td></tr>"));
    }
    $("#checkbox").removeAttr('checked');
})