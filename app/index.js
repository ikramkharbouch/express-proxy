const express = require("express");

const app = express();
const sequelize = require('./util/database.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})

app.use('/micr', require('./routes/micr'))

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