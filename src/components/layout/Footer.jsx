import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* 1. Sección de notas aclaratorias / Términos tipo Apple */}
        <div className="footer__disclaimer">
          <p>
            1. El rendimiento y la disponibilidad de los módulos de Nexora Code y Nexora Songs
            dependen de la arquitectura de infraestructura del cliente y la configuración de entorno
            utilizada. Las especificaciones técnicas y servicios están sujetos a cambios sin previo
            aviso.
          </p>
          <p>
            El uso de la suite requiere suscripción o licencia activa. Sujeto a términos y
            restricciones según el contrato de servicio.
          </p>
        </div>

        <hr className="hr" style={{ margin: 'var(--space-5) 0', opacity: 0.15 }} />

        {/* 2. Columnas de navegación estructuradas por categoría */}
        <div className="footer__navigation">
          <div className="footer__column">
            <span className="footer__title">Ecosistema</span>
            <ul>
              <li>
                <Link to="/productos#nexora-code">Nexora Code</Link>
              </li>
              <li>
                <Link to="/productos#nexora-songs">Nexora Songs</Link>
              </li>
              <li>
                <Link to="/servicios">Sistemas a Medida</Link>
              </li>
              <li>
                <Link to="/servicios">Consultoría Digital</Link>
              </li>
            </ul>

            <span className="footer__title" style={{ marginTop: 'var(--space-4)' }}>
              Plataformas
            </span>
            <ul>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  Repositorio & SDKs
                </a>
              </li>
              <li>
                <a href="#docs">Documentación Técnica</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <span className="footer__title">Soluciones</span>
            <ul>
              <li>
                <Link to="/servicios">Desarrollo Web & Software</Link>
              </li>
              <li>
                <Link to="/servicios">Arquitectura Modular</Link>
              </li>
              <li>
                <Link to="/servicios">Optimización & Escala</Link>
              </li>
            </ul>

            <span className="footer__title" style={{ marginTop: 'var(--space-4)' }}>
              Cuenta
            </span>
            <ul>
              <li>
                <a href="#portal">Portal de Clientes</a>
              </li>
              <li>
                <a href="#soporte">Gestión de Licencias</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <span className="footer__title">Para Empresas</span>
            <ul>
              <li>
                <Link to="/contacto">Nexora Enterprise</Link>
              </li>
              <li>
                <Link to="/contacto">Infraestructura Dedicada</Link>
              </li>
            </ul>

            <span className="footer__title" style={{ marginTop: 'var(--space-4)' }}>
              Soporte
            </span>
            <ul>
              <li>
                <Link to="/contacto">Mesa de Ayuda</Link>
              </li>
              <li>
                <a href="#status">Estado del Sistema</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <span className="footer__title">Valores Nexora</span>
            <ul>
              <li>
                <a href="#accesibilidad">Accesibilidad Web</a>
              </li>
              <li>
                <a href="#seguridad">Seguridad & Cifrado</a>
              </li>
              <li>
                <a href="#rendimiento">Sostenibilidad Digital</a>
              </li>
            </ul>

            <span className="footer__title" style={{ marginTop: 'var(--space-4)' }}>
              Acerca de Nexora
            </span>
            <ul>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/oportunidades-laborales">Oportunidades Laborales</Link>
              </li>
              <li>
                <Link to="/contacto-comercial">Contacto Comercial</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Enlace directo de ayuda/contacto rápido */}
        <div className="footer__location-prompt">
          <p>
            ¿Necesitas una cotización personalizada?{' '}
            <Link to="/contacto" className="footer__prompt-link">
              Contacta con nuestro equipo técnico
            </Link>{' '}
            para tu región.
          </p>
        </div>

        <hr className="hr" style={{ margin: 'var(--space-4) 0', opacity: 0.15 }} />

        {/* 4. Pie con copyright, enlaces legales y región */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()} Nexora Inc. Todos los derechos reservados.
          </p>

          <div className="footer__legal-links">
            <Link to="/legal">Política de Privacidad</Link>
            <span className="footer__divider">|</span>
            <Link to="/legal">Términos de Uso</Link>
            <span className="footer__divider">|</span>
            <Link to="/legal">Aviso Legal</Link>
            <span className="footer__divider">|</span>
            <Link to="/legal">Mapa del Sitio</Link>
          </div>

          <div className="footer__region">
            <span>Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
