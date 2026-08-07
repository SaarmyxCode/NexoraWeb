import { useEffect } from 'react'
import { getProduct } from '../utils/getProduct'

export const usePageTheme = (productId) => {
  useEffect(() => {
    if (!productId) return

    const product = getProduct(productId)
    const mode = product?.mode || 'light'

    // Cambia la paleta de TODA la app (Header, Body, Footer)
    document.body.setAttribute('data-theme', mode)

    // Al salir de la página, restaura el tema claro normal
    return () => {
      document.body.removeAttribute('data-theme')
    }
  }, [productId])
}
