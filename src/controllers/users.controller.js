import { ERRORS_CODE } from '../constants/errorsCode.js'
import { REGISTER_ERRORS, REGISTER_REGEX } from '../constants/user.js'
import { isString } from '../helpers/checkTypes.js'
import { createError } from '../helpers/createError.js'
import { createUser } from '../services/users.service.js'

export const userSignIn = async (req, res, next) => {
  const { username = '', password = '', confirmPassword = '' } = req.body

  if (!username || !isString(username) || !REGISTER_REGEX.username.test(username)) {
    return res
      .status(400)
      .json(createError({
        message: REGISTER_ERRORS.username,
        status: 400,
        field: 'username',
        code: ERRORS_CODE.InvalidField
      }))
  }

  if (!password || !isString(password) || !REGISTER_REGEX.password.test(password)) {
    return res
      .status(400)
      .json(createError({
        message: REGISTER_ERRORS.password,
        status: 400,
        field: 'password',
        code: ERRORS_CODE.InvalidField
      }))
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json(createError({
        message: REGISTER_ERRORS.confirmPassword,
        status: 400,
        field: 'confirmPassword',
        code: ERRORS_CODE.InvalidField
      }))
  }

  try {
    const user = await createUser({ username, password })
    return res.status(200).json(user).end()
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res
        .status(409)
        .json(createError({
          code: ERRORS_CODE.Duplicated,
          field: 'username',
          message: 'Username already exists',
          status: 409
        }))
    }

    next(error)
  }
}
