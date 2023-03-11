import db from '../config/db.js'
import generateUUID from '../helpers/generateUUID.js'

export const getDecksByUserId = async ({ userId }) => {
  const q = 'SELECT * FROM decks WHERE id = ?'
  const [rows] = await db.query(q, [userId])
  return rows
}

export const addDeck = async ({ title, userId }) => {
  const q = 'INSERT INTO decks(id, id_user, title) VALUES(?, ?, ?)'
  const id = generateUUID()
  await db.query(q, [id, userId, title])
  return { id, id_user: userId, title }
}
