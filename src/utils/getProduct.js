import productsData from '../data/products.json'

export const getProduct = (productId) => {
  const fallback = {
    id: productId,
    name: 'Nexora App',
    shortName: productId.toUpperCase(),
    route: `/${productId}`,
    accentColor: 'var(--color-primary)',
    description: 'Descripción no disponible por el momento.',
    mockup: '/MacBookMockup.png',
    downloadUrl: '/descargar',
    highlights: [],
    stats: [],
  }

  return productsData[productId] || fallback
}
