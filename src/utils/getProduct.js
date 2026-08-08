import { productsMap } from '../data'

export const getProduct = (productId) => {
  if (!productId) return null

  // 1. Busca directamente en el mapa de productos registrados
  const foundProduct = productsMap[productId]

  if (foundProduct) {
    return foundProduct
  }

  // 2. Fallback dinámico únicamente si el producto no existe o está deshabilitado
  return {
    id: productId,
    name: `Nexora ${productId.charAt(0).toUpperCase() + productId.slice(1)}`,
    shortName: productId.toUpperCase(),
    route: `/${productId}`,
    accentColor: 'var(--color-primary)',
    mode: 'light', // Asegura el modo por defecto para que usePageTheme funcione
    description: 'Descripción no disponible por el momento.',
    mockup: '/mockups/NexoraTheme.png',
    downloadUrl: '/descargar',
    highlights: [],
    stats: [],
  }
}

export default getProduct
