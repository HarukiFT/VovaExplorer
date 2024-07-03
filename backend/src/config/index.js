const { config } = require("dotenv");

config()

module.exports = {
    port: process.env.PORT,
    dbString: process.env.DB_STRING,
    dbName: process.env.DB_NAME
}