const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true},
    link: {type: String, required: true},
    order: {type: Number, required: true},
    summary: {type: String, required: true},

    repository: {type: String, required: false}
})

module.exports = mongoose.model('Card', cardSchema)