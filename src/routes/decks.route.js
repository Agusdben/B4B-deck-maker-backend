import { Router } from 'express'
import * as controller from '../controllers/decks.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export default Router()
  .get('/:userId', [verifyToken], controller.getDecks)
  .post('/', [verifyToken], controller.createDeck)
  .put('/:deckId', [verifyToken], controller.updateDeck)
  .delete('/:deckId', [verifyToken], controller.deleteDeck)
