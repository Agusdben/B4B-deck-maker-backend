import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'
import * as Cards from '../services/cards.service.js'

export const verifyExistenceOfCard = async (req, res, next) => {
  const cardId = req.body.cardId || req.params.cardId

  if (!cardId) {
    return res
      .status(400)
      .json(createError({
        code: ERRORS_CODE.InvalidField,
        field: 'cardId',
        message: 'Invalid cardId',
        status: 400
      }))
  }

  try {
    const card = await Cards.findOne({ id: cardId })

    if (card === undefined) {
      return res
        .status(404)
        .json(createError({
          code: ERRORS_CODE.NotFound,
          field: 'cardId',
          message: 'Card not found',
          status: 404
        }))
    }

    next()
  } catch (error) {
    next(error)
  }
}
