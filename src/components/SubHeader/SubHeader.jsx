import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { getProduct } from '../../utils/getProduct'
import './SubHeader.css'

export const SubHeader = ({
  productId,
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

  const renderActionButton = (text, href, isPrimary = false) => {
    if (!text || !href) return null

    const isAnchor = href.startsWith('#')

    if (isPrimary) {
      return (
        <Button variant="primary" size="sm" accentColor={displayAccentColor}>
          {isAnchor ? (
            <a href={href} className="subheader-btn-link">
              {text}
            </a>
          ) : (
            <Link to={href} className="subheader-btn-link">
              {text}
            </Link>
          )}
        </Button>
      )
    }

    return (
      <Button variant="secondary" size="sm" accentColor={displayAccentColor}>
        {isAnchor ? (
          <a href={href} className="subheader-btn-link">
            {text}
          </a>
        ) : (
          <Link to={href} className="subheader-btn-link">
            {text}
          </Link>
        )}
      </Button>
    )
  }

  return (
    <div className={`subheader-wrapper ${isVisible ? 'is-visible' : ''}`}>
      <div className="subheader-navbar">
        <h2 className="subheader-title" style={{ color: displayAccentColor }}>
          {displayTitle}
        </h2>

        <div className="subheader-actions">
          {renderActionButton(outlineBtnText, outlineBtnHref, false)}
          {renderActionButton(primaryBtnText, displayPrimaryHref, true)}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
