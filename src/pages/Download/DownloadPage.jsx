import React, { useState } from 'react'
import {
  FiLayers,
  FiMusic,
  FiFolderPlus,
  FiTrendingUp,
  FiCode,
  FiGithub,
  FiCheckCircle,
} from 'react-icons/fi'
import { activeProducts } from '../../data'
import { useReveal } from '../../hooks/useReveal'
import './DownloadPage.css'

export const DownloadPage = () => {
  const heroRevealRef = useReveal()

  // Mapa de iconos por ID de producto
  const iconMap = {
    ui: FiLayers,
    songs: FiMusic,
    rename: FiFolderPlus,
    finance: FiTrendingUp,
    code: FiCode,
  }

  // Mapa de plataformas/compatibilidad por ID de producto
  const platformsMap = {
    ui: ['React / Vite', 'CSS Tokens', 'Design System'],
    songs: ['Linux (.deb)'],
    rename: ['Linux (.deb)'],
    finance: ['Linux (.deb)', 'Web Version'],
    code: ['Linux (.deb)'],

    // 'Windows (.exe)', 'macOS (.dmg)',
  }

  // Mapeamos ÚNICAMENTE las aplicaciones activas (sin Soporte)
  const productsList = activeProducts.map((item) => ({
    id: item.id,
    label: item.shortName || item.name,
    name: item.name,
    icon: iconMap[item.id] || FiLayers,
    accentColor: item.accentColor || 'var(--color-primary)',
    version: 'Última Release en GitHub',
    description: item.description,
    platforms: platformsMap[item.id] || ['Multiplataforma'],
    // URL fallback apuntando a GitHub Releases del repositorio correspondiente
    githubReleaseUrl: item.downloadUrl || `https://github.com/nexora-labs/${item.id}/releases`,
  }))

  const [activeProduct, setActiveProduct] = useState(productsList[0])
  const ActiveIcon = activeProduct?.icon || FiLayers

  if (productsList.length === 0) return null

  return (
    <div className="download-page">
      {/* 1. HERO CARD HEADER CON SELECTOR DE TABS */}
      <section ref={heroRevealRef} className="download-wrapper reveal-on-scroll">
        <div className="download-hero-card">
          <div className="download-hero-header">
            <h1 className="download-title">Dónde descargar</h1>
            <p className="download-subtitle">
              Obtén los binarios e instaladores oficiales directamente desde las versiones
              publicadas en GitHub.
            </p>
          </div>

          <nav className="download-tabs-card" aria-label="Seleccionar aplicación para descargar">
            {productsList.map((item) => {
              const Icon = item.icon
              const isActive = activeProduct.id === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`download-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveProduct(item)}
                >
                  <div className="tab-icon-box">
                    <Icon className="tab-icon" />
                  </div>
                  <span className="tab-label">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </section>

      {/* 2. PRODUCT HERO CARD CON ENLACE DIRECTO A GITHUB RELEASES */}
      <section className="download-wrapper">
        <div key={activeProduct.id} className="download-product-hero-card animate-tab-change">
          <div
            className="product-hero-media"
            style={{ '--app-accent-color': activeProduct.accentColor }}
          >
            <div className="product-app-icon-wrapper">
              <ActiveIcon className="product-app-icon" />
            </div>
          </div>

          <div className="product-hero-content">
            <header className="product-hero-header">
              <div className="product-title-row">
                <h2 className="product-hero-title">{activeProduct.name}</h2>
                <span className="product-version-badge">{activeProduct.version}</span>
              </div>
              <p className="product-hero-description">{activeProduct.description}</p>
            </header>

            <div className="product-platforms-container">
              <span className="platforms-label">Soporte oficial para:</span>
              <ul className="platforms-badge-list">
                {activeProduct.platforms.map((platform, idx) => (
                  <li key={idx} className="platform-badge">
                    <FiCheckCircle style={{ color: activeProduct.accentColor }} />
                    <span>{platform}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-hero-actions">
              <a
                href={activeProduct.githubReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-download-btn"
                style={{ backgroundColor: activeProduct.accentColor }}
              >
                <FiGithub className="btn-icon" />
                <span>Ir a Releases en GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
