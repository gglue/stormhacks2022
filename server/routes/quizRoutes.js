const express = require("express")
const quizService = require("../services/quizService")
const cookieServices = require("../services/cookieServices")

const router = express.Router();

router.get("/api/quiz", quizService.getQuiz)
router.post("/api/quiz/correct",cookieServices.authorization, quizService.porfileQuizCorrectIncrement)
router.post("/api/quiz/wrong", cookieServices.authorization, quizService.porfileQuizIncorrectIncrement)
router.post("/api/quiz/finish", cookieServices.authorization, quizService.porfileQuizQuizIncrement)

module.exports = router