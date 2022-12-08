const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        port: 5433,
        dialect: 'postgres'
    }
)


module.exports = sequelize;