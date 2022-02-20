require('dotenv').config();
const express = require("express");
const multer = require("multer");
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');
const url = 'https://api.assemblyai.com/v2/upload';
const app = express();

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./audio");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
});

const upload = multer({storage: fileStorageEngine});


app.post("/transcribe", upload.single("file"), (req, res) => {
    console.log(req.file.buffer);
    fs.writeFileSync("./audio/test.wav", req.file.buffer)
    
    const params = {
        headers: {
          "authorization": process.env.ASSEMBLY_API,
          "Transfer-Encoding": "chunked"
        },
        body: audioFile,
        method: 'POST'
      };
    fetch(url, params)
        .then(response => response.json())
        .then(data => {
            console.log(`URL: ${data['upload_url']}`)
        })
        .catch((error) => {
            console.error(`Error: ${error}`);
        })
    
    res.send("Hello world");
});

app.listen(5000);