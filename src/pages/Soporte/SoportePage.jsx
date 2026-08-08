import React from 'react'
import { usePageTheme } from '../../hooks/usePageTheme'
import { SupportHeroCard } from './components/SupportHeroCard/SupportHeroCard'
import { SupportProductsGrid } from './components/SupportProductsGrid/SupportProductsGrid'
import { SupportQuickFaqGrid } from './components/SupportQuickFaqGrid/SupportQuickFaqGrid'
import { SupportFeatureGrid } from './components/SupportFeatureGrid/SupportFeatureGrid'
import './SoportePage.css'

export const SoportePage = () => {
  usePageTheme('soporte')

  return (
    <div className="soporte-page">
      {/* 1. Hero Central */}
      <SupportHeroCard />

      {/* 2. Grilla de Productos (Automáticamente filtra los habilitados) */}
      <SupportProductsGrid />

      {/* 3. Accesos Rápidos a FAQ */}
      <SupportQuickFaqGrid />

      {/* 4. Bloques Informativos y Aviso de Seguridad */}
      <SupportFeatureGrid />
    </div>
  )
}

export default SoportePage
