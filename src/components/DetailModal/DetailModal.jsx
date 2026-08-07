import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
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
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-btn-close"
          onClick={onClose}
          aria-label="Cerrar ventana"
        >
          <FiX />
        </button>

        {title && (
          <h2 id="modal-title-id" className="modal-title">
            {title}
          </h2>
        )}

        <div className="modal-body">
          {sections.map((sec, idx) => (
            <div key={idx} className="modal-section">
              {sec.subtitle && <h3 className="modal-subtitle">{sec.subtitle}</h3>}
              {sec.description && <p className="modal-description">{sec.description}</p>}
              {sec.linkText && (
                <a href={sec.linkHref || '#'} className="modal-link" style={{ color: linkColor }}>
                  {sec.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailModal
