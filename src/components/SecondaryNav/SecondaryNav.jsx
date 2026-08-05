import './SecondaryNav.css'

export const SecondaryNav = ({
  title = 'Privacidad',
  titleColor = 'var(--color-text-heading)',
  links = [],
}) => {
  return (
    <div className="secondary-nav-wrapper">
      <div className="secondary-nav-container">
        {title && (
          <h2 className="secondary-nav-title" style={{ color: titleColor }}>
            {title}
          </h2>
        )}

        {links.length > 0 && (
          <nav className="secondary-nav-menu" aria-label="Navegación secundaria">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                onClick={link.onClick}
                className={`secondary-nav-link ${link.isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}
