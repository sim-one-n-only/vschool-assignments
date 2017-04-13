var express = require("express");
var Vote = require("../models/vote-schema");
var voteRoute = express.Router();
console.log(Vote);
voteRoute


    .get("/", function (req, res) {
        Vote.find(req.query, function (err, vote) {
        res.send(vote);
    })
})

    .post("/", function (req, res) {
        newVote = new Vote(req.body)
        newVote.save(req.query, function (err, savedVote) {
        res.send(savedVote);
    })
})

    .put("/:id", function (req, res) {
        Vote.findByIdAndUpdate(req.params.id, req.body, {
            new: true
             }, function (err, editedVote) {
                     res.send(editedVote);
    })
})

    .delete("/:id", function (req, res) {
        Vote.findByIdAndRemove(req.params.id, req.body, function (err, deletedVoted) {
            res.send(deletedVoted);
    })
})


module.exports = voteRoute