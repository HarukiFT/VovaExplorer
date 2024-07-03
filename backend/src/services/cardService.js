const CardModel = require("../models/CardModel.js")

const svcGetCards = async () => {
    return await CardModel.find().sort({ order: 1 })
}

const svcNewCard = async (payload) => {
    return await CardModel.create({name: payload.name, description: payload.description, link: payload.link, order: payload.order})
}

module.exports = {
    svcGetCards,
    svcNewCard
}