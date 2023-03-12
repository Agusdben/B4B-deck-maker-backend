export default function createImageUrl ({ imgName, req }) {
  const baseURL = `${req.protocol}://${req.get('host')}/api`
  return `${baseURL}/images/${imgName}`
}
