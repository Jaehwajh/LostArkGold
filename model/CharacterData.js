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
        type: String,
        required: true,
        enum: ["Main", "Alt"]
    },
});


module.exports = mongoose.model("CharacterData", characterSchema);