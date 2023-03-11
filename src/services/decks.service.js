import db from '../config/db.js'

export const getDecksByUserId = async ({ userId }) => {
  const q = 'SELECT * FROM decks WHERE id = ?'
  const [rows] = await db.query(q, [userId])
  return rows
}
