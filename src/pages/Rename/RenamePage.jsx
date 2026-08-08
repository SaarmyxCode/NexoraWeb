import { useState } from 'react'
import { FiFolderPlus } from 'react-icons/fi'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'
import changelogData from '../../data/changelog.json'

// Componentes Generales
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'

// Componentes Exclusivos de Rename
import { RulePatternBuilder } from './components/RulePatternBuilder/RulePatternBuilder'

import './RenamePage.css'

export const RenamePage = () => {
  usePageTheme('rename')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const renameData = getProduct('rename') || {
    name: 'Nexora Rename',
    shortName: 'RENAME',
    accentColor: '#EAB308',
    description: 'Organiza grandes volúmenes de archivos.',
    mockup: '/mockups/NexoraRename.png',
    downloadUrl: '/descargar#rename',
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
    <div className="rename-page">
      {/* 1. Hero Principal */}
      <HeroCard id="rename-hero" product={renameData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="rename-hero"
        title={renameData.shortName}
        titleColor={renameData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={renameData.downloadUrl}
      />

      {/* 3. Registro de la Última Versión */}
      {changelogData.rename && <ChangelogCard changelogData={changelogData.rename} />}

      {/* 4. Simulación Interactiva de Reglas (Exclusivo) */}
      <div id="explorar">
        <RulePatternBuilder accentColor={renameData.accentColor} />
      </div>

      {/* 5. Estadísticas e Impacto */}
      {renameData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Rename y la eficiencia de tus archivos"
          linkText="Ver guía de patrones y reglas >"
          linkHref="#patrones"
          linkColor={renameData.accentColor}
          accentColor={renameData.accentColor}
          icon={FiFolderPlus}
          items={renameData.stats}
          onCardClick={handleOpenModal}
        />
      )}

      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={renameData.accentColor}
      />
    </div>
  )
}

export default RenamePage
