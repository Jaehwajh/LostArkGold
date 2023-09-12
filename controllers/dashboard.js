
const character = require("../model/CharacterData");

module.exports = {
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