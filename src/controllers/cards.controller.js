import * as Cards from '../services/cards.service.js'

export const getCards = async (req, res, next) => {
  try {
    const cards = await Cards.findAll()

    const baseURL = `${req.protocol}://${req.get('host')}/api`

    const cardsToReturn = cards.map((c) => {
      return {
        ...c,
        img: `${baseURL}/images/${c.img}`,
        affinity_img: `${baseURL}/images/${c.affinity_img}`
      }
    })
    return res.status(200).json(cardsToReturn).end()
  } catch (error) {
    next(error)
  }
}
