import { Router } from 'express'
import { getCards } from '../controllers/cards.controller.js'

export default Router()
  .get('/', getCards)
