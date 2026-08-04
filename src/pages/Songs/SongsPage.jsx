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

  const songsHighlights = [
    {
      id: 'highlight-1',
      title: 'PLAYLISTS CURADAS A MEDIDA',
      titleColor: '#2563EB',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'ORGANIZACIÓN POR GÉNERO Y MOOD',
      titleColor: '#2563EB',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'SINCRONIZACIÓN MULTIPLATAFORMA',
      titleColor: '#2563EB',
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
        {
          subtitle: 'Actualizaciones semanales.',
          description:
            'Añadimos nuevas producciones independientes todos los viernes de forma automática.',
          linkText: 'Ver criterios de selección',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Sincronización Inmediata',
      sections: [
        {
          subtitle: 'Reproducción sin pausar.',
          description:
            'Cambia de la aplicación móvil a la versión web o de escritorio en tiempo real sin perder la posición actual del track.',
          linkText: 'Cómo funciona la sincronización',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Enfoque y Productividad',
      sections: [
        {
          subtitle: 'Música para Deep Work.',
          description:
            'Frecuencias de sonido optimizadas sin saltos bruscos de volumen para maximizar la retención y la velocidad de trabajo.',
          linkText: 'Estudio sobre música y concentración (PDF)',
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
    {
      id: 'stat-3',
      prefix: 'Listas diseñadas para',
      highlight: '100% de concentración',
      suffix: 'en tus sesiones de trabajo y entrenamiento.',
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
      <HeroCard id="songs-hero" title="SONGS" titleColor="#2563EB" imageSrc="/IphonesMockup.png" />
      <SubHeader
        targetHeroId="songs-hero"
        title="SONGS"
        titleColor="#2563EB"
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
        titleColor="#2563EB"
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Songs y nuestro impacto musical"
        linkText="Más información sobre la curaduría >"
        linkHref="#curaduria"
        linkColor="#2563EB"
        accentColor="#2563EB"
        icon={FiMusic}
        items={songsStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor="#2563EB"
      />
    </div>
  )
}
