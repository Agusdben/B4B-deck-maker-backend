import jwt from 'jsonwebtoken'

export default function generateToken ({ toSign }) {
  return jwt.sign(
    toSign,
    process.env.JWT_SECRET,
    {
      expiresIn: 60 * 60 * 24 * 30
    }
  )
}
