import React from 'react'
import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig.json'
import './SecondaryNav.css'

export const SecondaryNav = ({
  title,
  titleColor = 'var(--color-text-heading)',
  links = [],
  actionBtn, // { label: string, to?: string, href?: string, onClick?: fn, color?: string }
  isSticky = false,
  className = '',
  accentColor,
}) => {
  // Permite sobreescribir o usar por defecto desde siteConfig
  const navTitle = title || siteConfig.siteName
  const activeAccentColor = accentColor || titleColor

  return (
    <div className={`secondary-nav-wrapper ${isSticky ? 'is-sticky' : ''} ${className}`}>
      <div className="secondary-nav-container">
        {/* Título de la vista / sección */}
        {navTitle && (
          <h2 className="secondary-nav-title" style={{ color: activeAccentColor }}>
            {navTitle}
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
                const isLinkActive = link.isActive

                return (
                  <Tag
                    key={link.id || index}
                    {...linkProps}
                    onClick={link.onClick}
                    className={`secondary-nav-link ${isLinkActive ? 'is-active' : ''}`}
                    style={
                      isLinkActive && activeAccentColor
                        ? {
                            '--nav-link-accent': activeAccentColor,
                            color: activeAccentColor,
                          }
                        : undefined
                    }
                    aria-current={isLinkActive ? 'page' : undefined}
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
                  style={{
                    backgroundColor: actionBtn.color || activeAccentColor,
                  }}
                  onClick={actionBtn.onClick}
                >
                  {actionBtn.label}
                </Link>
              ) : (
                <a
                  href={actionBtn.href || '#'}
                  className="secondary-nav-action-btn"
                  style={{
                    backgroundColor: actionBtn.color || activeAccentColor,
                  }}
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
