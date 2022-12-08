const Sequelize = require('sequelize');

const db = require('../util/database.js');

const MICR_RESULT = db.define('checkData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    codeVille: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    codeBank: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    numCompte24: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    codeCMC7: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    creationDate: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    }

})

module.exports = MICR_RESULT;