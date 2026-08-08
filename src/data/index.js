import theme from './products/theme.json'
import rename from './products/rename.json'
import songs from './products/songs.json'
import finance from './products/finance.json'
import code from './products/code.json'

const allProducts = [theme, rename, songs, finance, code]

// Lista de productos activos (enabled: true)
export const activeProducts = allProducts.filter((p) => p.enabled)

// Mapa indexado por ID
export const productsMap = activeProducts.reduce((acc, product) => {
  acc[product.id] = product
  return acc
}, {})

export const getProduct = (id) => productsMap[id] || null
