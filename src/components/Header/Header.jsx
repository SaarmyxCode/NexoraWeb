import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = ({ logoSrc }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Theme', to: '/theme' },
    { label: 'Songs', to: '/songs' },
    { label: 'Rename', to: '/rename' },
    { label: 'Finance', to: '/finance' },
    { label: 'Soporte', to: '/soporte' },
    { label: 'Dónde descargar', to: '/#descargar' },
  ]

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-navbar">
        <Link to="/" className="header-logo-container">
          {logoSrc ? (
            <img src={logoSrc} alt="Nexora" className="header-logo-img" draggable="false" />
          ) : (
            <span className="header-logo">NEXORA</span>
          )}
        </Link>

        <nav className="header-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="header-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
