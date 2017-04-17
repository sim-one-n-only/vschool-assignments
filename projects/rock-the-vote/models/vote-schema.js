var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var voteSchema = new Schema({
    title: String,
    description: String,
    comments: [String],
    vote: {
        upVotes: {type: Number, default: 0},
        downVotes: {type: Number, default: 0},
        totalVotes: {type: Number, default: 0}
    }


});


var Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;