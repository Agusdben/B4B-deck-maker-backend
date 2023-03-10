export default function createImageUrl (img) {
  const buffer = Buffer.from(img)
  return `data:image/png;base64,${buffer.toString('base64')}`
}
