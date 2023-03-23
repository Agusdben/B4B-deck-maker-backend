import fs from 'fs'

export const getImage = async (req, res, next) => {
  try {
    const { imageName } = req.params
    const imgRoute = `./src/files/images/${imageName}`
    const image = fs.readFileSync(imgRoute)
    res.writeHead(200, { 'Content-Type': 'image/*' })
    res.end(image, 'binary')
  } catch (error) {
    next(error)
  }
}
