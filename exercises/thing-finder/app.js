var express = require('express');
var app = express();

var port = 3000;

var cars = [
    {
        make: "Kia",
        model: "Spectra",
        color: "burgundy"
    },
    {
        make: "Cadillac",
        model: "Sedan Deville",
        color: "white"
    },
    {
        make: "Hyundai",
        model: "Accent",
        color: "black"
    },
    {
        make: "Saturn",
        model: "Vue",
        color: "black"
    }
];

app.get("/cars", function (req, res) {
    var foundCars = [];

    for (var i = 0; i < cars.length; i++) {
        var matches = true;

        for (var key in req.query) {
            if (req.query[key] != cars[i][key]) {
                matches = false;
            }
        }
        if (matches) {
            foundCars.push(cars[i]);
        }
    }
    console.log(foundCars);
    res.send(foundCars);
})

app.listen(port, function () {
    console.log("your server is listening");
})