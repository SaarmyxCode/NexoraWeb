import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteConfig from '../../data/siteConfig.json'
import { activeProducts } from '../../data'
import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  // 1. Identificamos el producto activo según la ruta actual
  const activeProduct = activeProducts.find((p) => p.route === location.pathname)
  const currentProductKey = activeProduct?.id || 'default'

  // 2. Extraemos el disclaimer dinámico según el objeto disclaimer de siteConfig o la prop del producto
  const footerData = siteConfig?.footer || {}
  const disclaimerObject = footerData.disclaimer || {}

  const disclaimers = activeProduct?.disclaimer ||
    disclaimerObject[currentProductKey] ||
    disclaimerObject.default || [
      `Pruebas realizadas por ${siteConfig?.siteName || 'Nexora Labs'} en ${currentYear}.`,
    ]

  // 3. Filtrado de columnas del Footer
  const rawColumns = footerData.columns || []
  const columns = rawColumns.map((col) => {
    // Si la columna es "Explorar Productos" o similar, mostramos solo los activos
    if (
      col.title.toLowerCase().includes('producto') ||
      col.title.toLowerCase().includes('descubrir')
    ) {
      return {
        ...col,
        links: activeProducts.map((p) => ({ label: p.name, to: p.route })),
      }
    }
    return col
  })

  const legalLinks = footerData.legalLinks || [
    { label: 'Política de privacidad', to: '/privacidad' },
    { label: 'Aviso legal', to: '/soporte' },
  ]
  const country = footerData.country || 'Colombia'

  // Configuración del bloque dinámico de soporte
  const supportText = activeProduct
    ? `¿Necesitas ayuda con ${activeProduct.name}? Obtén asistencia técnica o guías de instalación`
    : 'Busca asistencia o servicios de instalación'

  const supportLink = activeProduct?.route ? `${activeProduct.route}#soporte` : '/soporte'
  const supportColor = activeProduct?.accentColor || 'var(--color-primary)'

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
        {/* Disclaimer Dinámico */}
        {disclaimers.length > 0 && (
          <section className="footer-disclaimer">
            {disclaimers.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        )}

        {/* Grid de Enlaces */}
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

        {/* Enlace a Soporte Dinámico */}
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
