var express = require("express");

var bodyParser = require("body-parser");

var uuid = require("uuid/v4");

var app = express();

var port = 3500;

app.use(bodyParser.json());

var bounties = [
    {
        firstName: "fName",
        lastName: "lName",
        living: false,
        bountyAmount: "number",
        type: "type",
        id: 'id'
    }
];

app.get('/bounty', function (req, res) {
    res.send(bounties);
})

app.post('/bounty', function (req, res) {
    var newBounty = req.body;
    newBounty._id = uuid();
    console.log(req.body);
    bounties.push(req.body.bounty);
    res.send('Your ' + req.body.bounty + ' has been added')
})
app.listen(port, function () {
    console.log("Your server is listening on port " + port)
})