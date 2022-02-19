const User = require("../models/user");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

async function hashPassword(password) {
    let salt = await bcrypt.genSalt(parseInt(process.env.SALT_NUM))
    let hash = await bcrypt.hash(password, salt)
    return hash
}

async function compareHashedPassword(password, hash) {
    return await bcrypt.compare(password, hash)
}

module.exports.login = async (req, res) => {
    console.log(req.body)
    const {email, password} = req.body
    
    try{
        const user = await User.findOne({email})

        let result = await compareHashedPassword(password, user.password)

        if (result){
            const token = jwt.sign({user: user._id}, process.env.TOKEN_SECRET)
            res.cookie("token", token, {
                httpOnly: true
            })
            res.status(200).json({working: true})
        }
        else{
            res.status(400).json({error: "Invalid Credentials"})
        }
        
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports.register = async (req, res) => {
    console.log(req.body)
    let {email, password} = req.body
    password = await hashPassword(password)

    try{
        const user = await User.create({email, password})
        res.status(201).json({working: true})
    }
    catch (error){
        res.status(400).json({error: "This user already exists."})
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie("token")
    res.status(201),json({working: true})
}