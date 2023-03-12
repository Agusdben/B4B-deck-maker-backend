import createImageUrl from './crearteImageUrl.js'

export default function formatCard ({ card, req }) {
  return {
    ...card,
    img: createImageUrl({ imgName: card.img, req }),
    affinity_img: createImageUrl({ imgName: card.affinity_img, req })
  }
}
