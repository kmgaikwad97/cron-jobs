const express = require('express')
const app = express()

// dotenv
const dotenv = require('dotenv');
dotenv.config({path:"./.env"})
const port = process.env.PORT

require("./db")

app.get('/', function (req, res) {
    res.send('Hello World')
})

// listening 
app.listen(port,()=>{
    console.log(`connected to the port ${port}`);
})  