const mongoose = require("mongoose");

const rosterSchema = new mongoose.Schema({
    mainRoster: {
        type: Boolean,
        required: true
    },
    
});

module.exports = mongoose.model("Roster", rosterSchema);