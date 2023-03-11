import { Router } from 'express'
import * as controller from '../controllers/decks_cards.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import * as decksMiddlewares from '../middlewares/decks.middleware.js'

export default Router()
  .get('/:deckId', [verifyToken, decksMiddlewares.verifyExistenceOfDeck], controller.getDecksCards)
  .post('/', [verifyToken, decksMiddlewares.verifyExistenceOfDeck], controller.createCardsDecks)
