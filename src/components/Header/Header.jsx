import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { SearchModal } from '../SearchModal/SearchModal'
import './Header.css'

export const Header = ({ logoSrc }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const location = useLocation()

  const navLinks = [
    { label: 'Theme', to: '/theme' },
    { label: 'Songs', to: '/songs' },
    { label: 'Rename', to: '/rename' },
    { label: 'Finance', to: '/finance' },
    { label: 'Novedades', to: '/changelog' },
    { label: 'Soporte', to: '/soporte' },
    { label: 'Dónde descargar', to: '/descargar' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-navbar">
          {/* IZQUIERDA: Logo Minimalista */}
          <div className="header-left">
            <Link to="/" className="header-logo-container" aria-label="Ir al inicio de Nexora">
              {logoSrc ? (
                <img src={logoSrc} alt="Nexora" className="header-logo-img" draggable="false" />
              ) : (
                <span className="header-logo-minimal">N</span>
              )}
            </Link>
          </div>

          {/* CENTRO: Menú Desktop */}
          <nav className="header-nav-desktop" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`header-nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* DERECHA: Lupa + Menú Hamburguesa */}
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
                    key={link.to}
                    to={link.to}
                    className={`header-mobile-link ${isActive ? 'is-active' : ''}`}
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

      {/* Componente Modular de Búsqueda */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}
