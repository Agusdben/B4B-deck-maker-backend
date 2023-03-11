import { TITLE_ERROR, TITLE_REGEX } from '../constants/decks.js'
import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'
import * as Decks from '../services/decks.service.js'

export const getDecks = async (req, res, next) => {
  const { userId } = req.params

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

  try {
    const deck = await Decks.addDeck({ title, userId: user.id })
    return res.status(200).json(deck).end()
  } catch (error) {
    next(error)
  }
}
