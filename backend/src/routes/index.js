const express = require('express')
const cardRoutes = require('./cardRoutes.js')

const router = express.Router()

router.use('/card', cardRoutes)

module.exports = router