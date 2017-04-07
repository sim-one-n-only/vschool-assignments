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
        _id: "576869jgdvsj"
    }
];

app.get('/bounty', function (req, res) {
    res.send(bounties);
})

app.post('/bounty', function (req, res) {
    var newBounty = req.body;
    newBounty._id = uuid();
    console.log(req.body.firstName);
    bounties.push(req.body);
    res.send('Your ' + req.body.firstName + ' has been added')
})

app.delete('/bounty/:bounty_id', function (req, res) {
    console.log(req.params.bounty_id);
    for (var i = 0; i < bounties.length; i++) {
        if (req.params.bounty_id === bounties[i]._id) {
            bounties.splice(i, 1);
            console.log("Your item has been deleted")
            res.send(bounties);
        }
    }
})

app.put("/bounty/:bounty_id/:people", function (req, res) {
    console.log(req.params);
    var item_id = req.params.bounty_id;
    for (var i = 0; i < bounties.length; i++) {
        if (item_id === bounties[i]._id) {
            for (var key in req.body) {
                if (bounties[i][key] !== req.body[key]) {
                    bounties[i][key] = req.body[key];
                    console.log("You're post has been updated");
                }
            }
        }
    }

    res.send(bounties);

})
app.listen(port, function () {
    console.log("Your server is listening on port " + port)
})