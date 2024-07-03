const { validationResult } = require("express-validator")
const { svcGetCards, svcNewCard } = require("../services/cardService")

const ctrlGetCards = async (req, res) => {
    const cardsData = await svcGetCards()

    res.status(200).json(cardsData)
}

const ctrlNewCard = async (req, res) => {
    if (validationResult(req).errors.length > 0) return res.sendStatus(400);
    
    const cardsData = await svcNewCard(req.body)

    res.sendStatus(200)
}

module.exports = {
    ctrlGetCards,
    ctrlNewCard
}