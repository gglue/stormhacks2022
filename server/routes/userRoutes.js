const express = require("express")
const userServices = require("../services/userServices")
const cookieServices = require("../services/cookieServices")

const router = express.Router();

router.get("/api/profile", cookieServices.authorization, userServices.getProfile)

module.exports = router