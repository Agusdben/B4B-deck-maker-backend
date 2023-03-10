import db from '../config/db.js'
import createImageUrl from '../helpers/createImageUrl.js'

export const findAll = async () => {
  const q = 'SELECT * FROM affinities'
  const [rows] = await db.query(q)
  const affinities = rows.map(row => {
    const img = createImageUrl(row.img)
    return {
      ...row,
      img
    }
  })
  return affinities
}
