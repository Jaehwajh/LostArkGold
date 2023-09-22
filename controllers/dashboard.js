const character = require("../model/characterData");
const loaClass = require("../config/class");
const {normalValtan, hardValtan} = require("../config/legion/valtan");
const {normalVykas, hardVykas} = require("../config/legion/vykas");
const kakulSaydon = require("../config/legion/kakul-saydon");
const {normalBrelshaza, hardBrelshaza} = require("../config/legion/brelshaza");
const {normalAkkan, hardAkkan} = require("../config/legion/akkan");
const {normalKayangel, hardKayangel} = require("../config/abyss/kayangel");

module.exports = {
    getDashboard: async(req, res) => {
        try{
            const valtan = { normalValtan, hardValtan };
            const vykas = { normalVykas, hardVykas };
            const brelshaza = { normalBrelshaza, hardBrelshaza };
            const akkan = { normalAkkan, hardAkkan };
            const kayangel = { normalKayangel, hardKayangel };

            const characters = await character.find();
            res.render("dashboard.ejs", {loaClass, valtan, vykas, kakulSaydon, brelshaza, kayangel, akkan, characters});
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
            await character.findByIdAndRemove({ _id: req.params.id });
            console.log("Character information deleted.");
            res.redirect("/");
        }catch(err){
            res.redirect("/")
        }
    },
};  

