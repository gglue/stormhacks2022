const express = require("express")
const authServices = require("../services/authServices")

const router = express.Router();

router.post("/api/login", authServices.login)
router.post("/api/register", authServices.register)
router.post("/api/logout", authServices.logout)

module.exports = router