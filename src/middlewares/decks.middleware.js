import { MAX_DECKS_PER_USER, TITLE_ERROR, TITLE_REGEX } from '../constants/decks.js'
import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'
import * as Decks from '../services/decks.service.js'

export const verifyExistenceOfDeck = async (req, res, next) => {
  const deckId = req.params.deckId || req.body.deckId

  if (!deckId) {
    return res
      .status(400)
      .json(createError({
        code: ERRORS_CODE.InvalidField,
        field: 'deckId',
        message: 'Invalid deckId',
        status: 400
      }))
  }

  try {
    const deck = await Decks.findOne({ id: deckId })

    if (deck === undefined) {
      return res
        .status(404)
        .json(createError({
          code: ERRORS_CODE.NotFound,
          field: 'deckId',
          message: 'Deck not found',
          status: 404
        }))
    }

    next()
  } catch (error) {
    next(error)
  }
}

export const verifyFreeSpace = async (req, res, next) => {
  const { user } = req

  try {
    const decks = await Decks.getDecksByUserId({ userId: user.id })

    if (decks.length >= MAX_DECKS_PER_USER) {
      return res
        .status(409)
        .json(createError({
          code: ERRORS_CODE.LimitReached,
          field: '',
          message: 'Maximum number of decks reached',
          status: 409
        }))
        .end()
    }
  } catch (error) {
    next(error)
  }
  next()
}

export const verifyDeckTitle = async (req, res, next) => {
  const { title } = req.body

  if (!title || !TITLE_REGEX.test(title)) {
    return res
      .status(400)
      .json(createError({
        code: ERRORS_CODE.InvalidField,
        field: 'title',
        message: TITLE_ERROR,
        status: 400
      }))
  }
  next()
}
