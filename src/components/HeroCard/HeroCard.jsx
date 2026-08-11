import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../atoms/Card/Card'
import { getProduct } from '../../data'
import { useReveal } from '../../hooks/useReveal'
import './HeroCard.css'

export const HeroCard = ({
  product: productProp,
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

  // Resuelve el producto ya sea recibido por objeto `product` o por string `productId`
  const product = productProp || (productId ? getProduct(productId) : null)

  const displayTitle = title || product?.shortName || product?.name || ''
  // Si isClickable es true, no muestra el subtítulo; de lo contrario asigna el valor correspondiente
  const displaySubtitle = isClickable ? undefined : subtitle || product?.description
  const displayImage = imageSrc || product?.mockup
  const displayTitleColor = titleColor || accentColor || product?.accentColor
  const destination = to || (product ? product.route : '/')

  const cardContent = (
    <>
      <div className="hero-header-content">
        {displayTitle && (
          <h2
            className="hero-title"
            style={displayTitleColor ? { color: displayTitleColor } : undefined}
          >
            {displayTitle}
          </h2>
        )}
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
