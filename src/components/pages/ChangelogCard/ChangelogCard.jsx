import React from 'react'
import { Link } from 'react-router-dom'
import { FiLayers, FiFolderPlus, FiMusic, FiDollarSign } from 'react-icons/fi'
import { Card } from '../../../atoms/Card/Card'
import { Badge } from '../../../atoms/Badge/Badge'
import './ChangelogCard.css'

// Mapeo dinámico de iconos según la propiedad del JSON
const ICON_MAP = {
  FiLayers,
  FiFolderPlus,
  FiMusic,
  FiDollarSign,
}

export const ChangelogCard = ({
  changelogData, // Pasa directamente el objeto del JSON (ej: changelogData.theme)
  title,
  version,
  date,
  badgeColor,
  icon,
  text,
  subtext,
  changes,
  supportHref = '/soporte',
}) => {
  // Fallbacks si se pasa el objeto completo o props individuales
  const data = changelogData || {}
  const displayTitle = title || data.title || 'Nexora Product'
  const displayVersion = version || data.version || 'v1.0.0'
  const displayDate = date || data.date || ''
  const displayBadgeColor = badgeColor || data.badgeColor || 'var(--color-primary)'
  const displayIconName = icon || data.icon || 'FiLayers'
  const displayText = text || data.text || ''
  const displaySubtext = subtext || data.subtext || ''
  const displayChanges = changes || data.changes || []

  // Componente de icono dinámico
  const IconComponent = ICON_MAP[displayIconName] || FiLayers

  // Helper para procesar el string o el objeto de los cambios
  const parseChangeItem = (changeItem) => {
    if (typeof changeItem === 'object' && changeItem !== null) {
      return {
        type: changeItem.type || '',
        text: changeItem.text || '',
      }
    }

    if (typeof changeItem === 'string') {
      const parts = changeItem.split(':')
      if (parts.length > 1) {
        return {
          type: parts[0].trim(),
          text: parts.slice(1).join(':').trim(),
        }
      }
      return { type: '', text: changeItem }
    }

    return { type: '', text: '' }
  }

  const customStyle = {
    '--changelog-accent': displayBadgeColor,
    '--changelog-accent-bg': `${displayBadgeColor}15`,
  }

  return (
    <section className="changelog-release-wrapper" style={customStyle}>
      <Card radius="2xl" className="changelog-release-card">
        {/* Badge Versión */}
        <div className="changelog-release-badge">
          <Badge variant="version" color={displayBadgeColor}>
            {displayVersion}
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h2 className="changelog-release-title">{displayTitle}</h2>
        {displayDate && <span className="changelog-release-date">{displayDate}</span>}

        {/* Descripción Principal */}
        {displayText && <p className="changelog-release-description">{displayText}</p>}

        {/* Icono Circular Central Dinámico */}
        <div className="changelog-icon-circle">
          <IconComponent className="changelog-circle-icon" />
        </div>

        {/* Subnota */}
        {displaySubtext && <p className="changelog-release-subnote">{displaySubtext}</p>}

        {/* Tarjeta Interior de Detalles */}
        {displayChanges.length > 0 && (
          <div className="changelog-details-box">
            <span className="changelog-details-label">DETALLES DE LA VERSIÓN</span>
            <ul className="changelog-details-list">
              {displayChanges.map((item, index) => {
                const parsed = parseChangeItem(item)
                return (
                  <li key={index} className="changelog-details-item">
                    <span className="changelog-dash">—</span>
                    {parsed.type && <strong>{parsed.type}: </strong>}
                    <span>{parsed.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {/* Enlace Inferior de Soporte */}
        <Link to={supportHref} className="changelog-support-link">
          ¿Encontraste un problema? Reporta un error en el centro de soporte &gt;
        </Link>
      </Card>
    </section>
  )
}

export default ChangelogCard
