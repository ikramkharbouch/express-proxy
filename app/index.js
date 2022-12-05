const express = require("express");
var fileupload = require("express-fileupload");
const app = express();

app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('dotenv').config()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})

app.use('/micr', require('./routes/micr'))

;(async () => {
    try {
        app.listen(process.env.EXTERNAL_PORT || 3000);
    } catch (error) {
        console.error(error);
    }
})()