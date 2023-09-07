const mongoose = require("mongoose");


const characterSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Class: {
        selectedOption: String,
        required: true
    },
    itemLevel: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("CharacterData", characterSchema);