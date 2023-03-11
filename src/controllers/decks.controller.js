import * as Decks from '../services/decks.service.js'

export const getDecks = async (req, res, next) => {
  const { userId } = req.params
  console.log(req.user)
  try {
    const decks = await Decks.getDecksByUserId({ userId })
    return res.status(200).json(decks)
  } catch (error) {
    next(error)
  }
}
