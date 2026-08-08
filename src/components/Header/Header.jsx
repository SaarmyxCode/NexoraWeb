import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'
import siteConfig from '../../data/siteConfig.json'
import { activeProducts } from '../../data'
import { Button } from '../../atoms/Button/Button'
import { SearchModal } from '../SearchModal/SearchModal'
import './Header.css'

export const Header = ({ logoSrc }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const location = useLocation()

  // 1. Productos activos con enabled: true
  const productNavLinks = activeProducts.map((p) => ({
    id: p.id,
    label: p.shortName || p.name,
    to: p.route,
    accentColor: p.accentColor,
  }))

  // 2. Links fijos institucionales desde siteConfig
  const staticNavLinks = siteConfig.header?.navLinks || []

  // 3. Unión completa para la navegación
  const navLinks = [...productNavLinks, ...staticNavLinks]

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

  // Identifica el color de acento del producto activo en la ruta actual
  const activeNavLink = navLinks.find((link) => link.to === location.pathname)
  const logoAccentColor = activeNavLink?.accentColor

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-navbar">
          {/* IZQUIERDA: Logo Principal */}
          <div className="header-left">
            <Link
              to="/"
              className="header-logo-container"
              aria-label={`Ir al inicio de ${siteConfig.siteName || 'Nexora'}`}
            >
              <span
                className="header-logo-text"
                style={logoAccentColor ? { color: logoAccentColor } : undefined}
              >
                {siteConfig.siteName || 'Nexora'}
              </span>
            </Link>
          </div>

          {/* CENTRO: Menú Desktop */}
          <nav className="header-nav-desktop" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.id || link.to}
                  to={link.to}
                  className={`header-nav-link ${isActive ? 'is-active' : ''}`}
                  style={isActive && link.accentColor ? { color: link.accentColor } : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* DERECHA: Acciones (Buscador & Menú Móvil) */}
          <div className="header-right">
            <Button
              variant="icon"
              size="sm"
              aria-label="Abrir buscador"
              onClick={() => setIsSearchOpen(true)}
            >
              <FiSearch className="header-icon" />
            </Button>

            <Button
              variant="icon"
              size="sm"
              className="mobile-toggle-btn"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="header-icon" />
              ) : (
                <FiMenu className="header-icon" />
              )}
            </Button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
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
                    style={isActive && link.accentColor ? { color: link.accentColor } : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </header>

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
