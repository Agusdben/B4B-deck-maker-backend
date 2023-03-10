import { Router } from 'express'
import { getAllAffinities } from '../controllers/affinities.controller.js'

export default Router()
  .get('/', getAllAffinities)
