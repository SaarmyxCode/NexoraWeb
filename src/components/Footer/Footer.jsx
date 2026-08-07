import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Notaciones y aclaraciones iniciales */}
        <section className="footer-disclaimer">
          <p>
            1. Pruebas realizadas por Nexora Labs en julio de 2026 usando entornos optimizados para
            aplicaciones React y servicios integrados. El rendimiento real puede variar según la
            configuración del dispositivo, red y entorno de ejecución.
          </p>
          <p>
            Las funcionalidades están sujetas a cambios. Algunas características, aplicaciones y
            servicios podrían no estar disponibles en todas las regiones o idiomas.
          </p>
          <p>
            Nexora Songs y NexoraVault requieren suscripción o licencias válidas. Sujeto a
            restricciones y otros <Link to="/soporte#terminos">términos</Link>.
          </p>
        </section>

        {/* Grid de enlaces agrupados por columnas */}
        <div className="footer-nav-grid">
          {/* Columna 1 */}
          <div className="footer-column">
            <div className="footer-group">
              <h4 className="footer-title">Descubrir</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/theme" className="footer-link">
                    Theme
                  </Link>
                </li>
                <li>
                  <Link to="/songs" className="footer-link">
                    Songs
                  </Link>
                </li>
                <li>
                  <Link to="/rename" className="footer-link">
                    Rename
                  </Link>
                </li>
                <li>
                  <Link to="/finance" className="footer-link">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link to="/descargar" className="footer-link">
                    NexoraVault
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="footer-column">
            <div className="footer-group">
              <h4 className="footer-title">Ecosistema</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/changelog" className="footer-link">
                    Novedades
                  </Link>
                </li>
                <li>
                  <Link to="/soporte" className="footer-link">
                    Centro de Soporte
                  </Link>
                </li>
                <li>
                  <Link to="/descargar" className="footer-link">
                    Dónde descargar
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="footer-column">
            <div className="footer-group">
              <h4 className="footer-title">Para la empresa</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/finance" className="footer-link">
                    Nexora y la empresa
                  </Link>
                </li>
                <li>
                  <Link to="/soporte" className="footer-link">
                    Nexora y la educación
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4 */}
          <div className="footer-column">
            <div className="footer-group">
              <h4 className="footer-title">Valores de Nexora</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/soporte" className="footer-link">
                    Accesibilidad
                  </Link>
                </li>
                <li>
                  <Link to="/privacidad" className="footer-link">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Localizador / Enlace a soporte */}
        <div className="footer-store-locator">
          <Link to="/soporte">Busca asistencia o servicios de instalación</Link> cerca de ti.
        </div>

        {/* Barra Legal Inferior */}
        <div className="footer-bottom">
          <span>Copyright © {currentYear} Nexora Labs. Todos los derechos reservados.</span>

          <div className="footer-legal-links">
            <Link to="/privacidad">Política de privacidad</Link>
            <span className="footer-legal-divider">|</span>
            <Link to="/soporte">Aviso legal</Link>
            <span className="footer-legal-divider">|</span>
            <Link to="/soporte">Mapa del sitio</Link>
          </div>

          <span className="footer-country">Colombia</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
