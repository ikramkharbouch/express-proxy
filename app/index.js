const express = require("express");
var fileupload = require("express-fileupload");
const app = express();
const sequelize = require('./util/database.js');

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
app.use('/checkData', require('./routes/checkData'))

;(async () => {
    try {
        await sequelize.sync(
            {force: false}
        )
        app.listen(process.env.EXTERNAL_PORT || 3000);
    } catch (error) {
        console.error(error);
    }
})()