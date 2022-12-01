const Sequelize = require('sequelize');

const db = require('../util/database.js');

const MICR_RESULT = db.define('micr_results', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    micr_result: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = MICR_RESULT;