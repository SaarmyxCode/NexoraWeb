import React, { useState } from 'react'
import { activeProducts } from '../../data'
import changelogData from '../../data/changelog.json'
import { usePageTheme } from '../../hooks/usePageTheme'
import { SecondaryNav } from '../../components/SecondaryNav/SecondaryNav'
import { ChangelogCard } from './components/ChangelogCard'
import { AnimatedTabContent } from '../../components/Animated/AnimatedTabContent'
import './ChangelogPage.css'

export const ChangelogPage = () => {
  usePageTheme('changelog')

  // 1. Obtenemos únicamente las secciones del changelog para productos ACTIVOS (enabled: true)
  const availableSections = activeProducts
    .map((product) => {
      const data = changelogData[product.id]
      if (!data) return null

      return {
        id: product.id,
        title: product.shortName || product.name,
        accentColor: product.accentColor,
        ...data,
      }
    })
    .filter(Boolean)

  // Fallback seguro en caso de que activeProducts esté vacío o no coincida ninguna clave
  const [activeTab, setActiveTab] = useState(availableSections[0]?.id || 'ui')

  // Sección seleccionada actualmente
  const currentSection = availableSections.find((s) => s.id === activeTab) || availableSections[0]

  // 2. Construcción dinámica de los enlaces para el SecondaryNav
  const changelogNavLinks = availableSections.map((section) => ({
    id: section.id,
    label: section.title,
    isActive: activeTab === section.id,
    onClick: (e) => {
      e.preventDefault()
      setActiveTab(section.id)
    },
  }))

  if (availableSections.length === 0) return null

  return (
    <div className="changelog-page">
      {/* Navegación secundaria dinámicamente filtrada por productos habilitados */}
      <SecondaryNav title="Novedades" links={changelogNavLinks} isSticky={true} />

      {/* Contenido animado al cambiar de pestaña */}
      {currentSection && (
        <AnimatedTabContent activeKey={currentSection.id}>
          <ChangelogCard section={currentSection} changelogData={currentSection} />
        </AnimatedTabContent>
      )}
    </div>
  )
}

export default ChangelogPage
