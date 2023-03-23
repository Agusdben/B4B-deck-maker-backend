import fs from 'fs'

export const getImage = async (req, res, next) => {
  try {
    const { imageName } = req.params
    console.log(imageName)
    const extension = imageName.toString().split('.').at(-1)
    const imgRoute = `./src/files/images/${imageName}`
    const image = fs.readFileSync(imgRoute)
    res.writeHead(200, { 'Content-Type': `image/${extension}` })
    res.end(image, 'binary')
  } catch (error) {
    next(error)
  }
}
