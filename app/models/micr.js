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
    },
    codeVille: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    codeBank: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    numCompte24: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    codeCMC7: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    creationDate: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    }

})

module.exports = MICR_RESULT;