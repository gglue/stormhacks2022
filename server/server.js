const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require("dotenv").config();

const authRoutes = require("./routes/authRoutes")

// Middleware
const app = express()
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Port
app.set('port', process.env.PORT || 3001);

// Database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(app.get('port'), () => {console.log(`Server started on port ${app.get('port')}`)}))
    .catch((error) => console.log(error))

// Endpoints
app.use("/login", authRoutes)
app.use("/register", authRoutes)
app.use("/logout", authRoutes)