const CharacterData = require("../models/CharacterData");

module.exports = {
    getDashboard: (req, res) => {
        res.render("index.ejs")
    },
    createCharacterData: async(req, res) => {
        try{
            await CharacterData.create({
                characterName: req.body.charactername,
                class: req.body.characterclass,
                itemlevel: req.body.characterilvl
            });
            console.log("character saved");
            res.redirect("/dashboard");
        } catch (err) {
            console.log(err);
        };
    },
    deleteCharacterData: async(req, res) => {
        try{
            await CharacterData.findByIdAndRemove({ _id: req.params.id });
            console.log("character removed");
            res.redirect("/dashboard");
        }catch(err) {
            res.redirect("/dashboard")
        };
    },
};