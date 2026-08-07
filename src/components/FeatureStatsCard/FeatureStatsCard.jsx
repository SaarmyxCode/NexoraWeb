import { FiPlus, FiLayers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import './FeatureStatsCard.css'

export const FeatureStatsCard = ({
  title = 'Theme y todos nuestros cambios',
  linkText = 'Más información en nuestro informe (PDF)',
  linkHref = '#',
  linkColor = 'var(--color-primary)',
  accentColor = 'var(--color-blue)',
  icon: Icon = FiLayers,
  items = [],
  onCardClick,
}) => {
  const revealRef = useReveal()

  return (
    <section ref={revealRef} className="stats-wrapper reveal-on-scroll">
      <div className="stats-main-card">
        <header className="stats-header">
          <h2 className="stats-title">{title}</h2>
          {linkText && (
            <Link to={linkHref} className="stats-link" style={{ color: linkColor }}>
              {linkText}
            </Link>
          )}
        </header>

        <div className="stats-grid">
          {items.map((item, index) => (
            <div key={item.id || index} className="stat-item-card">
              <div className="stat-card-body">
                {Icon && (
                  <div className="stat-icon-container">
                    <Icon className="stat-icon" />
                  </div>
                )}

                <p className="stat-text">
                  {item.prefix && <span className="stat-prefix">{item.prefix} </span>}
                  {item.highlight && (
                    <span className="stat-highlight" style={{ color: accentColor }}>
                      {item.highlight}{' '}
                    </span>
                  )}
                  {item.suffix && <span className="stat-suffix">{item.suffix}</span>}
                </p>
              </div>

              <button
                type="button"
                className="stat-btn-add"
                aria-label="Ver más detalles"
                onClick={() => onCardClick?.(item, index)}
              >
                <FiPlus />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
