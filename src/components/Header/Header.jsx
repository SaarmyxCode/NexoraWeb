import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'
import siteConfig from '../../data/siteConfig.json'
import { SearchModal } from '../SearchModal/SearchModal'
import './Header.css'

export const Header = ({ logoSrc }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const location = useLocation()

  // Conexión dinámica con siteConfig.json con fallback seguro
  const navLinks = siteConfig.header?.navLinks || []
  const activeLogo = logoSrc || siteConfig.logoSrc

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cierra menús modales al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-navbar">
          {/* IZQUIERDA: Logo Principal Cliqueable */}
          <div className="header-left">
            <Link
              to="/"
              className="header-logo-container"
              aria-label={`Ir al inicio de ${siteConfig.siteName || 'Nexora'}`}
            >
              {activeLogo ? (
                <img
                  src={activeLogo}
                  alt={siteConfig.siteName || 'Nexora'}
                  className="header-logo-img"
                  draggable="false"
                  onError={(e) => {
                    // Fallback visual si la imagen de logo no existe en /public
                    e.currentTarget.style.display = 'none'
                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = 'inline-block'
                    }
                  }}
                />
              ) : null}
              <span
                className="header-logo-minimal"
                style={{ display: activeLogo ? 'none' : 'inline-block' }}
              >
                N
              </span>
            </Link>
          </div>

          {/* CENTRO: Menú Desktop Dinámico */}
          <nav className="header-nav-desktop" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to

              return (
                <Link
                  key={link.id || link.to}
                  to={link.to}
                  className={`header-nav-link ${isActive ? 'is-active' : ''}`}
                  style={
                    isActive && link.accentColor
                      ? { color: link.accentColor, fontWeight: 'var(--font-weight-bold)' }
                      : undefined
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* DERECHA: Buscador + Menú Hamburguesa */}
          <div className="header-right">
            <button
              type="button"
              className="header-icon-btn"
              aria-label="Abrir buscador"
              onClick={() => setIsSearchOpen(true)}
            >
              <FiSearch className="header-icon" />
            </button>

            <button
              type="button"
              className="header-icon-btn mobile-toggle-btn"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="header-icon" />
              ) : (
                <FiMenu className="header-icon" />
              )}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL (Tarjeta Flotante Separada) */}
        {isMobileMenuOpen && (
          <div className="header-mobile-card-wrapper">
            <nav className="header-mobile-nav" aria-label="Navegación móvil">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to

                return (
                  <Link
                    key={link.id || link.to}
                    to={link.to}
                    className={`header-mobile-link ${isActive ? 'is-active' : ''}`}
                    style={
                      isActive && link.accentColor
                        ? { color: link.accentColor, fontWeight: 'var(--font-weight-bold)' }
                        : undefined
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Modal de Búsqueda Global */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}

export default Header
