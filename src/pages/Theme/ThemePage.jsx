import React from 'react'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'

// Componentes Exclusivos de ThemePage
import changelogData from '../../data/changelog.json'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'
import { ColorPaletteGrid } from './components/ColorPaletteGrid/ColorPaletteGrid'

import './ThemePage.css'

export const ThemePage = () => {
  usePageTheme('theme')

  const themeData = getProduct('theme') || {
    name: 'Nexora Theme',
    shortName: 'Theme',
    accentColor: '#E11F2F',
    description: 'Sistema visual completo.',
    mockup: '/mockups/NexoraTheme.png',
    downloadUrl: '/descargar#theme',
    stats: [],
  }

  return (
    <div className="theme-page">
      {/* 1. Hero Principal */}
      <HeroCard id="theme-hero" product={themeData} />

      {/* 2. SubHeader Flotante por Scroll */}
      <SubHeader
        targetHeroId="theme-hero"
        title={themeData.shortName}
        titleColor={themeData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#paleta"
        primaryBtnText="Descargar"
        primaryBtnHref={themeData.downloadUrl || '/descargar'}
      />

      {/* 3. Componente Exclusivo: Tarjeta de Novedades */}
      <div className="theme-page-changelog">
        {changelogData.theme && <ChangelogCard changelogData={changelogData.theme} />}
      </div>

      {/* 4. Componente Exclusivo: Inspector de Paleta de Colores */}
      <div id="paleta">
        <ColorPaletteGrid accentColor={themeData.accentColor} />
      </div>

      {/* 5. Estadísticas e Impacto */}
      {themeData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Theme y la eficiencia en la interfaz"
          accentColor={themeData.accentColor}
          items={themeData.stats}
        />
      )}
    </div>
  )
}

export default ThemePage
