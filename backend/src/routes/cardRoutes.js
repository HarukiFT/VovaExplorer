const express = require('express')
const newCardValidator = require('../validators/newCardValidator.js')
const { ctrlGetCards, ctrlNewCard } = require('../controllers/cardController.js')

const router = express.Router()

router.get('/list', ctrlGetCards)
router.post('/create', newCardValidator, ctrlNewCard)

module.exports = router