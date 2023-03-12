import { MAX_DECKS_CARDS_LENGTH } from '../constants/decks_cards.js'
import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'
import * as DecksCards from '../services/decks_cards.service.js'
import * as Cards from '../services/cards.service.js'
import formatCard from '../helpers/formatCard.js'

export const getDecksCards = async (req, res, next) => {
  const { deckId } = req.params
  try {
    const decksCards = await DecksCards.getCardsByDeckId({ id: deckId })
    const cardsToReturn = decksCards.map(card => formatCard({ card, req }))
    return res.status(200).json(cardsToReturn).end()
  } catch (error) {
    next(error)
  }
}

export const addCardToDeck = async (req, res, next) => {
  const { deckId, cardId } = req.body
  try {
    const cardsInDeck = await DecksCards.getCardsByDeckId({ id: deckId })

    if (cardsInDeck.length === MAX_DECKS_CARDS_LENGTH) {
      return res
        .status(400)
        .json(createError({
          code: ERRORS_CODE.InvalidField,
          field: 'cards',
          message: `Maximum number of cards is ${MAX_DECKS_CARDS_LENGTH}`,
          status: 400
        }))
    }

    if (cardsInDeck.some(card => card.id === cardId)) {
      return res
        .status(409)
        .json(createError({
          code: ERRORS_CODE.Duplicated,
          field: 'cardId',
          message: 'A deck cannot have two or more of the same cards.',
          status: 409
        }))
    }

    await DecksCards.addCardToDeck({ deckId, cardId })

    const card = await Cards.findOne({ id: cardId })

    const cardToReturn = formatCard({ card, req })

    return res.status(200).json(cardToReturn).end()
  } catch (error) {
    next(error)
  }
}

export const deleteCardFromDeck = async (req, res, next) => {
  const { deckId, cardId } = req.params

  try {
    await DecksCards.deleteCardInDeck({ deckId, cardId })
    return res.status(200).end()
  } catch (error) {
    next(error)
  }
}
