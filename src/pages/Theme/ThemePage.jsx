import { getProduct } from '../../utils/getProduct'
import { usePageTheme } from '../../hooks/usePageTheme'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'

// 🧩 Componentes Exclusivos de ThemePage
import changelogData from '../../data/changelog.json'
import { ChangelogCard } from './components/ChangelogCard/ChangelogCard'
import { ColorPaletteGrid } from './components/ColorPaletteGrid/ColorPaletteGrid'

import './ThemePage.css'

export const ThemePage = () => {
  usePageTheme('theme')

  const themeData = getProduct('theme')

  const latestRelease = {
    version: 'v2026.1.0',
    date: '7 de Agosto, 2026',
    changes: [
      'Librería centralizada de tokens en CSS puro',
      'Compatibilidad total con data-theme="dark|light"',
      'Múltiples paletas con acento personalizable por producto',
    ],
  }

  return (
    <div className="theme-page">
      {/* 1. Hero Principal */}
      <HeroCard
        id="theme-hero"
        title={themeData.shortName}
        titleColor={themeData.accentColor}
        imageSrc={themeData.mockup}
        imageAlt={`Banner de ${themeData.name}`}
      />

      {/* 2. SubHeader Flotante por Scroll */}
      <SubHeader
        targetHeroId="theme-hero"
        title={themeData.shortName}
        accentColor={themeData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#paleta"
        primaryBtnText="Descargar"
        primaryBtnHref={themeData.downloadUrl || '/descargar'}
      />

      {/* 3. Componente Exclusivo: Tarjeta de Novedades */}
      <div className="theme-page">
        {/* Pasa directamente la sección theme de tu JSON */}
        <ChangelogCard changelogData={changelogData.theme} />
      </div>

      {/* 4. Componente Exclusivo: Inspector de Paleta de Colores */}
      <div id="paleta">
        <ColorPaletteGrid accentColor={themeData.accentColor} />
      </div>

      {/* 5. Detalle Secundario */}
      {/* <HeroCard
        id="theme-detail"
        title="SISTEMA VISUAL"
        subtitle={themeData.description}
        titleColor={themeData.accentColor}
        imageSrc={themeData.mockup}
      /> */}

      {/* 6. Estadísticas e Impacto */}
      <FeatureStatsCard
        title="Theme y la eficiencia en la interfaz"
        accentColor={themeData.accentColor}
        items={themeData.stats}
      />
    </div>
  )
}

export default ThemePage
