const mongoose = require("mongoose");


const characterSchema = new mongoose.Schema({
    characterName: {
        type: String,
        required: true
    },
    loaClass: {
        type: String,
        required: true
    },
    itemLevel: {
        type: Number,
        required: true
    },
    roster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roster"
    }
    
});

module.exports = mongoose.model("CharacterData", characterSchema);