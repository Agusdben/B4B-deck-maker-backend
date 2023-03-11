import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'

export const handleErrors = async (error, req, res, next) => {
  console.log(error.message)

  if (error.code === 'ENOENT') {
    return res
      .status(404)
      .json(createError({
        code: ERRORS_CODE.NotFound,
        field: null,
        message: 'No such file',
        status: 404
      }))
  }

  if (error.message === 'invalid token' || error.message === 'jwt expired') {
    return res
      .status(401)
      .json(createError({
        code: ERRORS_CODE.Token,
        field: 'token',
        message: error.message,
        status: 401
      }))
  }

  return res
    .status(500)
    .json(createError({
      code: ERRORS_CODE.ServerError,
      field: 'Unknown',
      message: 'Server error.',
      status: 500
    }))
}
