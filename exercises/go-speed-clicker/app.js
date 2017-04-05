var count = 0;

$("#button").click(function () {
    count++;
    return $("#counter").html("You have clicked the button " + count + " times.");
})

localStorage.setItem('user', JSON.stringify(count));