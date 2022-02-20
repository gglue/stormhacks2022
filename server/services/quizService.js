const jwt = require("jsonwebtoken")
const Word = require("../models/word")
const mongoose = require("mongoose")

module.exports.getQuiz = async (req, res) => {
    console.log("Profile Request")

    try {
        const noun = await Word.find().where({type: "noun"}).limit(20)
        const verb = await Word.find().where({type: "verb"}).limit(10)
        const propositon = await Word.find().where({type: "propositon"}).limit(10)
        res.status(201).json({noun, verb, propositon})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error: "An error has occured"})
    }
}