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
        setIsVisible(window.scrollY > 350)
        return
      }

      const heroBottom = heroElement.offsetTop + heroElement.offsetHeight
      setIsVisible(window.scrollY >= heroBottom - 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetHeroId])

  // Helper para decidir si usar <Link> o <a>
  const renderButton = (text, href, isPrimary = false) => {
    if (!text) return null

    const isAnchor = href.startsWith('#')
    const className = `subheader-btn ${isPrimary ? 'btn-primary' : 'btn-outline'}`
    const style = isPrimary ? { '--btn-accent-color': activeAccentColor } : undefined

    if (isAnchor) {
      return (
        <a href={href} className={className} style={style}>
          {text}
        </a>
      )
    }

    return (
      <Link to={href} className={className} style={style}>
        {text}
      </Link>
    )
  }

  return (
    <div className={`subheader-wrapper ${isVisible ? 'is-visible' : ''}`}>
      <div className="subheader-navbar">
        <h2 className="subheader-title" style={{ color: titleColor }}>
          {title}
        </h2>

        <div className="subheader-actions">
          {renderButton(outlineBtnText, outlineBtnHref, false)}
          {renderButton(primaryBtnText, primaryBtnHref, true)}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
