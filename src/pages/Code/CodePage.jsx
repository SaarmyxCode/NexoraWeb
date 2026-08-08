import React, { useState } from 'react'
import { FiCode } from 'react-icons/fi'
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
import { CodeEditorPreview } from './components/CodeEditorPreview/CodeEditorPreview'

import './CodePage.css'

export const CodePage = () => {
  usePageTheme('code')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const codeData = getProduct('code') || {
    name: 'Nexora Code',
    shortName: 'Code',
    accentColor: '#0071E3',
    description: 'Entorno de edición y ejecución ligera de código.',
    mockup: '/mockups/NexoraCode.png',
    downloadUrl: '/descargar#code',
    highlights: [],
    stats: [],
  }

  const codeModalsData = [
    {
      title: 'Compilador de Design Tokens',
      sections: [
        {
          subtitle: 'Integración nativa con Nexora Theme.',
          description:
            'Alinea tus variables CSS y componentes sin necesidad de configurar compiladores pesados.',
          linkText: 'Ver documentación del compilador',
          linkHref: '#',
        },
      ],
    },
  ]

  const handleOpenModal = (item, index) => {
    const selectedModal = codeModalsData[index] || {
      title: item.highlight || 'Detalles de la característica',
      sections: [
        {
          subtitle: `${item.prefix || ''} ${item.highlight || ''}`,
          description: `${item.prefix || ''} ${item.highlight || ''} ${item.suffix || ''}`,
          linkText: 'Más información',
          linkHref: '#',
        },
      ],
    }

    setModalState({
      isOpen: true,
      title: selectedModal.title,
      sections: selectedModal.sections,
    })
  }

  return (
    <div className="code-page">
      {/* 1. Hero Principal */}
      <HeroCard
        id="code-hero"
        title={codeData.shortName}
        titleColor={codeData.accentColor}
        imageSrc={codeData.mockup}
        imageAlt={`Mockup de ${codeData.name}`}
      />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="code-hero"
        title={codeData.shortName}
        titleColor={codeData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={codeData.downloadUrl}
      />

      {/* 3. Registro de la Última Versión */}
      {changelogData.code && <ChangelogCard changelogData={changelogData.code} />}

      {/* 4. Editor Interactivo (Exclusivo) */}
      <div id="explorar">
        <CodeEditorPreview accentColor={codeData.accentColor} />
      </div>

      {/* 5. Secciones Destacadas */}
      {codeData.highlights?.length > 0 && (
        <HighlightSection
          title="Mira lo más destacado."
          actionText="Ver documentación de Nexora Code >"
          actionHref="#docs"
          actionColor={codeData.accentColor}
          items={codeData.highlights}
        />
      )}

      {/* 6. Detalle del Producto */}
      <HeroCard
        id="code-detail"
        title="ENTORNO DE CÓDIGO"
        subtitle={codeData.description}
        titleColor={codeData.accentColor}
        imageSrc={codeData.mockup}
        imageAlt={`Demostración de ${codeData.name}`}
      />

      {/* 7. Estadísticas e Impacto */}
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

      {/* Modal de Detalle */}
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
