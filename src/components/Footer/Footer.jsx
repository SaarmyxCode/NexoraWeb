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
            restricciones y otros <a href="#terminos">términos</a>.
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
                  <a href="#theme" className="footer-link">
                    Theme
                  </a>
                </li>
                <li>
                  <a href="#songs" className="footer-link">
                    Songs
                  </a>
                </li>
                <li>
                  <a href="#rename" className="footer-link">
                    Rename
                  </a>
                </li>
                <li>
                  <a href="#finance" className="footer-link">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="#vault" className="footer-link">
                    NexoraVault
                  </a>
                </li>
                <li>
                  <a href="#autocleaner" className="footer-link">
                    AutoCleaner
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <h4 className="footer-title">Nexora Account</h4>
              <ul className="footer-list">
                <li>
                  <a href="#account" className="footer-link">
                    Gestionar Cuenta
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="footer-column">
            <div className="footer-group">
              <h4 className="footer-title">Cuenta</h4>
              <ul className="footer-list">
                <li>
                  <a href="#admin" className="footer-link">
                    Administra tu Cuenta de Nexora
                  </a>
                </li>
                <li>
                  <a href="#cloud" className="footer-link">
                    Nexora Cloud
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <h4 className="footer-title">Entretenimiento</h4>
              <ul className="footer-list">
                <li>
                  <a href="#one" className="footer-link">
                    Nexora One
                  </a>
                </li>
                <li>
                  <a href="#tv" className="footer-link">
                    Nexora TV
                  </a>
                </li>
                <li>
                  <a href="#music" className="footer-link">
                    Nexora Music
                  </a>
                </li>
                <li>
                  <a href="#arcade" className="footer-link">
                    Nexora Arcade
                  </a>
                </li>
                <li>
                  <a href="#podcasts" className="footer-link">
                    Nexora Podcasts
                  </a>
                </li>
                <li>
                  <a href="#store" className="footer-link">
                    App Store
                  </a>
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
                  <a href="#business" className="footer-link">
                    Nexora y la empresa
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <h4 className="footer-title">Para la educación</h4>
              <ul className="footer-list">
                <li>
                  <a href="#edu" className="footer-link">
                    Nexora y la educación
                  </a>
                </li>
                <li>
                  <a href="#buy-edu" className="footer-link">
                    Comprar para educación
                  </a>
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
                  <a href="#accesibilidad" className="footer-link">
                    Accesibilidad
                  </a>
                </li>
                <li>
                  <a href="#educacion" className="footer-link">
                    Educación
                  </a>
                </li>
                <li>
                  <a href="#ambiente" className="footer-link">
                    Medio ambiente
                  </a>
                </li>
                <li>
                  <a href="#privacidad" className="footer-link">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <h4 className="footer-title">Acerca de Nexora</h4>
              <ul className="footer-list">
                <li>
                  <a href="#newsroom" className="footer-link">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#directivos" className="footer-link">
                    Directivos de Nexora
                  </a>
                </li>
                <li>
                  <a href="#empleo" className="footer-link">
                    Oportunidades laborales
                  </a>
                </li>
                <li>
                  <a href="#inversionistas" className="footer-link">
                    Inversionistas
                  </a>
                </li>
                <li>
                  <a href="#eventos" className="footer-link">
                    Eventos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Localizador / Enlace a soporte o ventas */}
        <div className="footer-store-locator">
          <a href="#distribuidores">Busca un distribuidor</a> cerca de ti.
        </div>

        {/* Barra Legal Inferior */}
        <div className="footer-bottom">
          <span>Copyright © {currentYear} Nexora Labs. Todos los derechos reservados.</span>

          <div className="footer-legal-links">
            <a href="#privacidad">Política de privacidad</a>
            <span className="footer-legal-divider">|</span>
            <a href="#aviso">Aviso legal</a>
            <span className="footer-legal-divider">|</span>
            <a href="#sitemap">Mapa del sitio</a>
          </div>

          <span className="footer-country">Colombia</span>
        </div>
      </div>
    </footer>
  )
}
