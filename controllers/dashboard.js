const loaClass = require("../config/class");

module.exports = {
    getDashboard: (req, res) => {
        res.render("index.ejs", {loaClass})
    }
}; 