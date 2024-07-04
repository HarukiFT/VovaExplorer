const CardModel = require("../models/CardModel.js")
const axios = require('axios')
const config = require('../config')

const getOwnerAndRepo = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/(?<owner>[^/]+)\/(?<repo>[^/]+)\.git/
    const match = url.match(regex)

    if (match) {
        const owner = match.groups.owner
        const repo = match.groups.repo

        return { owner, repo }
    } else {
        return null
    }
}

const svcGetCards = async () => {
    const cardsList = await CardModel.find().sort({ order: 1 })

    const cardsFetched = await Promise.all(cardsList.map(async (card) => {
        let lastCommit, ping

        if (card.repository) {
            const {repo, owner} = getOwnerAndRepo(card.repository)
            try {
                lastCommit = (card.repository ? (await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {headers: { 'Authorization': `token ${config.gitToken}`}})).data.pushed_at : null)
            } catch (err) {
                
            }
        }
    
        try {
            ping = (await axios.get(card._doc.link)).status == 200
        } catch (err) { 
            
         }

       return { ...card._doc, lastCommit, ping }
    }));

    return cardsFetched
}

const svcNewCard = async (payload) => {
    return await CardModel.create({name: payload.name, description: payload.description, link: payload.link, order: payload.order})
}

module.exports = {
    svcGetCards,
    svcNewCard
}