import './HeroCard.css'

export const HeroCard = ({ title, subtitle, imageSrc, imageAlt, id, href = '#', titleColor }) => {
  return (
    <section className="hero-wrapper" id={id}>
      <a href={href} className="hero-card hero-card-link">
        <h2 className="hero-title" style={titleColor ? { color: titleColor } : undefined}>
          {title}
        </h2>

        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {imageSrc && (
          <div className="hero-media-container">
            <img src={imageSrc} alt={imageAlt || title} className="hero-image" loading="lazy" />
          </div>
        )}
      </a>
    </section>
  )
}
