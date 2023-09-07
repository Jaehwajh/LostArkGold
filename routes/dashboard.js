const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

router.get("/", dashboardController.getDashboard);
// // create character data
// router.post("/createCharacterData", dashboardController.createCharacterData);
// // delete character data
// router.delete("/deleteCharacterData", dashboardController.deleteCharacterData);

module.exports = router;