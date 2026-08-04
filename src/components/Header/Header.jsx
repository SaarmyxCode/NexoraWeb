import { useState, useEffect } from 'react'
import './Header.css'

export const Header = ({ logoSrc }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Theme', href: '#theme' },
    { label: 'Songs', href: '#songs' },
    { label: 'Rename', href: '#rename' },
    { label: 'Finance', href: '#finance' },
    { label: 'Soporte', href: '#soporte' },
    { label: 'Dónde descargar', href: '#descargar' },
  ]

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-navbar">
        <a href="#" className="header-logo-container">
          {logoSrc ? (
            <img src={logoSrc} alt="Nexora" className="header-logo-img" draggable="false" />
          ) : (
            <span className="header-logo">NEXORA</span>
          )}
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
