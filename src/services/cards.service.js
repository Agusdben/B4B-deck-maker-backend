import db from '../config/db.js'

export const findAll = async () => {
  const q = `
    SELECT c.id, c.title, c.description, c.img, t.title 'type', a.title 'affinity', a.img 'affinity_img'
    FROM cards c
    INNER JOIN types t ON c.id_type = t.id
    INNER JOIN affinities a ON c.id_affinity = a.id
  `
  const [rows] = await db.query(q)
  return rows
}
