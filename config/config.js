require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "SmartMart_Development",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "SmartMart_Development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQLUSER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "port": process.env.MYSQLPORT,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  }
}