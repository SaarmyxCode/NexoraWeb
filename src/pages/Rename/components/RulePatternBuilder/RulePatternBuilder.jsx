import React, { useState } from 'react'
import { FiFileText, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './RulePatternBuilder.css'

export const RulePatternBuilder = ({ accentColor = '#EAB308' }) => {
  const [activePattern, setActivePattern] = useState('date_index')

  const patterns = [
    { id: 'date_index', label: '{Fecha}_{Indice}', example: '2026-08-07_001.jpg' },
    { id: 'exif', label: 'CAM_{Modelo}_{Indice}', example: 'CAM_CanonEOS_001.jpg' },
    { id: 'upper', label: '{MAYÚSCULAS}', example: 'DOCUMENTO_FINAL.pdf' },
  ]

  const filesMock = [
    { original: 'IMG_8492.JPG', date: '2026-08-07' },
    { original: 'photo_test_2.png', date: '2026-08-07' },
    { original: 'sin_titulo.pdf', date: '2026-08-07' },
  ]

  const getNewName = (file, index) => {
    const idx = String(index + 1).padStart(3, '0')
    const ext = file.original.split('.').pop()

    if (activePattern === 'date_index') return `${file.date}_${idx}.${ext}`
    if (activePattern === 'exif') return `CAM_EOS_${idx}.${ext}`
    if (activePattern === 'upper') return file.original.toUpperCase()
    return file.original
  }

  const customStyle = {
    '--rename-accent': accentColor,
    '--rename-accent-bg': `${accentColor}12`,
  }

  return (
    <section className="builder-release-wrapper" style={customStyle}>
      <Card radius="2xl" className="builder-release-card">
        <div className="builder-release-badge">
          <Badge variant="version" color={accentColor}>
            SIMULADOR DE PATRONES
          </Badge>
        </div>

        <h2 className="builder-release-title">Construye tus Reglas</h2>
        <span className="builder-release-subtitle">
          Estructura y renombrado en lote con variables dinámicas
        </span>

        <p className="builder-release-description">
          Aplica expresiones de renombrado compuestas combinando metadatos del sistema, índices
          numéricos y fechas en milisegundos.
        </p>

        {/* Botones de Selección de Patrón */}
        <div className="builder-pattern-tabs">
          {patterns.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`builder-tab-btn ${activePattern === p.id ? 'is-active' : ''}`}
              onClick={() => setActivePattern(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Vista Previa de Archivos */}
        <div className="builder-details-box">
          <span className="builder-details-label">PREVISUALIZACIÓN DEL LOTE</span>

          <div className="builder-files-list">
            {filesMock.map((file, idx) => (
              <div key={idx} className="builder-file-row">
                <div className="builder-file-col">
                  <FiFileText className="builder-file-icon" />
                  <span className="builder-old-name">{file.original}</span>
                </div>

                <FiArrowRight className="builder-arrow-icon" />

                <div className="builder-file-col">
                  <FiCheckCircle className="builder-check-icon" />
                  <span className="builder-new-name">{getNewName(file, idx)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  )
}

export default RulePatternBuilder
