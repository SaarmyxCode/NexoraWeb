import React from 'react'
import './Changelog.css'

export const Changelog = ({ releases = [], serviceName }) => {
  return (
    <div className="changelog-container">
      {serviceName && (
        <header className="changelog-header-global">
          <h1 className="changelog-title">Historial de Cambios</h1>
          <p className="changelog-subtitle">
            Registro de actualizaciones, mejoras y correcciones para <strong>{serviceName}</strong>.
          </p>
        </header>
      )}

      <div className="changelog-releases-list">
        {releases.map((release, index) => (
          <article key={index} className="changelog-release">
            <header className="changelog-release-header">
              <div className="changelog-version-tag">
                <h2>v{release.version}</h2>
                {release.isLatest && <span className="badge-latest">Última versión</span>}
              </div>
              <time className="changelog-date">{release.date}</time>
            </header>

            {release.description && <p className="changelog-description">{release.description}</p>}

            <div className="changelog-sections">
              {release.changes.map((section, sIdx) => {
                const tagTypeClass = `tag-${section.type.toLowerCase().trim().replace(/\s+/g, '-')}`

                return (
                  <div key={sIdx} className="changelog-group">
                    <span className={`tag-type ${tagTypeClass}`}>{section.type}</span>
                    <ul className="changelog-list">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
