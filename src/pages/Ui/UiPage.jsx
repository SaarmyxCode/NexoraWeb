import React from 'react'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'

// Componente Exclusivo: Paleta de Colores
import { ColorPaletteGrid } from './components/ColorPaletteGrid/ColorPaletteGrid'
import changelogData from '../../data/changelog.json'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'

import './UiPage.css'

export const UiPage = () => {
  usePageTheme('ui')

  const uiData = getProduct('ui') || {
    name: 'Nexora UI',
    shortName: 'UI',
    accentColor: '#E11F2F',
    description: 'Sistema de diseño y especificación visual.',
    mockup: '/mockups/NexoraUI.png',
    downloadUrl: '/descargar#ui',
    highlights: [],
    stats: [],
  }

  return (
    <div className="ui-page">
      {/* 1. Hero Principal */}
      <HeroCard id="ui-hero" product={uiData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="ui-hero"
        title={uiData.shortName}
        titleColor={uiData.accentColor}
        outlineBtnText="Explorar Guía"
        outlineBtnHref="#paleta"
        primaryBtnText="Descargar Tokens"
        primaryBtnHref={uiData.downloadUrl || '/descargar'}
      />

      {/* 3. Changelog de Especificaciones Visuales */}
      {changelogData.ui && <ChangelogCard changelogData={changelogData.ui} />}

      {/* 4. Inspector Interactivo de Paletas y Design Tokens */}
      <div id="paleta">
        <ColorPaletteGrid accentColor={uiData.accentColor} />
      </div>

      {/* 5. Secciones Destacadas */}
      {uiData.highlights?.length > 0 && (
        <HighlightSection
          title="Principios de Diseño Nexora UI."
          actionText="Ver documentación de componentes >"
          actionHref="#docs"
          actionColor={uiData.accentColor}
          items={uiData.highlights}
        />
      )}

      {/* 6. Estadísticas e Impacto Visual */}
      {uiData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Nexora UI y la consistencia de interfaz"
          accentColor={uiData.accentColor}
          items={uiData.stats}
        />
      )}
    </div>
  )
}

export default UiPage
