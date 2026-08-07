import { useState } from 'react'
import { getProduct } from '../../utils/getProduct'
import { usePageTheme } from '../../hooks/usePageTheme'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import './ThemePage.css'

export const ThemePage = () => {
  // Configura el modo del producto (ej: "dark") en Header, Body y Footer mientras estés aquí
  usePageTheme('theme')

  const themeData = getProduct('theme')

  return (
    <div className="theme-page">
      <HeroCard
        id="theme-hero"
        title={themeData.shortName}
        titleColor={themeData.accentColor}
        imageSrc={themeData.mockup}
      />
      <SubHeader
        targetHeroId="theme-hero"
        title={themeData.shortName}
        titleColor={themeData.accentColor}
      />
      <HeroCard
        id="theme-detail"
        title="SISTEMA VISUAL"
        subtitle={themeData.description}
        titleColor={themeData.accentColor}
        imageSrc={themeData.mockup}
      />
      <FeatureStatsCard
        title="Theme y la eficiencia en la interfaz"
        accentColor={themeData.accentColor}
        items={themeData.stats}
      />
    </div>
  )
}

export default ThemePage
