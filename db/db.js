// Sequelize DB connection
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    "",
    "root",
    "root",
    {
        host: "mysql",
        port: "3306",
        dialect: "mysql"
    }
)

module.exports = sequelize