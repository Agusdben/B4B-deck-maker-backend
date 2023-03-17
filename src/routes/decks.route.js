import { Router } from 'express'
import * as controller from '../controllers/decks.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import * as decksMiddlewares from '../middlewares/decks.middleware.js'

export default Router()
  .get(
    '/user/:userId',
    [verifyToken],
    controller.getDecks
  )

  .get(
    '/:deckId',
    [verifyToken, decksMiddlewares.verifyExistenceOfDeck],
    controller.getDeck
  )

  .post(
    '/',
    [verifyToken, decksMiddlewares.verifyDeckTitle],
    controller.createDeck
  )

  .put(
    '/:deckId',
    [verifyToken, decksMiddlewares.verifyDeckTitle, decksMiddlewares.verifyExistenceOfDeck],
    controller.updateDeck
  )

  .delete(
    '/:deckId',
    [verifyToken, decksMiddlewares.verifyExistenceOfDeck],
    controller.deleteDeck
  )
