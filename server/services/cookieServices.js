const jwt = require("jsonwebtoken")

module.exports.authorization = (req, res, next) => {
    try {
        
        const token = req.cookies.token
        const user = jwt.verify(token, process.env.TOKEN_SECRET)

        if(user){
            req.user = user
            next()
        }
        else{
            throw "Invalid Token"
        }
        
    }
    catch (error) {
        console.log("bad session")
        res.clearCookie("token")
        res.status(400).json({error: "Session Invalid"})
    } 
}