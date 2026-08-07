import { useState } from 'react'
import { FiFolderPlus } from 'react-icons/fi'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './RenamePage.css'

export const RenamePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const accentYellow = '#EAB308'

  const renameHighlights = [
    {
      id: 'highlight-1',
      title: 'RENOMBRADO MASIVO EN SEGUNDOS',
      titleColor: accentYellow,
      imageSrc: '/MacBookMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'REGLAS Y PATRONES PERSONALIZADOS',
      titleColor: accentYellow,
      imageSrc: '/MacBookMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'PREVISUALIZACIÓN EN TIEMPO REAL',
      titleColor: accentYellow,
      imageSrc: '/MacBookMockup.png',
    },
  ]

  const renameModalsData = [
    {
      title: 'Velocidad de Procesamiento',
      sections: [
        {
          subtitle: 'Motor multi-hilo.',
          description:
            'Aprovecha los núcleos de tu procesador para renombrar miles de archivos en un solo paso.',
          linkText: 'Guía de optimización en lote',
          linkHref: '#',
        },
      ],
    },
  ]

  const renameStatsData = [
    {
      id: 'stat-1',
      prefix: 'Procesamiento de',
      highlight: '1,000 archivos por segundo',
      suffix: 'en lotes masivos sin consumir recursos de más.',
    },
    {
      id: 'stat-2',
      prefix: 'Reducción de un',
      highlight: '95% del tiempo',
      suffix: 'invertido en la organización manual de carpetas.',
    },
  ]

  const handleOpenModal = (_, index) => {
    const selectedModal = renameModalsData[index]
    if (selectedModal) {
      setModalState({
        isOpen: true,
        title: selectedModal.title,
        sections: selectedModal.sections,
      })
    }
  }

  return (
    <div className="rename-page">
      <HeroCard
        id="rename-hero"
        title="RENAME"
        titleColor={accentYellow}
        imageSrc="/MacBookMockup.png"
      />
      <SubHeader
        targetHeroId="rename-hero"
        title="RENAME"
        titleColor={accentYellow}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref="#descargar"
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver documentación >"
        actionHref="#docs"
        items={renameHighlights}
      />
      <HeroCard
        id="rename-detail"
        title="AUTOMATIZACIÓN"
        subtitle="Organiza grandes volúmenes de archivos, fotos y documentos al instante con reglas compuestas."
        titleColor={accentYellow}
        imageSrc="/MacBookMockup.png"
      />
      <FeatureStatsCard
        title="Rename y la eficiencia de tus archivos"
        linkText="Ver guía de patrones y reglas >"
        linkHref="#patrones"
        linkColor={accentYellow}
        accentColor={accentYellow}
        icon={FiFolderPlus}
        items={renameStatsData}
        onCardClick={handleOpenModal}
      />

      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={accentYellow}
      />
    </div>
  )
}

export default RenamePage
