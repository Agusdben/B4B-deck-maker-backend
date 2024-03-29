import db from '../config/db.js'
import generateUUID from '../helpers/generateUUID.js'

export const getDecksByUserId = async ({ userId }) => {
  const q =
    `
      SELECT id, title, id_user, count(dc.id_card) 'total_cards'
      FROM decks d
      LEFT JOIN decks_cards dc ON dc.id_deck = d.id
      WHERE id_user = ?
      GROUP BY id, title, id_user
      ORDER BY title asc
    `
  const [rows] = await db.query(q, [userId])
  return rows
}

export const addDeck = async ({ title, userId }) => {
  const q = 'INSERT INTO decks(id, id_user, title) VALUES(?, ?, ?)'
  const id = generateUUID()
  await db.query(q, [id, userId, title])
  return { id, id_user: userId, title }
}

export const updateDeck = async ({ title, deckId }) => {
  const q = 'UPDATE decks SET title = ? WHERE id = ?'
  await db.query(q, [title, deckId])
}

export const findOne = async ({ id }) => {
  const q = 'SELECT * FROM decks WHERE id = ?'
  const [rows] = await db.query(q, [id])
  return rows[0]
}

export const deleteOne = async ({ id }) => {
  await db.query('DELETE FROM decks WHERE id = ?', [id])
  await db.query('DELETE FROM decks_cards WHERE id_deck = ?', [id])
}
