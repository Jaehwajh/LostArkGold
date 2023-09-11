const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

router.post("/createCharacter", dashboardController.createCharacter);

module.exports = router;