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

  const renameHighlights = [
    {
      id: 'highlight-1',
      title: 'RENOMBRADO MASIVO EN SEGUNDOS',
      titleColor: '#EAB308',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'REGLAS Y PATRONES PERSONALIZADOS',
      titleColor: '#EAB308',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'PREVISUALIZACIÓN EN TIEMPO REAL',
      titleColor: '#EAB308',
      imageSrc: '/IphonesMockup.png',
    },
  ]

  const renameModalsData = [
    {
      title: 'Velocidad de Procesamiento',
      sections: [
        {
          subtitle: 'Motor multi-hilo.',
          description:
            'Arovecha los núcleos de tu procesador para renombrar miles de archivos en un solo paso, eliminando cuellos de botella.',
          linkText: 'Guía de optimización en lote',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Ahorro de Tiempo',
      sections: [
        {
          subtitle: 'Plantillas reutilizables.',
          description:
            'Guarda reglas complejas (fechas, contadores, prefijos, reemplazo de caracteres) y aplícalas con un solo clic.',
          linkText: 'Ver biblioteca de reglas',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Soporte Universal',
      sections: [
        {
          subtitle: 'Formatos soportados.',
          description:
            'Lee metadatos EXIF en fotografías, etiquetas ID3 en audio y metadatos de documentos PDF de forma nativa.',
          linkText: 'Lista completa de formatos',
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
    {
      id: 'stat-3',
      prefix: 'Soporte completo para',
      highlight: 'más de 50 formatos',
      suffix: 'de documentos, imágenes y ejecutables.',
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
        titleColor="#EAB308"
        imageSrc="/IphonesMockup.png"
      />
      <SubHeader
        targetHeroId="rename-hero"
        title="RENAME"
        titleColor="#EAB308"
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
        titleColor="#EAB308"
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Rename y la eficiencia de tus archivos"
        linkText="Ver guía de patrones y reglas >"
        linkHref="#patrones"
        linkColor="#EAB308"
        accentColor="#EAB308"
        icon={FiFolderPlus}
        items={renameStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor="#EAB308"
      />
    </div>
  )
}
