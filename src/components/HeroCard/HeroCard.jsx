import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import './HeroCard.css'

export const HeroCard = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  id,
  to = '/',
  titleColor,
  isClickable = false,
}) => {
  const revealRef = useReveal()

  const content = (
    <>
      <h2 className="hero-title" style={titleColor ? { color: titleColor } : undefined}>
        {title}
      </h2>
      {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      {imageSrc && (
        <div className="hero-media-container">
          <img src={imageSrc} alt={imageAlt || title} className="hero-image" loading="lazy" />
        </div>
      )}
    </>
  )

  return (
    <section ref={revealRef} className="hero-wrapper reveal-on-scroll" id={id}>
      {isClickable ? (
        <Link to={to} className="hero-card hero-card-link">
          {content}
        </Link>
      ) : (
        <div className="hero-card">{content}</div>
      )}
    </section>
  )
}
