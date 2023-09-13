const loaClass = require("../config/class");
const character = require("../model/CharacterData");

module.exports = {
    getDashboard: async (req, res) => {
        try{
                
            res.render("dashboard.ejs", {loaClass})
        }catch(err){
            console.log(err);
        }
    },
}   