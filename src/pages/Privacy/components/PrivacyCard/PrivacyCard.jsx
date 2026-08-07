import React from 'react'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './PrivacyCard.css'

export const PrivacyCard = ({ section, lastUpdated = 'Actualizado el 7 de agosto de 2026' }) => {
  if (!section) return null

  const { title, text, subtext, icon: ActiveIcon, details = [] } = section

  return (
    <section className="privacy-card-wrapper">
      <Card radius="2xl" className="privacy-release-card">
        {/* Badge Superior */}
        <div className="privacy-release-badge">
          <Badge variant="version" color="var(--color-primary)">
            COMPROMISO DE SEGURIDAD
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h1 className="privacy-release-title">{title}</h1>
        <span className="privacy-release-date">{lastUpdated}</span>

        {/* Cuerpo Principal */}
        <div className="privacy-release-body">
          <p className="privacy-release-description">{text}</p>

          {/* Icono Circular Central */}
          {ActiveIcon && (
            <div className="privacy-icon-circle">
              <ActiveIcon className="privacy-circle-icon" />
            </div>
          )}

          {/* Subnota */}
          {subtext && <p className="privacy-release-subnote">{subtext}</p>}

          {/* Tarjeta Interior / Grilla de Detalles del Menú */}
          {details.length > 0 && (
            <div className="privacy-details-box">
              <span className="privacy-details-label">ASPECTOS CLAVE DE ESTA SECCIÓN</span>
              <div className="privacy-details-grid">
                {details.map((item, index) => (
                  <div key={index} className="privacy-detail-subcard">
                    <h4 className="privacy-detail-title">{item.title}</h4>
                    <p className="privacy-detail-text">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Acciones e Informes */}
          <div className="privacy-release-actions">
            <a href="#descargar-pdf" className="privacy-support-link">
              Descarga una copia de esta política de privacidad (PDF) &gt;
            </a>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default PrivacyCard
