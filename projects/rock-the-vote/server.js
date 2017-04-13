var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var voteRoute = require("./routes/vote-route");
var path = require("path");

var app = express();
var port = 4000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/rock-the-vote", function (err) {
    if (err) throw err;
    console.log("Connected to MongoDB")
});

app.use("/votes", voteRoute);

app.listen(4000, function () {
    console.log("serving up votes at " + port)
})