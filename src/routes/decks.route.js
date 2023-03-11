import { Router } from 'express'
import * as controller from '../controllers/decks.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import * as decksMiddlewares from '../middlewares/decks.middleware.js'

export default Router()
  .get('/:userId', [verifyToken], controller.getDecks)
  .post('/', [verifyToken, decksMiddlewares.verifyDeckTitle], controller.createDeck)
  .put('/:deckId', [verifyToken, decksMiddlewares.verifyDeckTitle], controller.updateDeck)
  .delete('/:deckId', [verifyToken, decksMiddlewares.verifyExistenceOfDeck], controller.deleteDeck)
