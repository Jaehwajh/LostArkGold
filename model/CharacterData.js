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
    }
});

module.exports = mongoose.model("CharacterData", characterSchema);