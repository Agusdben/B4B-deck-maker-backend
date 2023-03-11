import jwt from 'jsonwebtoken'
import { ERRORS_CODE } from '../constants/errorsCode.js'
import { createError } from '../helpers/createError.js'

export const verifyToken = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = null
  let decodedToken = null

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json(createError({
      code: ERRORS_CODE.Token,
      field: 'token',
      message: 'Invalid token',
      status: 401
    }))
  }

  req.user = { ...decodedToken, token }
  console.log(req.user)
  next()
}
