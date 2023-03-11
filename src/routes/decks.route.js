import { Router } from 'express'
import { getDecks } from '../controllers/decks.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export default Router()
  .get('/:userId', [verifyToken], getDecks)
