import React, { useState } from 'react'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import { FiCheck, FiCopy, FiType, FiLayers, FiSliders } from 'react-icons/fi'
import { activeProducts } from '../../../../data'
import './DesignSystemShowcase.css'

export const DesignSystemShowcase = ({ accentColor = '#E11F2F' }) => {
  const [activeTab, setActiveTab] = useState('atoms')
  const [selectedAccent, setSelectedAccent] = useState(accentColor)
  const [copiedToken, setCopiedToken] = useState(null)

  // Mapea dinámicamente solo los productos ACTIVOS (enabled: true)
  const productTokens = activeProducts.map((product) => ({
    name: product.shortName || product.name,
    hex: product.accentColor || 'var(--color-primary)',
    varName: `--color-${product.id}-accent`,
  }))

  const handleCopy = (token) => {
    navigator.clipboard.writeText(token)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  const codeExample = "const engine = new NexoraUI({ mode: 'dark' });"

  return (
    <section className="ds-showcase-wrapper" style={{ '--ds-accent': selectedAccent }}>
      <Card radius="2xl" className="ds-showcase-card">
        {/* Encabezado Principal */}
        <div className="ds-showcase-header">
          <Badge variant="version" color={selectedAccent}>
            DESIGN SYSTEM SPECIFICATIONS
          </Badge>
          <h2 className="ds-showcase-title">Especificación de Componentes & Tokens</h2>
          <p className="ds-showcase-description">
            Explora las variables CSS, la tipografía jerárquica y los átomos de interfaz que
            componen la identidad visual unificada de Nexora.
          </p>
        </div>

        {/* Control de Pestañas */}
        <div className="ds-showcase-tabs">
          <button
            type="button"
            className={`ds-tab-btn ${activeTab === 'atoms' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('atoms')}
          >
            <FiLayers /> Átomos de UI
          </button>
          <button
            type="button"
            className={`ds-tab-btn ${activeTab === 'typography' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('typography')}
          >
            <FiType /> Tipografía
          </button>
          <button
            type="button"
            className={`ds-tab-btn ${activeTab === 'tokens' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('tokens')}
          >
            <FiSliders /> Tokens de Color ({productTokens.length})
          </button>
        </div>

        {/* CONTENIDO SEGÚN PESTAÑA */}
        <div className="ds-showcase-content">
          {/* 1. ÁTOMOS DE UI */}
          {activeTab === 'atoms' && (
            <div className="ds-panel animate-fade-in">
              <div className="ds-grid-2col">
                <div className="ds-box">
                  <span className="ds-box-label">Botones Primarios y Badges</span>
                  <div className="ds-preview-row">
                    <button
                      type="button"
                      className="ds-btn-primary"
                      style={{ backgroundColor: selectedAccent }}
                    >
                      Botón de Acción
                    </button>
                    <button type="button" className="ds-btn-outline">
                      Explorar
                    </button>
                  </div>
                  <div className="ds-preview-row">
                    <Badge variant="version" color={selectedAccent}>
                      v2026.1.0
                    </Badge>
                    <span className="ds-status-dot" style={{ backgroundColor: selectedAccent }} />
                    <span className="ds-status-text">Estado Activo</span>
                  </div>
                </div>

                <div className="ds-box">
                  <span className="ds-box-label">Radios de Borde (Border Radius)</span>
                  <div className="ds-radius-preview-grid">
                    <div className="ds-radius-box radius-sm">
                      <span>var(--radius-sm)</span>
                      <small>8px</small>
                    </div>
                    <div className="ds-radius-box radius-lg">
                      <span>var(--radius-lg)</span>
                      <small>16px</small>
                    </div>
                    <div className="ds-radius-box radius-2xl">
                      <span>var(--radius-2xl)</span>
                      <small>24px</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. TIPOGRAFÍA Y ESCALA */}
          {activeTab === 'typography' && (
            <div className="ds-panel animate-fade-in">
              <div className="ds-box">
                <span className="ds-box-label">Jerarquía Tipográfica Institucional</span>

                <div className="ds-type-row">
                  <span className="ds-type-tag">Titulares / Branding</span>
                  <h1 className="ds-type-sample-h1">Encabezado Display Hero</h1>
                </div>

                <div className="ds-type-row">
                  <span className="ds-type-tag">Interfaz / Subtítulos</span>
                  <h3 className="ds-type-sample-h3">Subtítulo de Sección y Tarjetas Bento</h3>
                </div>

                <div className="ds-type-row">
                  <span className="ds-type-tag">Cuerpo de Texto / UI Body</span>
                  <p className="ds-type-sample-body">
                    Texto legible optimizado para lectura prolongada con alto contraste sobre
                    superficies oscuras o claras sin fatiga visual.
                  </p>
                </div>

                <div className="ds-type-row">
                  <span className="ds-type-tag">Monoespaciada / Datos Técnicos</span>
                  <code className="ds-type-sample-mono">{codeExample}</code>
                </div>
              </div>
            </div>
          )}

          {/* 3. TOKENS DE COLOR (SOLO ACTIVOS) */}
          {activeTab === 'tokens' && (
            <div className="ds-panel animate-fade-in">
              <span className="ds-box-label">
                Paleta Cromática Semántica de Productos Habilitados
              </span>
              <p className="ds-panel-subtext">
                Selecciona un color para previsualizarlo en los componentes del sistema:
              </p>

              <div className="ds-tokens-grid">
                {productTokens.map((item) => (
                  <div
                    key={item.varName}
                    className={`ds-token-card ${selectedAccent === item.hex ? 'is-selected' : ''}`}
                    onClick={() => setSelectedAccent(item.hex)}
                  >
                    <div className="ds-token-swatch" style={{ backgroundColor: item.hex }} />
                    <div className="ds-token-info">
                      <span className="ds-token-name">{item.name}</span>
                      <span className="ds-token-hex">{item.hex}</span>
                    </div>
                    <button
                      type="button"
                      className="ds-token-copy-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCopy(`var(${item.varName})`)
                      }}
                      title="Copiar Variable CSS"
                    >
                      {copiedToken === `var(${item.varName})` ? <FiCheck /> : <FiCopy />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  )
}

export default DesignSystemShowcase
