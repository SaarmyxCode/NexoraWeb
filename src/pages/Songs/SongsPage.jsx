import { useState } from 'react'
import { FiMusic } from 'react-icons/fi'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './SongsPage.css'

export const SongsPage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const accentBlue = '#2563EB'

  const songsHighlights = [
    {
      id: 'highlight-1',
      title: 'PLAYLISTS CURADAS A MEDIDA',
      titleColor: accentBlue,
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'ORGANIZACIÓN POR GÉNERO Y MOOD',
      titleColor: accentBlue,
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'SINCRONIZACIÓN MULTIPLATAFORMA',
      titleColor: accentBlue,
      imageSrc: '/IphonesMockup.png',
    },
  ]

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

  const songsStatsData = [
    {
      id: 'stat-1',
      prefix: 'Catálogo con más de',
      highlight: '50,000 canciones curadas',
      suffix: 'clasificadas por atmósfera, tempo y género.',
    },
    {
      id: 'stat-2',
      prefix: 'Sincronización en',
      highlight: 'menos de 1 segundo entre equipos',
      suffix: 'manteniendo el formato original de alta fidelidad.',
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
        title="SONGS"
        titleColor={accentBlue}
        imageSrc="/IphonesMockup.png"
      />
      <SubHeader
        targetHeroId="songs-hero"
        title="SONGS"
        titleColor={accentBlue}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref="#descargar"
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver catálogo >"
        actionHref="#catalogo"
        items={songsHighlights}
      />
      <HeroCard
        id="songs-detail"
        title="CATÁLOGO"
        subtitle="Explora nuestra colección curada de música y listas organizadas por atmósfera, tempo y estética."
        titleColor={accentBlue}
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Songs y nuestro impacto musical"
        linkText="Más información sobre la curaduría >"
        linkHref="#curaduria"
        linkColor={accentBlue}
        accentColor={accentBlue}
        icon={FiMusic}
        items={songsStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={accentBlue}
      />
    </div>
  )
}

export default SongsPage
