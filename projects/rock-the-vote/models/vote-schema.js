var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var voteSchema = new Schema({
    title: String,
    description: String,
    vote: {
        upVotes: Number,
        downVotes: Number,
        totalVotes: Number
    },
    comments: [String]
})


var Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;