import * as Cards from '../services/cards.service.js'
import createImageUrl from '../helpers/createImageUrl.js'

export const getCards = async (req, res, next) => {
  try {
    const cards = await Cards.findAll()
    const cardsToReturn = cards.map((c) => {
      return {
        ...c,
        img: `${req.protocol}://${req.get('host')}/api/images/${c.img}`,
        affinity_img: createImageUrl(c.affinity_img)
      }
    })
    return res.status(200).json(cardsToReturn).end()
  } catch (error) {
    next(error)
  }
}
