import React, { useState } from 'react'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'

// Componentes Generales Reutilizables
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'
import changelogData from '../../data/changelog.json'

// Componente Exclusivo e Interactivo de UI
import { DesignSystemShowcase } from './components/DesignSystemShowcase/DesignSystemShowcase'

import './UiPage.css'

export const UiPage = () => {
  usePageTheme('ui')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  const uiData = getProduct('ui') || {
    name: 'Nexora UI',
    shortName: 'UI',
    accentColor: '#E11F2F',
    description: 'Sistema de diseño y especificación visual del ecosistema.',
    mockup: '/mockups/NexoraUI.png',
    downloadUrl: '/descargar#ui',
    stats: [],
  }

  const handleOpenModal = (item) => {
    setModalState({
      isOpen: true,
      title: item.highlight || 'Detalles de la especificación',
      sections: [
        {
          subtitle: `${item.prefix || ''} ${item.highlight || ''}`,
          description: `${item.prefix || ''} ${item.highlight || ''} ${item.suffix || ''}`,
          linkText: 'Ver documentación de tokens',
          linkHref: '#explorar',
        },
      ],
    })
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
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar Tokens"
        primaryBtnHref={uiData.downloadUrl || '/descargar'}
      />

      {/* 3. Novedades y Versiones del Sistema Visual */}
      {changelogData.ui && <ChangelogCard changelogData={changelogData.ui} />}

      {/* 4. Showcase Interactivo del Design System (Exclusivo) */}
      <div id="explorar">
        <DesignSystemShowcase accentColor={uiData.accentColor} />
      </div>

      {/* 5. Métricas de Rendimiento Visual */}
      {uiData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Nexora UI y la consistencia de interfaz"
          accentColor={uiData.accentColor}
          items={uiData.stats}
          onCardClick={handleOpenModal}
        />
      )}

      {/* Modal Interactivo de Detalle */}
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={uiData.accentColor}
      />
    </div>
  )
}

export default UiPage
