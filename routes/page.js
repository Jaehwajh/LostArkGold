const express = require("express");
const router = express.Router()
// const mainController = require("../controllers/main");
const dashboardController = require("../controllers/dashboard")

// router.get("/", mainController.getMainpage);

router.get("/", dashboardController.getDashboard);

module.exports = router;