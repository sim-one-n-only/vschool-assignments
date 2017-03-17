var theDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var time = new Date(hours, minutes, seconds);

var day = daysOfWeek[theDate.getDay()];
var hours = theDate.getHours();
var minutes = theDate.getMinutes();
var seconds = theDate.getSeconds();

//create if statements for the time(am/pm), minutes, and seconds

if (hours < 12) {
    var amOrPm = "am";
} else {
    var amOrPm = "pm";
    hours -= 12;
}

if (hours === 0) {
    hours = 12;
}

if (seconds < 10) {
    seconds = "0" + seconds.toString();
}

if (minutes < 10) {
    minutes = "0" + minutes.toString();
}

console.log("Today is: " + day);
console.log("Current time is: " + hours + ":" + minutes + ":" + seconds + " " + amOrPm);