const character = require("../model/CharacterData");
const loaClass = require("../config/class");

module.exports = {
    getDashboard: (req, res) => {
        res.render("dashboard.ejs", {loaClass})
    },
    createCharacter: async(req, res) => {
        try{
            await character.create({
                characterName: req.body.characterName,
                loaClass: req.body.loaClass,
                itemLevel: req.body.itemLevel,
            });
            console.log("Character information saved.")
            res.redirect("/dashboard")
        }catch(err) {
            console.log(err)
        }
    },
};  