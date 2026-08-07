import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../atoms/Card/Card'
import { getProduct } from '../../utils/getProduct'
import { useReveal } from '../../hooks/useReveal'
import './HeroCard.css'

export const HeroCard = ({
  productId,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  id,
  to,
  titleColor,
  accentColor,
  isClickable = false,
  className = '',
}) => {
  const revealRef = useReveal()

  // Carga automática si viene productId
  const product = productId ? getProduct(productId) : null

  const displayTitle = title || product?.shortName || product?.name || ''
  const displaySubtitle = subtitle || (productId ? product?.description : undefined)
  const displayImage = imageSrc || product?.mockup
  const displayTitleColor = titleColor || accentColor || product?.accentColor
  const destination = to || (product ? product.route : '/')

  const cardContent = (
    <>
      <div className="hero-header-content">
        <h2
          className="hero-title"
          style={displayTitleColor ? { color: displayTitleColor } : undefined}
        >
          {displayTitle}
        </h2>
        {displaySubtitle && <p className="hero-subtitle">{displaySubtitle}</p>}
      </div>

      {displayImage && (
        <div className="hero-media-container">
          <img
            src={displayImage}
            alt={imageAlt || displayTitle}
            className="hero-image"
            loading="lazy"
          />
        </div>
      )}
    </>
  )

  return (
    <section ref={revealRef} className={`hero-wrapper reveal-on-scroll ${className}`} id={id}>
      {isClickable ? (
        <Link to={destination} className="hero-card-link-wrapper">
          <Card radius="2xl" isInteractive className="hero-card">
            {cardContent}
          </Card>
        </Link>
      ) : (
        <Card radius="2xl" className="hero-card">
          {cardContent}
        </Card>
      )}
    </section>
  )
}

export default HeroCard
