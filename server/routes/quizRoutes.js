const express = require("express")
const quizService = require("../services/quizService")
const cookieServices = require("../services/cookieServices")

const router = express.Router();

router.get("/api/quiz", quizService.getQuiz)

module.exports = router