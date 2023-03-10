import { Router } from 'express'
import { userSignIn } from '../controllers/users.controller'

export default Router()
  .post('/signin', userSignIn)
