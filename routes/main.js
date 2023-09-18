const express = require("express");
const router = express.Router()
const mainController = require("../controllers/main");

router.get("/", mainController.getDashboard);

router.post("/createRoster", mainController.createRoster)

module.exports = router;