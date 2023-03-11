import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'

// routes
import usersRoutes from './routes/users.route.js'
import cardsRoutes from './routes/cards.route.js'
import imagesRoutes from './routes/images.route.js'
import decksRoutes from './routes/decks.route.js'
import decksCards from './routes/decks_cards.route.js'
import { handleErrors } from './middlewares/handleErrors.js'

const app = express()
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 3000

app.use('/api/users', usersRoutes)
app.use('/api/images', imagesRoutes)
app.use('/api/cards', cardsRoutes)
app.use('/api/decks', decksRoutes)
app.use('/api/decks_cards', decksCards)

app.use(handleErrors)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}: http://localhost:${PORT}`)
})

db.connect()
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log('Error', err)
  })
