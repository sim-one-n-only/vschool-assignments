var mongoose = require("mongoose");

var express = require("express");
var bodyParser = require("body-parser");
var slowJamRoute = require('./slow-jam-route');

var app = express();
app.use(bodyParser.json());

slowJamRoute

    .get("/", function (req, res) {
    SlowJam.find(req.query, function (err, slowJams) {
        res.send(slowJams);
    })
})

.post("/", function (req, res) {
    newSlowJam = new SlowJam(req.body);
    newSlowJam.save(function (err, savedSlowJam) {
        res.send(savedSlowJam);
    })
})

.delete("/:id", function (req, res) {
    SlowJam.findByIDAndRemove(req.params.id, function (err, deletedSlowJam) {
        res.send(deletedSlowJam);
    })
})

.put("/:id", function (req, res) {
    SlowJam.findByIDAndUpdate(req.params.id, function (err, editedSlowJam) {
        res.send(editedSlowJam);
    })
    
module.exports = slowJamRoute;
})