var express = require('express');
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
var app = express();
var path = require("path");

var port = 3500;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

var bounties = [
    {
        fName: "Simone",
        lName: "Nathaniel",
        amount: 9000,
        type: "Jedi",
        living: true,
        }
];

app.get('/bounty', function (req, res) {
    res.send(bounties);
    console.log(req.query);
})

app.post('/bounty', function (req, res) {
    var newBounty = req.body;
    console.log(req.body);
    newBounty._id = uuid();


    bounties.push(newBounty);
    res.send(newBounty);
    console.log(newBounty._id);
})

app.put('/bounty/:id', function (req, res) {
    var newBounty = req.body;
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i]._id) {
            for (var key in bounties[i]) {
                bounties[i][key] = newBounty[key] || bounties[i][key];
            }
            return res.send(bounties[i]);
        }
    }
})

app.delete('/bounty/:id', function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i]._id) {
            bounties.splice(i, 1);
            return res.send({
                status: "success",
                message: "you successfully deleted",
                bounties: bounties
            });
        }
    }
    res.status(404).send("not found");
})






app.listen(port, function () {
    console.log("Your server is listening")
})