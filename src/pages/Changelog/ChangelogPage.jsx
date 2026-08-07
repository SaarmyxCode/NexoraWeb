import React, { useState } from 'react'
import { getChangelogSections } from '../../utils/getChangelog'
import { SecondaryNav } from '../../components/SecondaryNav/SecondaryNav'
import { useReveal } from '../../hooks/useReveal'
import './ChangelogPage.css'

export const ChangelogPage = () => {
  const heroRevealRef = useReveal()

  // Carga ultra-segura de secciones desde changelog.json
  const changelogSections = getChangelogSections()

  const [activeTab, setActiveTab] = useState(changelogSections[0]?.id || 'theme')

  const currentSection = changelogSections.find((s) => s.id === activeTab) || changelogSections[0]
  const ActiveIcon = currentSection.icon

  const changelogNavLinks = changelogSections.map((section) => ({
    id: section.id,
    label: section.title,
    isActive: activeTab === section.id,
    onClick: (e) => {
      e.preventDefault()
      setActiveTab(section.id)
    },
  }))

  return (
    <div className="changelog-page">
      <SecondaryNav
        title="Novedades"
        titleColor="var(--color-text-heading)"
        links={changelogNavLinks}
        isSticky={true}
      />

      {/* HERO ÚNICO CON ANIMACIÓN DE ENTRADA POR CLAVE */}
      <section ref={heroRevealRef} className="changelog-wrapper reveal-on-scroll">
        <div key={currentSection.id} className="changelog-hero-card animate-tab-change">
          <div
            className="changelog-version-badge"
            style={{
              backgroundColor: `${currentSection.badgeColor}15`,
              color: currentSection.badgeColor,
            }}
          >
            {currentSection.version}
          </div>

          <h1 className="changelog-hero-title">{currentSection.title}</h1>

          <span className="changelog-updated-date">{currentSection.date}</span>

          <div className="changelog-hero-body">
            <p className="changelog-hero-text">{currentSection.text}</p>

            <div className="changelog-icon-container">
              <div
                className="changelog-icon-badge"
                style={{
                  backgroundColor: `${currentSection.badgeColor}15`,
                  color: currentSection.badgeColor,
                }}
              >
                <ActiveIcon className="changelog-icon" />
              </div>
            </div>

            {currentSection.subtext && (
              <p className="changelog-hero-text">{currentSection.subtext}</p>
            )}

            {/* Lista detallada de cambios de la versión */}
            {currentSection.changes.length > 0 && (
              <div className="changelog-items-container">
                <h3 className="changelog-items-title">Detalles de la versión</h3>
                <ul className="changelog-items-list">
                  {currentSection.changes.map((change, idx) => (
                    <li
                      key={idx}
                      className="changelog-item-line"
                      style={{ '--bullet-color': currentSection.badgeColor }}
                    >
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="changelog-hero-actions">
              <a
                href="#reportar"
                className="changelog-action-link"
                style={{ color: currentSection.badgeColor }}
              >
                ¿Encontraste un problema? Reporta un error en el centro de soporte &gt;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChangelogPage
