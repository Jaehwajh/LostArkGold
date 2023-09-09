const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard");

router.get("/", dashboardController.getDashboard);
router.post("/createCharacter", dashboardController.createCharacter);
module.exports = router;