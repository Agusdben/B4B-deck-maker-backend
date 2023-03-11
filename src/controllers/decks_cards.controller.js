import * as DecksCards from '../services/decks_cards.service.js'
import * as Decks from '../services/decks.service.js'
import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'

export const getDecksCards = async (req, res, next) => {
  const { deckId } = req.params
  try {
    const decksCards = await DecksCards.getById({ id: deckId })

    return res.status(200).json(decksCards)
  } catch (error) {
    next(error)
  }
}

export const createCardsDecks = async (req, res, next) => {
  const { deckId, cards } = req.body

  try {
    console.log({ deckId, cards })
  } catch (error) {
    next(error)
  }
}
