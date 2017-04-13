var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/slow-jams');

var Schema = mongoose.Schema;

var slowJamSchema = new Schema({
    songTitle: String,
    artist: {
        name: String,
        dob: Date,
        albums: [String],
    },
    album: String,
    year: Number,


})

var SlowJam = mongoose.model("SlowJam", slowJamSchema);
//
//var slowJam = new SlowJam({
//    songTitle: "Party",
//    artist: {
//        name: "Chris Brown",
//        dob: 01 / 01 / 1998,
//        albums: ["Royalty", "The Other One", "The Other, Other One"]
//    },
//    album: ["The Other One"],
//    year: 2016
//});

slowJam.save(function (err, newSlowJam) {
    console.log(newSlowJam);
})

module.exports = SlowJam;