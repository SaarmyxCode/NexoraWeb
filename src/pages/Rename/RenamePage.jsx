import { useState } from 'react'
import { FiFolderPlus } from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { usePageTheme } from '../../hooks/usePageTheme'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './RenamePage.css'

export const RenamePage = () => {
  // Aplica el modo (dark/light) definido en products.json para Rename a TODA la web
  usePageTheme('rename')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const renameData = getProduct('rename')

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
    {
      title: 'Reglas y Patrones Avanzados',
      sections: [
        {
          subtitle: 'Automatización de nombres.',
          description:
            'Combina metadatos EXIF, fechas de creación e índices numéricos para estructurar tus archivos.',
          linkText: 'Ver documentación de patrones',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Previsualización e Historial',
      sections: [
        {
          subtitle: 'Cero margen de error.',
          description:
            'Visualiza los cambios antes de aplicar el renombrado definitivo con opción de deshacer.',
          linkText: 'Manual de seguridad de datos',
          linkHref: '#',
        },
      ],
    },
  ]

  const handleOpenModal = (item, index) => {
    const selectedModal = renameModalsData[index] || {
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
    <div className="rename-page">
      <HeroCard
        id="rename-hero"
        title={renameData.shortName}
        titleColor={renameData.accentColor}
        imageSrc={renameData.mockup}
        imageAlt={`Mockup de ${renameData.name}`}
      />
      <SubHeader
        targetHeroId="rename-hero"
        title={renameData.shortName}
        titleColor={renameData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={renameData.downloadUrl}
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver documentación >"
        actionHref="#docs"
        actionColor={renameData.accentColor}
        items={renameData.highlights}
      />
      <HeroCard
        id="rename-detail"
        title="AUTOMATIZACIÓN"
        subtitle={renameData.description}
        titleColor={renameData.accentColor}
        imageSrc={renameData.mockup}
        imageAlt={`Demostración de automatización de ${renameData.name}`}
      />
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
