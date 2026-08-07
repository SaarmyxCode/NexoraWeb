import React from 'react'
import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig.json'
import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { footer } = siteConfig

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Notaciones y aclaraciones iniciales */}
        <section className="footer-disclaimer">
          {footer.disclaimer.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </section>

        {/* Grid de enlaces agrupados por columnas dinámicas */}
        <div className="footer-nav-grid">
          {footer.columns.map((col, idx) => (
            <div key={idx} className="footer-column">
              <div className="footer-group">
                <h4 className="footer-title">{col.title}</h4>
                <ul className="footer-list">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link to={link.to} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Localizador / Enlace a soporte */}
        <div className="footer-store-locator">
          <Link to="/soporte">Busca asistencia o servicios de instalación</Link> cerca de ti.
        </div>

        {/* Barra Legal Inferior */}
        <div className="footer-bottom">
          <span>Copyright © {currentYear} Nexora Labs. Todos los derechos reservados.</span>

          <div className="footer-legal-links">
            {footer.legalLinks.map((legal, idx) => (
              <React.Fragment key={idx}>
                <Link to={legal.to}>{legal.label}</Link>
                {idx < footer.legalLinks.length - 1 && (
                  <span className="footer-legal-divider">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <span className="footer-country">{footer.country}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
