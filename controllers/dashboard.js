const character = require("../model/CharacterData");
const loaClass = require("../config/class");
const roster = require("../model/roster");

module.exports = {
    getDashboard: async(req, res) => {
        try{

        }catch(err) {

        }
    },
    createCharacter: async(req, res) => {
        try{
            await character.create({
                characterName: req.body.characterName,
                loaClass: req.body.loaClass,
                itemLevel: req.body.itemLevel,
            });
            console.log("Character information saved.")
            res.redirect("/")
        }catch(err) {
            console.log(err)
        }
    },
}; 