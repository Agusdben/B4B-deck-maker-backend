import db from '../config/db.js'

export const getCardsByDeckId = async ({ id }) => {
  const q =
  `
    SELECT c.id, c.title, c.description, c.img, t.title 'type', a.title 'affinity', a.img 'affinity_img'
    FROM decks_cards dc
    INNER JOIN decks d ON d.id = dc.id_deck
    INNER JOIN cards c ON c.id = dc.id_card
    INNER JOIN affinities a ON a.id = c.id_affinity
    INNER JOIN types t ON t.id = c.id_type
    WHERE dc.id_deck = ?
  `
  const [rows] = await db.query(q, [id])
  return rows
}

export const addCardToDeck = async ({ deckId, cardId }) => {
  const q = 'insert into decks_cards(id_deck, id_card) values(?, ?)'
  await db.query(q, [deckId, cardId])
}
