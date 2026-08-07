import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from '../../utils/getProduct'
import './SubHeader.css'

export const SubHeader = ({
  productId, // Permite cargar datos automáticamente si se pasa el ID (p. ej., "theme", "songs", "rename")
  title,
  titleColor,
  accentColor,
  outlineBtnText = 'Explorar',
  outlineBtnHref = '#explorar',
  primaryBtnText = 'Descargar',
  primaryBtnHref,
  targetHeroId,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  // Carga automática desde JSON si existe productId
  const product = productId ? getProduct(productId) : null

  const displayTitle = title || product?.shortName || 'NEXORA'
  const displayAccentColor =
    accentColor || titleColor || product?.accentColor || 'var(--color-primary)'
  const displayPrimaryHref = primaryBtnHref || product?.downloadUrl || '/descargar'
  const heroId = targetHeroId || `${productId || 'theme'}-hero`

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById(heroId)

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
  }, [heroId])

  // Helper dinámico para renderizar <a> (anclas) o <Link> (rutas)
  const renderButton = (text, href, isPrimary = false) => {
    if (!text || !href) return null

    const isAnchor = href.startsWith('#')
    const className = `subheader-btn ${isPrimary ? 'btn-primary' : 'btn-outline'}`
    const style = isPrimary
      ? {
          backgroundColor: displayAccentColor,
          borderColor: displayAccentColor,
          color: 'var(--color-white)',
        }
      : {
          color: displayAccentColor,
          borderColor: `${displayAccentColor}40`,
        }

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
        <h2 className="subheader-title" style={{ color: displayAccentColor }}>
          {displayTitle}
        </h2>

        <div className="subheader-actions">
          {renderButton(outlineBtnText, outlineBtnHref, false)}
          {renderButton(primaryBtnText, displayPrimaryHref, true)}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
