import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SubHeader.css'

export const SubHeader = ({
  title = 'THEME',
  titleColor = 'var(--color-primary)',
  accentColor,
  outlineBtnText = 'Explorar',
  outlineBtnHref = '#explorar',
  primaryBtnText = 'Descargar',
  primaryBtnHref = '#descargar',
  targetHeroId = 'theme-hero',
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const activeAccentColor = accentColor || titleColor

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById(targetHeroId)

      if (!heroElement) {
        setIsVisible(window.scrollY > 400)
        return
      }

      const heroBottom = heroElement.offsetTop + heroElement.offsetHeight

      if (window.scrollY >= heroBottom - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
            <Link
              to={primaryBtnHref}
              className="subheader-btn btn-primary"
              style={{
                '--btn-accent-color': activeAccentColor,
              }}
            >
              {primaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
