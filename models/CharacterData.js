const mongoose = require("mongoose");

const CharacterDataSchema = new mongoose.Schema({
    characterName: {
        type: String,
        required: true
    },
    characterClass: {
        type: {type: String},
    },
    itemLevel: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("Character", CharacterDataSchema);