const express = require("express");

const dashboardController = require("../controllers/dashboard");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("", checkAuth, dashboardController.getCount);

module.exports = router;
