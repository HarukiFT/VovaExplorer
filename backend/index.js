const mongoose = require('mongoose')
const express = require('express')
const config = require('./src/config')
const routes = require('./src/routes')

mongoose.connect(config.dbString, {
    dbName: config.dbName
})

const app = express()
app.use(express.json())

app.use(routes)

app.listen(config.port, () => {
    console.log('Server started')
})