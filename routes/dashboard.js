const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");
// const mainController = require("../controllers/main");

// router.post("/createMainRoster", mainController.createMainRoster);
// router.post("/createAltRoster", mainController.createAltRoster);

router.post("/createCharacter", dashboardController.createCharacter);

module.exports = router;