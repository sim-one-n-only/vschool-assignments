/**
 * Created by sim_one_n_only on 4/21/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bountySchema = new Schema({
    fName: String,
    lName: String,
    amount: Number,
    type: String,
    status: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Bounty", bountySchema);