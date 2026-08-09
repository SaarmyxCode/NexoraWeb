import React, { useState } from 'react'
import { FiCode } from 'react-icons/fi'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'
import changelogData from '../../data/changelog.json'

// Componentes Generales
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'

// Componente Exclusivo de Code
import { CodeEditorPreview } from './components/CodeEditorPreview/CodeEditorPreview'

import './CodePage.css'

export const CodePage = () => {
  usePageTheme('code')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const codeData = getProduct('code') || {
    name: 'Nexora Code',
    shortName: 'CODE',
    accentColor: '#2563EB',
    description: 'Entorno de edición y ejecución ligera de código.',
    mockup: '/mockups/NexoraCode.png',
    downloadUrl: '/descargar#code',
    stats: [],
  }

  const handleOpenModal = (item) => {
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
    <div className="code-page">
      {/* 1. Hero Principal */}
      <HeroCard id="code-hero" product={codeData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="code-hero"
        title={codeData.shortName}
        titleColor={codeData.accentColor}
        outlineBtnText="Explorar Editor"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={codeData.downloadUrl || '/descargar#code'}
      />

      {/* 3. Novedades y Historial de Versiones */}
      {changelogData.code && <ChangelogCard changelogData={changelogData.code} />}

      {/* 4. Editor e IDE Interactivo (Exclusivo) */}
      <div id="explorar">
        <CodeEditorPreview accentColor={codeData.accentColor} />
      </div>

      {/* 5. Rendimiento y Métricas Técnicas */}
      {codeData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Nexora Code y la velocidad de desarrollo"
          linkText="Ver benchmarks de rendimiento >"
          linkHref="#benchmarks"
          linkColor={codeData.accentColor}
          accentColor={codeData.accentColor}
          icon={FiCode}
          items={codeData.stats}
          onCardClick={handleOpenModal}
        />
      )}

      {/* Modal Interactivo de Detalle */}
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={codeData.accentColor}
      />
    </div>
  )
}

export default CodePage
