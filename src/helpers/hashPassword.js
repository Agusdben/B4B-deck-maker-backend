import bcrypt from 'bcrypt'

export const hashPassword = async password => {
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  return passwordHash
}
