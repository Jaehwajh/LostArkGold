const character = require("../model/characterData");

// Lost Ark Class Config
const loaClass = require("../config/class");

// Legion Raids Config
const {normalValtan, hardValtan} = require("../config/legion/valtan");
const {normalVykas, hardVykas} = require("../config/legion/vykas");
const kakulSaydon = require("../config/legion/kakul-saydon");
const {normalBrelshaza, hardBrelshaza, brelGold} = require("../config/legion/brelshaza");
const {normalAkkan, hardAkkan} = require("../config/legion/akkan");
const {normalKayangel, hardKayangel} = require("../config/abyss/kayangel");

module.exports = {
    getDashboard: async(req, res) => {
        try{
            const valtan = { normalValtan, hardValtan };
            const vykas = { normalVykas, hardVykas };
            const brel = { normalBrelshaza, hardBrelshaza };
            const akkan = { normalAkkan, hardAkkan };
            const kayangel = { normalKayangel, hardKayangel };

            const characters = await character.find();
            res.render("dashboard.ejs", {loaClass, valtan, vykas, kakulSaydon, brel, kayangel, akkan, characters, brelGold});
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
            await character.findByIdAndDelete({ _id: req.params.id });
            console.log("Character information deleted.");
            res.redirect("/");
        }catch(err){
            res.redirect("/")
        }
    },
    editItemLevel: async(req, res) => {
        try{
            await character.findByIdAndUpdate({ _id: req.params.id, itemLevel: req.body.itemLevel }, {new: true});
            console.log("Edits saved!");
            res.redirect("/")
        }catch(err){
            res.redirect("/")
        }
    }
};  

