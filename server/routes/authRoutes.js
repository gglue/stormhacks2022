const express = require("express")
const authServices = require("../services/authServices")
const cookieServices = require("../services/cookieServices")

const router = express.Router();

router.post("/api/login", authServices.login)
router.post("/api/register", authServices.register)
router.post("/api/logout", authServices.logout)
router.get("/api/isAuth", cookieServices.authorization, authServices.isAuth)

module.exports = router