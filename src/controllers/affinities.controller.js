import { findAll } from '../services/affinities.service.js'

export const getAllAffinities = async (req, res) => {
  const affinities = await findAll()

  return res.json(affinities).end()
}
