import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export const Header = ({ logoSrc }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Theme', to: '/theme' },
    { label: 'Songs', to: '/songs' },
    { label: 'Rename', to: '/rename' },
    { label: 'Finance', to: '/finance' },
    { label: 'Soporte', to: '/soporte' },
    { label: 'Dónde descargar', to: '/descargar' },
  ]

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-navbar">
        <Link to="/" className="header-logo-container" aria-label="Ir al inicio de Nexora">
          {logoSrc ? (
            <img src={logoSrc} alt="Nexora" className="header-logo-img" draggable="false" />
          ) : (
            <span className="header-logo">NEXORA</span>
          )}
        </Link>

        <nav className="header-nav" aria-label="Navegación principal">
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
      </div>
    </header>
  )
}
