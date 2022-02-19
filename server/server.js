const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("dotenv").config()

// Middleware
const app = express()
app.use(cors({origin: "*"}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Port
app.set('port', process.env.PORT || 3001);

// Endpoints
app.get("/api/test", (req, res) => {res.status(200).json({"working" : true})})
app.use("/", require("./routes/authRoutes"))

// Database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(app.get('port'), () => {console.log(`Server started on port ${app.get('port')}`)}))
    .catch((error) => console.log(error))
