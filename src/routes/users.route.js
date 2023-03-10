import { Router } from 'express'
import { userSignIn } from '../controllers/users.controller.js'

export default Router()
  .post('/signin', userSignIn)
