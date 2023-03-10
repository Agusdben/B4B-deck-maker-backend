import { Router } from 'express'
import { getImage } from '../controllers/images.controller.js'

export default Router()
  .get('/:imageName', getImage)
