const character = require("../model/CharacterData");
const loaClass = require("../config/class");

module.exports = {
    getDashboard: async(req, res) => {
        try{
            const account = await character.find({ roster: roster.req.id  });
            res.render("dashboard.ejs", {loaClass, roster: req.roster, account: account});
        }catch(err) {
            console.log(err)
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