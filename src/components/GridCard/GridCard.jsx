import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../atoms/Card/Card'
import { getProduct } from '../../data'
import { useReveal } from '../../hooks/useReveal'
import './GridCard.css'

export const GridCard = ({
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
  const displaySubtitle = subtitle || product?.description
  const displayImage = imageSrc || product?.mockup
  const displayTitleColor = titleColor || accentColor || product?.accentColor
  const destination = to || (product ? product.route : '/')

  const cardContent = (
    <>
      <div className="grid-card-header">
        {displayTitle && (
          <h3
            className="grid-card-title"
            style={displayTitleColor ? { color: displayTitleColor } : undefined}
          >
            {displayTitle}
          </h3>
        )}
        {displaySubtitle && <p className="grid-card-subtitle">{displaySubtitle}</p>}
      </div>

      {displayImage && (
        <div className="grid-card-media">
          <img
            src={displayImage}
            alt={imageAlt || displayTitle}
            className="grid-card-image"
            loading="lazy"
          />
        </div>
      )}
    </>
  )

  return (
    <article ref={revealRef} className={`grid-card-wrapper reveal-on-scroll ${className}`} id={id}>
      {isClickable ? (
        <Link to={destination} className="grid-card-link-wrapper">
          <Card radius="2xl" isInteractive className="grid-card">
            {cardContent}
          </Card>
        </Link>
      ) : (
        <Card radius="2xl" className="grid-card">
          {cardContent}
        </Card>
      )}
    </article>
  )
}

export const GridContainer = ({ children, className = '' }) => {
  return (
    <section className={`grid-container-wrapper ${className}`}>
      <div className="grid-container">{children}</div>
    </section>
  )
}

export default GridCard
