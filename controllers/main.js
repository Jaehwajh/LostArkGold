const {Main} = require("../model/roster");
const {Alt} = require("../model/roster")

module.exports = {
    getMainpage: (req, res) => {
            res.render("main.ejs")
        },

    createMainRoster: async(req, res) => {
        try{
            await Main.create({
                roster: req.body.roster
            });
            console.log("Main roster created!")
            res.redirect("/dashboard")
        }catch(err){
            console.log(err)
        }
    },

    createAltRoster: async(req, res) => {
        try{
            await Alt.create({
                roster: req.body.roster
            });
            console.log("Alt roster created!")
            res.redirect("/dashboard")
        }catch(err){
            console.log(err)
        }
    },
}  