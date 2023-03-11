import { Router } from 'express'
import { getDecks, createDeck } from '../controllers/decks.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export default Router()
  .get('/:userId', [verifyToken], getDecks)
  .post('/', [verifyToken], createDeck)
