/**
 * Created by sim_one_n_only on 4/23/17.
 */
var express = require('express');
var authRoutes = express.Router();
var User = require('../models/user');
var jwt = require("jsonwebtoken");
var config = require('../config');

authRoutes.post("/login", function (req, res) {
//    Try to find the user with the submitted username
    User.findOne({username: req.body.username}, function (err, user) {
        if (err) return res.status(500).send(err);

    //    If that user isn't in the database:
        if(!user) {
            return res.status(401).send({success: false, message: "User not found"})
        }else if (user) {
        //    Check if the submitted password is the same as the one saved
            if(user.password !== req.body.password) {
                return res.status(401).send({success: false, message: "Password Incorrect"})
            }else {
            //    If username and password match create a jasonwebtoken. Add the user objects and pass in the secret.
                var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"})
                res.send({token: token, user: user.toObject(), success: true, message:"Here's your token!"})
            }
        }
    });
});

authRoutes.post("/signup", function(req, res) {
    User.find({username: req.body.usernae}, function (err, existingUser) {
        if(err) return res.status(500).send(err);
        if(existingUser.length) return res.send({success: false, message: "Username already taken"})
        else {
            var newUser = new User(req.body);
            newUser.save(function (err, userObj) {
                if(err) {
                    return res.status(500).send(err);
                    res.send({user: userObj, message: "Created new user", success: true});
                }
            });
        }
    })
})

module.exports = authRoutes;