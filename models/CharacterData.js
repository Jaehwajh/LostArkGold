const mongoose = require("mongoose");

const CharacterDataSchema = new mongoose.Schema({
    characterName: {
        type: String,
        require: true
    },
    characterClass: {
        type: ObjectId,
        require: true
    },
    itemLevel: {
        type: Number,
        require: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account Data"
    },
})

module.exports = mongoose.model("Character", CharacterDataSchema);