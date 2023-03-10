import { Router } from 'express'
import { userLogin, userSignIn } from '../controllers/users.controller.js'

export default Router()
  .post('/signin', userSignIn)
  .post('/login', userLogin)
