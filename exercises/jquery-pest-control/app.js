var costGoombas = 5;
var costBobombs = 7;
var costCheeps = 11;

$("#button1").click(function calcGoombas() {
    $("#totalGoomba").text(caughtGoombas.value * costGoombas);
})

$("#button2").click(function calcBobombs() {
    $("#totalBobomb").text(caughtBobombs.value * costBobombs);
})

$("#button3").click(function calcCheeps() {
    $("#totalCheep").text(caughtCheeps.value * costCheeps);
})

$("#totalButton").click(function calcTotal() {
    console.log($("#totalGoomba").text());
    $("#totalCost").text(parseInt($("#totalGoomba").text()) + parseInt($("#totalBobomb").text()) + parseInt($("#totalCheep").text()));
})

var audio = $("#coinSound")[0];

$("#button1, #button2, #button3, #totalButton").click(function () {
    console.log("play that sound!")
    audio.play();
});


$('#nightMode').click(function () {
    var $this = $(this);
    $this.toggleClass("Night Mode");
    if ($this.hasClass('Night Mode')) {
        $this.text('Day Mode');
        $("body").css("background-image", "url(http://mariopartylegacy.com/wp-content/uploads/2012/03/mp9review8.png)");
    } else {
        $this.text('Night Mode');
        $("body").css("background-image", "url(https://images7.alphacoders.com/330/330724.jpg)")
    }
});