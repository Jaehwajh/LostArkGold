const mongoose = require("mongoose");

const rosterSchema = new mongoose.Schema({
    roster: {
        type: String,
    }
});

module.exports = mongoose.model("Roster", rosterSchema);