const character = require("../model/characterData");
const loaClass = require("../config/class");

module.exports = {
    getDashboard: async(req, res) => {
        try{
            const characters = await character.find();
            res.render("dashboard.ejs", {loaClass, characters});
        }catch(err){
            console.log(err);
        }
    },
    createCharacter: async(req, res) => {
        try{
            await character.create({
                characterName: req.body.characterName,
                loaClass: req.body.loaClass,
                itemLevel: req.body.itemLevel,
                roster: req.body.roster
            });
            console.log("Character information saved.")
            res.redirect("/")
        }catch(err) {
            console.log(err)
        }
    },
    deleteCharacter: async(req, res) => {
        try{
            await character.findByIdAndRemove({ _id: req.params.id});
            console.log("Character information deleted.");
            res.redirect("/");
        }catch(err){
            res.redirect("/")
        }
    },
};  

