/**
 * Created by sim_one_n_only on 4/21/17.
 */
var express = require("express");
var bountyRouter = express.Router();
var Bounty = require("../models/bountySchema");

bountyRouter.route("/")
    .get(function (req, res) {
        Bounty.find({user: req.user._id}, function (err, bounties) {
          if (err) res.status(500).send(err);
          res.send(bounties);
        });
    })

    .post(function (req, res) {
        var bounty = new Bounty(req.body);
        bounty.user = req.user;
        bounty.save(function (err, newBounty) {
            if (err) res.status(500).send(err);
            res.status(201).send(newBounty);
        })
    });

bountyRouter.route("/:bountyId")
    .get(function (req, res) {
        Bounty.findOne({_id: req.params.bountyId, user: req.user._id}, function (err, bounty) {
            if(err) res.status(500).send(err);
            if(!bounty) res.status(404).send("No bounty found");
            else res.send(bounty);
        });
    })

    .put(function (req, res) {
        Bounty.findOneAndUpdate({_id: req.params.bountyId, user: req.user._id}, req.body, {new: true}, function (err, bounty) {
            if(err) res.status(500).send(err);
            res.send(bounty);
        });
    })

    .delete(function (req, res) {
        Bounty.findOneAndRemove({_id: req.params.bountyId, user: req.user._id}, function (err, bounty) {
            if (err) res.status(500).send(err);
            res.send(bounty);

        })
    })

    module.exports = bountyRouter;