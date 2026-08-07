import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteConfig from '../../data/siteConfig.json'
import products from '../../data/products.json'
import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  // Extraemos la sección del footer de siteConfig con fallback seguro
  const footerData = siteConfig?.footer || {}
  const disclaimers = footerData.disclaimer || [
    `Pruebas realizadas por ${siteConfig?.siteName || 'Nexora Labs'} en 2026.`,
  ]
  const columns = footerData.columns || []
  const legalLinks = footerData.legalLinks || [
    { label: 'Política de privacidad', to: '/privacidad' },
    { label: 'Aviso legal', to: '/soporte' },
  ]
  const country = footerData.country || 'Colombia'

  // Identificamos el producto activo según la ruta (ej: /theme, /rename, /songs)
  const currentProductKey = Object.keys(products).find(
    (key) => products[key]?.route === location.pathname,
  )
  const activeProduct = currentProductKey ? products[currentProductKey] : null

  // Configuración dinámica del bloque de asistencia / soporte
  const supportText = activeProduct
    ? `¿Necesitas ayuda con ${activeProduct.shortName || activeProduct.name}? Obten asistencia técnica o guías de instalación`
    : 'Busca asistencia o servicios de instalación'

  const supportLink = activeProduct?.route ? `${activeProduct.route}#soporte` : '/soporte'
  const supportColor = activeProduct?.accentColor || 'var(--color-primary)'

  // Helper para renderizar enlaces externos o de React Router
  const renderLink = (linkItem, className) => {
    const isExternal = linkItem.to?.startsWith('http') || linkItem.href?.startsWith('http')
    const href = linkItem.to || linkItem.href || '#'

    if (isExternal) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {linkItem.label}
        </a>
      )
    }

    return (
      <Link to={href} className={className}>
        {linkItem.label}
      </Link>
    )
  }

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Notaciones y aclaraciones iniciales */}
        {disclaimers.length > 0 && (
          <section className="footer-disclaimer">
            {disclaimers.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        )}

        {/* Grid de enlaces agrupados por columnas dinámicas */}
        {columns.length > 0 && (
          <div className="footer-nav-grid">
            {columns.map((col, idx) => (
              <div key={idx} className="footer-column">
                <div className="footer-group">
                  <h4 className="footer-title">{col.title}</h4>
                  <ul className="footer-list">
                    {col.links?.map((link, linkIdx) => (
                      <li key={linkIdx}>{renderLink(link, 'footer-link')}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Localizador / Enlace a soporte Dinámico */}
        <div className="footer-store-locator">
          <Link to={supportLink} className="footer-locator-link" style={{ color: supportColor }}>
            {supportText}
          </Link>{' '}
          cerca de ti.
        </div>

        {/* Barra Legal Inferior */}
        <div className="footer-bottom">
          <span>
            Copyright © {currentYear} {siteConfig?.siteName || 'Nexora Labs'}. Todos los derechos
            reservados.
          </span>

          <div className="footer-legal-links">
            {legalLinks.map((legal, idx) => (
              <React.Fragment key={idx}>
                {renderLink(legal, 'footer-legal-item')}
                {idx < legalLinks.length - 1 && <span className="footer-legal-divider">|</span>}
              </React.Fragment>
            ))}
          </div>

          <span className="footer-country">{country}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
