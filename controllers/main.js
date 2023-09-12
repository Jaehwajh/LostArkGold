const loaClass = require("../config/class");
const character = require("../model/CharacterData");

module.exports = {
    getDashboard: async (req, res) => {
        try{
            const characters = await character.find({ _id})
            res.render("index.ejs", {loaClass})
        }catch(err){
            console.log(err);
        }
    },
}