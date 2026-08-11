import React, { useEffect } from 'react'
import { FiX, FiExternalLink } from 'react-icons/fi'
import { Card } from '../../atoms/Card/Card'
import { Button } from '../../atoms/Button/Button'
import './DetailModal.css'

export const DetailModal = ({
  isOpen,
  onClose,
  title,
  sections = [],
  linkColor = 'var(--color-primary)',
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title-id' : undefined}
    >
      <Card radius="2xl" className="modal-card" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="icon"
          size="sm"
          className="modal-btn-close"
          onClick={onClose}
          aria-label="Cerrar ventana"
        >
          <FiX />
        </Button>

        {title && (
          <h2 id="modal-title-id" className="modal-title">
            {title}
          </h2>
        )}

        <div className="modal-body">
          {sections.map((sec, idx) => (
            <div key={idx} className="modal-section">
              {/* Subtítulo / Encabezado de la Sección */}
              {sec.subtitle && <h3 className="modal-subtitle">{sec.subtitle}</h3>}

              {/* Opción A: Arreglo de Párrafos Múltiples */}
              {Array.isArray(sec.paragraphs)
                ? sec.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="modal-description">
                      {para}
                    </p>
                  ))
                : /* Opción B: Párrafo Único */
                  sec.description && <p className="modal-description">{sec.description}</p>}

              {/* Enlace o Botón Opcional */}
              {sec.linkText && (
                <a
                  href={sec.linkHref || '#'}
                  target={sec.linkHref?.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="modal-link"
                  style={{ color: linkColor }}
                >
                  <span>{sec.linkText}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default DetailModal
