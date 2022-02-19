const jwt = require("jsonwebtoken")

exports.cookieServices = (req, res, next) => {
    const token = req.cookies.token

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = user
        next()
    }
    catch (error) {
        res.clearCookie("token")
        res.status(400).json({error: "Session timeout"})
    } 
}