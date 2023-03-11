import db from '../config/db.js'

export const getById = async ({ id }) => {
  const q =
  `
    SELECT *
    FROM decks_cards dc
    INNER JOIN decks d ON d.id = dc.id_deck
    INNER JOIN cards c ON c.id = dc.id_card
    WHERE dc.id_deck = ?
  `
  const [rows] = await db.query(q, [id])
  return rows
}
