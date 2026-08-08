import React, { useState } from 'react'
import { FiTrendingUp } from 'react-icons/fi'
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
import { BudgetDashboard } from './components/BudgetDashboard/BudgetDashboard'

import './FinancePage.css'

export const FinancePage = () => {
  usePageTheme('finance')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const financeData = getProduct('finance') || {
    name: 'Nexora Finance',
    shortName: 'FINANCE',
    accentColor: 'var(--color-finance-accent)',
    description: 'Visualiza el estado de tus finanzas en una sola pantalla.',
    mockup: '/mockups/NexoraFinance.png',
    downloadUrl: '/descargar#finance',
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
    <div className="finance-page">
      {/* 1. Hero Principal */}
      <HeroCard id="finance-hero" product={financeData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="finance-hero"
        title={financeData.shortName}
        titleColor={financeData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={financeData.downloadUrl}
      />

      {/* 3. Registro de la Última Versión */}
      {changelogData.finance && <ChangelogCard changelogData={changelogData.finance} />}

      {/* 4. Dashboard Interactivo de Presupuestos (Exclusivo) */}
      <div id="explorar">
        <BudgetDashboard accentColor={financeData.accentColor} />
      </div>

      {/* 5. Secciones Destacadas */}
      {financeData.highlights?.length > 0 && (
        <HighlightSection
          title="Mira lo más destacado."
          actionText="Ver documentación >"
          actionHref="#docs"
          actionColor={financeData.accentColor}
          items={financeData.highlights}
        />
      )}

      {/* 6. Detalle del Producto */}
      <HeroCard
        id="finance-detail"
        title="CONTROL FINANCIERO"
        subtitle={financeData.description}
        titleColor={financeData.accentColor}
        imageSrc={financeData.mockup}
        imageAlt={`Demostración de ${financeData.name}`}
      />

      {/* 7. Estadísticas e Impacto */}
      {financeData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Finance y la claridad de tu economía"
          linkText="Ver reporte de privacidad Zero-Knowledge >"
          linkHref="/privacidad#seguridad"
          linkColor={financeData.accentColor}
          accentColor={financeData.accentColor}
          icon={FiTrendingUp}
          items={financeData.stats}
          onCardClick={handleOpenModal}
        />
      )}

      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={financeData.accentColor}
      />
    </div>
  )
}

export default FinancePage
