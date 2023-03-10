import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'

// routes
import usersRoutes from './routes/users.route.js'
import typesRoutes from './routes/types.route.js'
import affinitiesRoutes from './routes/affinities.route.js'

const app = express()
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 3000

app.use('/api/users', usersRoutes)
app.use('/api/types', typesRoutes)
app.use('/api/affinities', affinitiesRoutes)

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
