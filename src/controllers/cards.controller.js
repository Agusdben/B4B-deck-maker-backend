import formatCard from '../helpers/formatCard.js'
import * as Cards from '../services/cards.service.js'

export const getCards = async (req, res, next) => {
  try {
    const cards = await Cards.findAll()

    const cardsToReturn = cards.map((c) => formatCard({ card: c, req }))

    return res.status(200).json(cardsToReturn).end()
  } catch (error) {
    next(error)
  }
}
