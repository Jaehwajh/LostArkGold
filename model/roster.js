const mongoose = require("mongoose");

const rosterSchema = new mongoose.Schema({
    roster: {
        type: String,
        default: "main",
        enum: ["main", "alt"],
    }
});

module.exports = mongoose.model("Roster", rosterSchema);