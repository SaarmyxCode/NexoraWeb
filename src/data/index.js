import ui from './products/ui.json'
import rename from './products/rename.json'
import songs from './products/songs.json'
import finance from './products/finance.json'
import code from './products/code.json'
import soporteData from './soporte.json'

// Todos los productos cargados
const allProducts = [ui, code, rename, songs, finance]

// Exporta únicamente los activos
export const activeProducts = allProducts.filter((product) => product.enabled)

export const productsMap = activeProducts.reduce((acc, product) => {
  acc[product.id] = product
  return acc
}, {})

export const getProduct = (id) => productsMap[id] || null
export const soporte = soporteData
