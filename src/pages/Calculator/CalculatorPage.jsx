import React, { useState } from 'react'
import { CiCalculator1 } from 'react-icons/ci'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'
import changelogData from '../../data/changelog.json'

// Componentes Generales
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'

// Componente Exclusivo
import { CalculatorSimulator } from './components/CalculatorSimulator/CalculatorSimulator'

import './CalculatorPage.css'

export const CalculatorPage = () => {
  usePageTheme('calculator')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const calcData = getProduct('calculator') || {
    name: 'Nexora Calculator',
    shortName: 'CALCULATOR',
    accentColor: '#64748B',
    description: 'Calculadora científica y de alta precisión con historial continuo.',
    mockup: '/mockups/NexoraCalculator.png',
    downloadUrl: '/descargar#calculator',
    highlights: [],
    stats: [],
  }

  const handleOpenModal = (item, index) => {
    setModalState({
      isOpen: true,
      title: item.highlight || 'Detalles de la característica',
      sections: [
        {
          subtitle: `${item.prefix || ''} ${item.highlight || ''}`,
          description: `${item.prefix || ''} ${item.highlight || ''} ${item.suffix || ''}`,
          linkText: 'Más información',
          linkHref: '#',
        },
      ],
    })
  }

  return (
    <div className="calculator-page">
      {/* 1. Hero Principal */}
      <HeroCard id="calc-hero" product={calcData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="calc-hero"
        title={calcData.shortName}
        titleColor={calcData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={calcData.downloadUrl}
      />

      {/* 3. Registro de Novedades */}
      {changelogData.calculator && <ChangelogCard changelogData={changelogData.calculator} />}

      {/* 4. Simulador Interactivo */}
      <div id="explorar">
        <CalculatorSimulator accentColor={calcData.accentColor} />
      </div>

      {/* 5. Secciones Destacadas */}
      {calcData.highlights?.length > 0 && (
        <HighlightSection
          title="Mira lo más destacado."
          actionText="Ver documentación técnica >"
          actionHref="#docs"
          actionColor={calcData.accentColor}
          items={calcData.highlights}
        />
      )}

      {/* 6. Detalle del Producto */}
      <HeroCard
        id="calc-detail"
        title="PRECISIÓN MATEMÁTICA"
        subtitle={calcData.description}
        titleColor={calcData.accentColor}
        imageSrc={calcData.mockup}
        imageAlt={`Demostración de ${calcData.name}`}
      />

      {/* 7. Estadísticas e Impacto */}
      {calcData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Nexora Calculator y la precisión de datos"
          linkText="Ver benchmarks de precisión >"
          linkHref="#benchmarks"
          linkColor={calcData.accentColor}
          accentColor={calcData.accentColor}
          icon={CiCalculator1}
          items={calcData.stats}
          onCardClick={handleOpenModal}
        />
      )}

      {/* Modal de Detalle */}
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={calcData.accentColor}
      />
    </div>
  )
}

export default CalculatorPage
