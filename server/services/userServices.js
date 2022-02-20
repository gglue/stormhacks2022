const Profile = require("../models/profile")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const mongoose = require("mongoose")

module.exports.getProfile = async (req, res) => {
    console.log("Profile Request")

    try {
        const profile = await Profile.findOne({user: mongoose.Types.ObjectId(req.user.user)})

        let {correct, incorrect, quizzes_done} = profile
        res.status(201).json({"correct":correct, "incorrect": incorrect, "quizzes_done":quizzes_done})
        
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error: "An error has occured"})
    }
}