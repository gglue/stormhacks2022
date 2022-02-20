const Word = require("../models/word")
const Profile = require("../models/profile")

module.exports.getQuiz = async (req, res) => {
    console.log("Get Quiz Words Request")

    try {
        const noun = await Word.find().where({type: "noun"}).limit(20)
        const verb = await Word.find().where({type: "verb"}).limit(10)
        const preposition = await Word.find().where({type: "preposition"}).limit(10)
        res.status(201).json({noun, verb, preposition})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error: "An error has occured"})
    }
}

module.exports.porfileQuizCorrectIncrement = async (req, res) => {
    console.log("Adding 1 to the quiz")
    
    try {
        let profile = await Profile.findOne({user: req.user.user})

        if (profile) {
            profile.correct = profile.correct + 1
            await Profile.updateOne({user: req.user.user}, {correct: profile.correct})

            res.status(201).json({working: true})
        }
    }
    catch (error){
        console.log(error.message)
        res.status(400).json({error: "An error has occured"})
    }
}

module.exports.porfileQuizIncorrectIncrement = async (req, res) => {
    console.log("Adding 1 to the quiz")
    
    try {
        let profile = await Profile.findOne({user: req.user.user})

        if (profile) {
            profile.incorrect = profile.incorrect + 1
            await Profile.updateOne({user: req.user.user}, {incorrect: profile.incorrect})

            res.status(201).json({working: true})
        }
    }
    catch (error){
        console.log(error.message)
        res.status(400).json({error: "An error has occured"})
    }
}

module.exports.porfileQuizQuizIncrement = async (req, res) => {
    console.log("Adding 1 to the quiz")
    
    try {
        let profile = await Profile.findOne({user: req.user.user})

        if (profile) {
            profile.quizzes_done = profile.quizzes_done + 1
            await Profile.updateOne({user: req.user.user}, {quizzes_done: profile.quizzes_done})

            res.status(201).json({working: true})
        }
    }
    catch (error){
        console.log(error.message)
        res.status(400).json({error: "An error has occured"})
    }
}