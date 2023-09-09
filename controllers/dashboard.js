const loaClass = require("../config/class");
const character = require("../model/characterData");

module.exports = {
    getDashboard: (req, res) => {
        res.render("index.ejs", {loaClass})
    },
    createCharacter: async(req, res) => {
        try{
            await character.create({
                characterName: req.body.characterName,
                loaClass: req.body.loaClass,
                itemLevel: req.body.itemLevel
            });
            console.log("Character information saved.")
            res.redirect("/")
        }catch(err) {
            console.log(err)
        }
    },
}; 