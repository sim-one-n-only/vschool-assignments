var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var config = require("./config");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/bounty", require("./routes/bountyRoutes"));


mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database.");
});

// var bounties = [
//     {
//         fName: "Simone",
//         lName: "Nathaniel",
//         amount: 9000,
//         type: "Jedi",
//         living: true,
//         }
// ];

app.use("/auth", require("./routes/authRoutes"));







app.listen(port, function () {
    console.log("Your server is listening")
})