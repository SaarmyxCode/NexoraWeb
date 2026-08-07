import React from 'react'
import { Card } from '../../../atoms/Card/Card'
import { Badge } from '../../../atoms/Badge/Badge'
import './ChangelogCard.css'

export const ChangelogCard = ({ section }) => {
  if (!section) return null

  const {
    version,
    title,
    date,
    text,
    subtext,
    badgeColor,
    icon: ActiveIcon,
    changes = [],
  } = section

  const customStyle = {
    '--changelog-accent': badgeColor || 'var(--color-primary)',
    '--changelog-accent-bg': `${badgeColor || 'var(--color-primary)'}15`,
  }

  return (
    <section className="changelog-card-wrapper" style={customStyle}>
      <Card radius="2xl" className="changelog-release-card animate-tab-change">
        {/* Badge Versión */}
        <div className="changelog-release-badge">
          <Badge variant="version" color={badgeColor}>
            {version}
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h1 className="changelog-release-title">{title}</h1>
        {date && <span className="changelog-release-date">{date}</span>}

        {/* Cuerpo Principal */}
        <div className="changelog-release-body">
          {text && <p className="changelog-release-description">{text}</p>}

          {/* Icono Circular Central Dinámico */}
          {ActiveIcon && (
            <div className="changelog-icon-circle">
              <ActiveIcon className="changelog-circle-icon" />
            </div>
          )}

          {/* Subnota */}
          {subtext && <p className="changelog-release-subnote">{subtext}</p>}

          {/* Tarjeta Interior de Detalles */}
          {changes.length > 0 && (
            <div className="changelog-details-box">
              <span className="changelog-details-label">DETALLES DE LA VERSIÓN</span>
              <ul className="changelog-details-list">
                {changes.map((change, idx) => (
                  <li key={idx} className="changelog-details-item">
                    <span className="changelog-dash">—</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Enlace Inferior de Soporte */}
          <div className="changelog-release-actions">
            <a href="/soporte" className="changelog-support-link">
              ¿Encontraste un problema? Reporta un error en el centro de soporte &gt;
            </a>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default ChangelogCard
