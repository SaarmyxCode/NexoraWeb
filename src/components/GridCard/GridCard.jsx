import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import './GridCard.css'

export const GridCard = ({
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
      <h3 className="grid-card-title" style={titleColor ? { color: titleColor } : undefined}>
        {title}
      </h3>
      {subtitle && <p className="grid-card-subtitle">{subtitle}</p>}
      {imageSrc && (
        <div className="grid-card-media">
          <img src={imageSrc} alt={imageAlt || title} className="grid-card-image" loading="lazy" />
        </div>
      )}
    </>
  )

  return (
    <article ref={revealRef} className="grid-card-wrapper reveal-on-scroll" id={id}>
      {isClickable ? (
        <Link to={to} className="grid-card grid-card-link">
          {content}
        </Link>
      ) : (
        <div className="grid-card">{content}</div>
      )}
    </article>
  )
}
