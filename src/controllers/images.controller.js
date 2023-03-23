import path from 'path'

export const getImage = async (req, res, next) => {
  try {
    const { imageName } = req.params
    const imgRoute = path.resolve(`./src/files/images/${imageName}`)
    res.sendFile(imgRoute)
  } catch (error) {
    next(error)
  }
}
