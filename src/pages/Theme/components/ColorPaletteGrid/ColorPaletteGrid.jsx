import React, { useState } from 'react'
import { FiCopy, FiCheck, FiSun, FiMoon } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './ColorPaletteGrid.css'

export const ColorPaletteGrid = ({ accentColor = '#E11F2F' }) => {
  const [copiedToken, setCopiedToken] = useState(null)

  const tokensList = [
    {
      name: 'Accent Principal',
      variable: '--color-primary',
      description: 'Acento dinámico de marca',
      badge: 'Marca',
    },
    {
      name: 'Fondo de Aplicación',
      variable: '--color-bg-app',
      description: 'Lienzo base adaptativo',
      badge: 'Superficie',
    },
    {
      name: 'Superficie de Tarjeta',
      variable: '--color-bg-surface',
      description: 'Tarjetas, contenedores y modales',
      badge: 'Superficie',
    },
    {
      name: 'Texto de Encabezado',
      variable: '--color-text-heading',
      description: 'Títulos e información principal',
      badge: 'Tipografía',
    },
    {
      name: 'Texto Atenuado',
      variable: '--color-text-muted',
      description: 'Subtítulos y metadatos secundarios',
      badge: 'Tipografía',
    },
    {
      name: 'Borde Translucido',
      variable: '--color-light-border',
      description: 'Delimitadores con opacidad sutil',
      badge: 'Borde',
    },
  ]

  const handleCopy = (variable) => {
    navigator.clipboard.writeText(`var(${variable})`)
    setCopiedToken(variable)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  const customStyle = {
    '--palette-accent': accentColor,
    '--palette-accent-bg': `${accentColor}12`,
  }

  return (
    <section className="palette-release-wrapper" style={customStyle}>
      <Card radius="2xl" className="palette-release-card">
        {/* Badge Versión / Categoría */}
        <div className="palette-release-badge">
          <Badge variant="version" color={accentColor}>
            DESIGN TOKENS
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h2 className="palette-release-title">Inspector de Tokens</h2>
        <span className="palette-release-subtitle">
          Sistema de variables CSS unificadas para cambio de tema instantáneo
        </span>

        {/* Descripción Principal */}
        <p className="palette-release-description">
          Todas las interfaces de Nexora Labs leen directamente estas propiedades personalizadas.
          Haz clic en cualquiera de las fichas técnicas para copiar la variable al portapapeles.
        </p>

        {/* Icono Central con Modos */}
        <div className="palette-icon-circle">
          <FiSun className="palette-circle-icon" />
          <span className="palette-circle-divider">/</span>
          <FiMoon className="palette-circle-icon" />
        </div>

        {/* Subnota */}
        <p className="palette-release-subnote">
          Sincronización automática con la preferencia del sistema operativo y tema de página.
        </p>

        {/* Tarjeta Interior con la Grilla de Tokens */}
        <div className="palette-details-box">
          <span className="palette-details-label">TOKENS DISPONIBLES</span>

          <div className="palette-grid">
            {tokensList.map((token) => {
              const isCopied = copiedToken === token.variable

              return (
                <div
                  key={token.variable}
                  className="palette-swatch-card"
                  onClick={() => handleCopy(token.variable)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="palette-swatch-header">
                    <div
                      className="palette-swatch-color-preview"
                      style={{ backgroundColor: `var(${token.variable})` }}
                    />
                    <span className="palette-swatch-badge">{token.badge}</span>
                  </div>

                  <div className="palette-swatch-info">
                    <span className="palette-swatch-name">{token.name}</span>
                    <code className="palette-swatch-code">{token.variable}</code>
                    <p className="palette-swatch-desc">{token.description}</p>
                  </div>

                  <button
                    type="button"
                    className={`palette-copy-btn ${isCopied ? 'is-copied' : ''}`}
                    aria-label={`Copiar ${token.variable}`}
                  >
                    {isCopied ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </Card>
    </section>
  )
}

export default ColorPaletteGrid
