import React from 'react'
import { Link } from 'react-router-dom'
import './SecondaryNav.css'

export const SecondaryNav = ({
  title,
  titleColor = 'var(--color-text-heading)',
  links = [],
  actionBtn, // { label: string, to?: string, href?: string, onClick?: fn, color?: string }
  isSticky = false,
  className = '',
}) => {
  return (
    <div className={`secondary-nav-wrapper ${isSticky ? 'is-sticky' : ''} ${className}`}>
      <div className="secondary-nav-container">
        {/* Título de la vista / sección */}
        {title && (
          <h2 className="secondary-nav-title" style={{ color: titleColor }}>
            {title}
          </h2>
        )}

        <div className="secondary-nav-content-right">
          {/* Menú de Enlaces Dinámicos */}
          {links.length > 0 && (
            <nav className="secondary-nav-menu" aria-label="Navegación secundaria">
              {links.map((link, index) => {
                const isRouterLink = link.to && !link.href
                const Tag = isRouterLink ? Link : 'a'
                const linkProps = isRouterLink ? { to: link.to } : { href: link.href || '#' }

                return (
                  <Tag
                    key={link.id || index}
                    {...linkProps}
                    onClick={link.onClick}
                    className={`secondary-nav-link ${link.isActive ? 'is-active' : ''}`}
                    aria-current={link.isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Tag>
                )
              })}
            </nav>
          )}

          {/* Botón de Acción Opcional (CTA) */}
          {actionBtn && (
            <div className="secondary-nav-action-container">
              {actionBtn.to ? (
                <Link
                  to={actionBtn.to}
                  className="secondary-nav-action-btn"
                  style={actionBtn.color ? { backgroundColor: actionBtn.color } : undefined}
                  onClick={actionBtn.onClick}
                >
                  {actionBtn.label}
                </Link>
              ) : (
                <a
                  href={actionBtn.href || '#'}
                  className="secondary-nav-action-btn"
                  style={actionBtn.color ? { backgroundColor: actionBtn.color } : undefined}
                  onClick={actionBtn.onClick}
                >
                  {actionBtn.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
