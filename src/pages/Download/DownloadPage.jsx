import { useState } from 'react'
import {
  FiLayers,
  FiMusic,
  FiFolderPlus,
  FiTrendingUp,
  FiShield,
  FiDownloadCloud,
  FiCheckCircle,
} from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { useReveal } from '../../hooks/useReveal'
import './DownloadPage.css'

export const DownloadPage = () => {
  const heroRevealRef = useReveal()

  const productKeys = ['theme', 'songs', 'rename', 'finance', 'soporte']

  const iconMap = {
    theme: FiLayers,
    songs: FiMusic,
    rename: FiFolderPlus,
    finance: FiTrendingUp,
    soporte: FiShield,
  }

  const platformsMap = {
    theme: ['React / Vite', 'CSS Tokens', 'Tailwind Config'],
    songs: ['Web App', 'Desktop Client', 'Mobile App'],
    rename: ['Windows (.exe)', 'macOS (.dmg)', 'Linux (.AppImage)'],
    finance: ['Windows (.exe)', 'macOS (.dmg)', 'Web Version'],
    soporte: ['Windows', 'macOS', 'Linux', 'Web'],
  }

  const productsList = productKeys.map((key) => {
    const item = getProduct(key)
    return {
      id: item.id,
      label: item.shortName,
      name: item.name,
      icon: iconMap[key] || FiLayers,
      accentColor: item.accentColor,
      version: 'v1.0.0 - Oficial',
      description: item.description,
      platforms: platformsMap[key] || ['Multiplataforma'],
      downloadUrl: item.downloadUrl,
    }
  })

  const [activeProduct, setActiveProduct] = useState(productsList[0])
  const ActiveIcon = activeProduct.icon

  return (
    <div className="download-page">
      {/* 1. HERO CARD HEADER CON SELECTOR DE TABS */}
      <section ref={heroRevealRef} className="download-wrapper reveal-on-scroll">
        <div className="download-hero-card">
          <div className="download-hero-header">
            <h1 className="download-title">Dónde descargar</h1>
            <p className="download-subtitle">
              Obtén las versiones oficiales de nuestras herramientas para todos tus dispositivos.
            </p>
          </div>

          <nav className="download-tabs-card" aria-label="Seleccionar producto para descargar">
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

      {/* 2. PRODUCT HERO CARD CON ANIMACIÓN DE CAMBIO */}
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
              <span className="platforms-label">Disponible para:</span>
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
                href={activeProduct.downloadUrl}
                className="product-download-btn"
                style={{ backgroundColor: activeProduct.accentColor }}
              >
                <FiDownloadCloud className="btn-icon" />
                <span>Descargar instalador oficial</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
