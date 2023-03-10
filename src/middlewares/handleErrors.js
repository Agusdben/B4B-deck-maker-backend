import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'

export const handleErrors = async (error, req, res, next) => {
  console.log({ error })

  return res
    .status(500)
    .json(createError({
      code: ERRORS_CODE.ServerError,
      field: 'Unknown',
      message: 'Server error.',
      status: 500
    }))
}
