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
import { useReveal } from '../../hooks/useReveal'
import './DownloadPage.css'

export const DownloadPage = () => {
  const heroRevealRef = useReveal()

  const products = [
    {
      id: 'theme',
      label: 'Theme',
      icon: FiLayers,
      accentColor: '#E11F2F',
      version: 'v0.0.0 - Fase Beta',
      description:
        'Sistema visual completo, tokens CSS dinámicos y componentes de UI para un diseño unificado y de alto contraste.',
      platforms: ['React / Vite', 'CSS Tokens', 'Tailwind Config'],
      downloadUrl: '#download-theme',
    },
    {
      id: 'songs',
      label: 'Songs',
      icon: FiMusic,
      accentColor: '#2563EB',
      version: 'v0.0.0 - Fase Beta',
      description:
        'Listas de reproducción y catálogo musical curado en alta fidelidad para acompañar tus sesiones de trabajo.',
      platforms: ['Web App', 'Desktop Client', 'Mobile App'],
      downloadUrl: '#download-songs',
    },
    {
      id: 'rename',
      label: 'Rename',
      icon: FiFolderPlus,
      accentColor: '#EAB308',
      version: 'v0.0.0 - Fase Beta',
      description:
        'Herramienta de renombrado masivo de archivos en lote con soporte para reglas automáticas y metadatos.',
      platforms: ['Windows (.exe)', 'macOS (.dmg)', 'Linux (.AppImage)'],
      downloadUrl: '#download-rename',
    },
    {
      id: 'finance',
      label: 'Finance',
      icon: FiTrendingUp,
      accentColor: '#10B981',
      version: 'v0.0.0 - Fase Beta',
      description:
        'Gestor de presupuestos, balances contables y proyecciones de gasto con almacenamiento local encriptado.',
      platforms: ['Windows (.exe)', 'macOS (.dmg)', 'Web Version'],
      downloadUrl: '#download-finance',
    },
    {
      id: 'vault',
      label: 'NexoraVault',
      icon: FiShield,
      accentColor: '#8B5CF6',
      version: 'v0.0.0 - Fase Beta',
      description:
        'Bóveda de credenciales y claves con cifrado local de cero conocimiento para máxima seguridad.',
      platforms: ['Windows', 'macOS', 'Linux'],
      downloadUrl: '#download-vault',
    },
  ]

  const [activeProduct, setActiveProduct] = useState(products[0])
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
            {products.map((item) => {
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
                <h2 className="product-hero-title">{activeProduct.label}</h2>
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
                <span>Descargar para esta plataforma</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
