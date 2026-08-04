import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SubHeader.css'

export const SubHeader = ({
  title = 'THEME',
  titleColor = 'var(--color-primary)',
  outlineBtnText = 'Explorar',
  outlineBtnHref = '#explorar',
  primaryBtnText = 'Descargar',
  primaryBtnHref = '#descargar',
  targetHeroId = 'theme-hero',
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById(targetHeroId)

      if (!heroElement) {
        // Fallback en caso de que no encuentre la tarjeta Hero
        setIsVisible(window.scrollY > 400)
        return
      }

      // Obtener la posición exacta del Hero en la página
      const heroBottom = heroElement.offsetTop + heroElement.offsetHeight

      // Se activa en cuanto la parte inferior del Hero sobrepasa la vista superior
      if (window.scrollY >= heroBottom - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Ejecutamos una comprobación inicial al cargar
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetHeroId])

  return (
    <div className={`subheader-wrapper ${isVisible ? 'is-visible' : ''}`}>
      <div className="subheader-navbar">
        <h2 className="subheader-title" style={{ color: titleColor }}>
          {title}
        </h2>

        <div className="subheader-actions">
          {outlineBtnText && (
            <Link to={outlineBtnHref} className="subheader-btn btn-outline">
              {outlineBtnText}
            </Link>
          )}

          {primaryBtnText && (
            <Link to={primaryBtnHref} className="subheader-btn btn-primary">
              {primaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
