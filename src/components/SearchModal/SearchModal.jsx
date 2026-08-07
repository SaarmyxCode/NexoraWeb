import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi'
import './SearchModal.css'

export const SearchModal = ({ isOpen, onClose, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const searchIndex = [
    {
      label: 'Nexora Theme',
      path: '/theme',
      keywords: 'theme temas vscode diseño UI tokens visual alto contraste',
      description: 'Sistema visual y librería de tokens dinámicos',
    },
    {
      label: 'Nexora Songs',
      path: '/songs',
      keywords: 'songs musica reproductor playlist deep work productividad',
      description: 'Catálogo de música curada para concentración',
    },
    {
      label: 'Nexora Rename',
      path: '/rename',
      keywords: 'rename renombrar archivos lote automatizacion exif id3',
      description: 'Automatización y renombrado masivo en lote',
    },
    {
      label: 'Nexora Finance',
      path: '/finance',
      keywords: 'finance finanzas dinero presupuestos zero-knowledge ahorro',
      description: 'Gestión financiera privada y local',
    },
    {
      label: 'Historial de Novedades',
      path: '/changelog',
      keywords: 'novedades changelog actualizaciones cambios versiones release',
      description: 'Registro global de versiones y mejoras',
    },
    {
      label: 'Centro de Soporte',
      path: '/soporte',
      keywords: 'soporte ayuda preguntas frecuentes faq asistencia',
      description: 'Guías de uso y asistencia técnica',
    },
    {
      label: 'Centro de Descargas',
      path: '/descargar',
      keywords: 'descargar download instalador macos windows linux web apps',
      description: 'Consigue los instaladores oficiales',
    },
  ]

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80)
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredResults =
    searchQuery.trim() === ''
      ? searchIndex.slice(0, 4)
      : searchIndex.filter(
          (item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.keywords.toLowerCase().includes(searchQuery.toLowerCase()),
        )

  const handleSelectResult = (path) => {
    navigate(path)
    onClose()
    setSearchQuery('')
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <FiSearch className="search-input-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Buscar en Nexora..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="search-close-btn"
            onClick={onClose}
            aria-label="Cerrar búsqueda"
          >
            <FiX />
          </button>
        </div>

        <div className="search-results-container">
          <span className="search-section-label">
            {searchQuery.trim() === '' ? 'Accesos Rápidos' : 'Resultados'}
          </span>

          {filteredResults.length > 0 ? (
            <ul className="search-results-list">
              {filteredResults.map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    className="search-result-item"
                    onClick={() => handleSelectResult(item.path)}
                  >
                    <div className="search-result-info">
                      <span className="search-result-title">{item.label}</span>
                      <span className="search-result-desc">{item.description}</span>
                    </div>
                    <FiArrowRight className="search-result-arrow" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="search-no-results">
              Sin resultados para "<strong>{searchQuery}</strong>"
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
