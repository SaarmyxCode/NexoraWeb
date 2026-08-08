import React, { useState } from 'react'
import { FiMusic } from 'react-icons/fi'
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

// Componente Exclusivo de Songs
import { InteractiveAudioPlayer } from './components/InteractiveAudioPlayer/InteractiveAudioPlayer'

import './SongsPage.css'

export const SongsPage = () => {
  usePageTheme('songs')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const songsData = getProduct('songs') || {
    name: 'Nexora Songs',
    shortName: 'SONGS',
    accentColor: '#EC4899',
    description: 'Gestor y organizador inteligente de colecciones musicales.',
    mockup: '/mockups/NexoraSongs.png',
    downloadUrl: '/descargar#songs',
    highlights: [],
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
    <div className="songs-page">
      {/* 1. Hero Principal */}
      <HeroCard id="songs-hero" product={songsData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="songs-hero"
        title={songsData.shortName}
        titleColor={songsData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={songsData.downloadUrl || '/descargar'}
      />

      {/* 3. Registro de la Última Versión */}
      {changelogData.songs && <ChangelogCard changelogData={changelogData.songs} />}

      {/* 4. Reproductor Interactivo (Exclusivo) */}
      <div id="explorar">
        <InteractiveAudioPlayer accentColor={songsData.accentColor} />
      </div>

      {/* 5. Secciones Destacadas */}
      {songsData.highlights?.length > 0 && (
        <HighlightSection
          title="Mira lo más destacado."
          actionText="Ver documentación >"
          actionHref="#docs"
          actionColor={songsData.accentColor}
          items={songsData.highlights}
        />
      )}

      {/* 6. Detalle del Producto */}
      <HeroCard
        id="songs-detail"
        title="GESTOR MUSICAL"
        subtitle={songsData.description}
        titleColor={songsData.accentColor}
        imageSrc={songsData.mockup}
        imageAlt={`Demostración de ${songsData.name}`}
      />

      {/* 7. Estadísticas e Impacto */}
      {songsData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Songs y la experiencia auditiva"
          linkText="Ver guía de ecualización y formatos >"
          linkHref="#formatos"
          linkColor={songsData.accentColor}
          accentColor={songsData.accentColor}
          icon={FiMusic}
          items={songsData.stats}
          onCardClick={handleOpenModal}
        />
      )}

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
