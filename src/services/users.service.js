import db from '../config/db.js'
import generateUUID from '../helpers/generateUUID.js'
import { hashPassword } from '../helpers/hashPassword.js'

export const createUser = async ({ username, password }) => {
  const hashedPassword = await hashPassword(password)
  const id = generateUUID()
  const q = 'INSERT INTO users(id,username,password) VALUES(?,?,?)'
  await db.query(q, [id, username, hashedPassword])
  return { id, username, password }
}
