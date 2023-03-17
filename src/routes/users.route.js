import { Router } from 'express'
import { userLogin, userSignIn, loginToken } from '../controllers/users.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export default Router()
  .post('/signin', userSignIn)
  .post('/login', userLogin)
  .get('/loginToken', [verifyToken], loginToken)
