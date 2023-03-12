import * as Decks from '../services/decks.service.js'

export const getDecks = async (req, res, next) => {
  const { userId } = req.params
  console.log({ userId })
  try {
    const decks = await Decks.getDecksByUserId({ userId })
    return res.status(200).json(decks)
  } catch (error) {
    next(error)
  }
}

export const createDeck = async (req, res, next) => {
  const { title } = req.body
  const { user } = req

  try {
    const deck = await Decks.addDeck({ title, userId: user.id })
    return res.status(200).json(deck).end()
  } catch (error) {
    next(error)
  }
}

export const updateDeck = async (req, res, next) => {
  const { deckId } = req.params
  const { title } = req.body
  const { user } = req

  try {
    await Decks.updateDeck({ title, deckId })

    return res.status(200).json({ id: deckId, title, id_user: user.id }).end()
  } catch (error) {
    next(error)
  }
}

export const deleteDeck = async (req, res, next) => {
  const { deckId } = req.params

  try {
    await Decks.deleteOne({ id: deckId })

    return res.status(204).end()
  } catch (error) {
    next(error)
  }
}
