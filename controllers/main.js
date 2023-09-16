const roster = require("../model/roster");

module.exports = {
    getMainpage: (req, res) => {
            res.render("main.ejs")
        }
    },
    createRoster: async(req, res) => {
        try{
            await roster.create({
                
            })
        }
    }