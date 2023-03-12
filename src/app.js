import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import cors from 'cors'

// routes
import usersRoutes from './routes/users.route.js'
import cardsRoutes from './routes/cards.route.js'
import imagesRoutes from './routes/images.route.js'
import decksRoutes from './routes/decks.route.js'
import decksCards from './routes/decks_cards.route.js'
import { handleErrors } from './middlewares/handleErrors.js'
import { WHITE_LIST } from './constants/whiteList.js'

const app = express()
app.use(express.json())
app.use(cors({ origin: WHITE_LIST }))
dotenv.config()

const PORT = process.env.PORT || 3000

app.use('/api/users', usersRoutes)
app.use('/api/images', imagesRoutes)
app.use('/api/cards', cardsRoutes)
app.use('/api/decks', decksRoutes)
app.use('/api/decks_cards', decksCards)

app.use(handleErrors)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})

db.connect()
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log('Error', err)
  })
