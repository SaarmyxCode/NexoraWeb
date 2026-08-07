import { useState } from 'react'
import { FiMusic } from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './SongsPage.css'

export const SongsPage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  const songsData = getProduct('songs')

  const songsModalsData = [
    {
      title: 'Catálogo y Curaduría',
      sections: [
        {
          subtitle: 'Proceso de selección.',
          description:
            'Cada lista es filtrada manualmente evaluando BPM, rango dinámico e instrumentos para asegurar la atmósfera perfecta en cada actividad.',
          linkText: 'Explorar catálogo completo',
          linkHref: '#',
        },
      ],
    },
  ]

  const handleOpenModal = (_, index) => {
    const selectedModal = songsModalsData[index]
    if (selectedModal) {
      setModalState({
        isOpen: true,
        title: selectedModal.title,
        sections: selectedModal.sections,
      })
    }
  }

  return (
    <div className="songs-page">
      <HeroCard
        id="songs-hero"
        title={songsData.shortName}
        titleColor={songsData.accentColor}
        imageSrc={songsData.mockup}
        imageAlt={`Mockup de ${songsData.name}`}
      />
      <SubHeader
        targetHeroId="songs-hero"
        title={songsData.shortName}
        titleColor={songsData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={songsData.downloadUrl}
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver planes >"
        actionHref="#planes"
        actionColor={songsData.accentColor} // <-- Hereda el verde de Finance, azul de Songs, amarillo de Rename, etc.
        items={songsData.highlights}
      />
      <HeroCard
        id="songs-detail"
        title="CATÁLOGO"
        subtitle={songsData.description}
        titleColor={songsData.accentColor}
        imageSrc={songsData.mockup}
        imageAlt={`Demostración del catálogo de ${songsData.name}`}
      />
      <FeatureStatsCard
        title="Songs y nuestro impacto musical"
        linkText="Más información sobre la curaduría >"
        linkHref="#curaduria"
        linkColor={songsData.accentColor}
        accentColor={songsData.accentColor}
        icon={FiMusic}
        items={songsData.stats}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={songsData.accentColor}
      />
    </div>
  )
}

export default SongsPage
