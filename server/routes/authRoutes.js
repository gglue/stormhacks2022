const {Router} = require("express")
const authServices = require("../services/authServices.js")

const router = Router();

// TODO: Implement auth endpoints

router.post("/login", authServices.login)
router.post("/register", authServices.register)
router.post("/logout", authServices.logout)

module.exports = router