// Sequelize DB connection
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    "",
    "root",
    "root",
    {
        host: "mysqlDB",
        port: "3306",
        dialect: "mysql"
    }
)

module.exports = sequelize