import { useState } from 'react'
import { FiLayers } from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './ThemePage.css'

export const ThemePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  // Carga segura desde el JSON con seguro anti-fallos
  const themeData = getProduct('theme')

  const themeModalsData = [
    {
      title: 'Contraste y Salud Visual',
      sections: [
        {
          subtitle: 'Optimización de color.',
          description:
            'Cada paleta de Nexora Theme cumple estrictamente con el nivel AAA de las pautas WCAG. Los fondos negros puros en pantallas OLED garantizan un consumo energético mínimo y cero fatiga visual.',
          linkText: 'Ver especificaciones de contraste (PDF)',
          linkHref: '#',
        },
      ],
    },
  ]

  const handleOpenModal = (_, index) => {
    const selectedModal = themeModalsData[index]
    if (selectedModal) {
      setModalState({
        isOpen: true,
        title: selectedModal.title,
        sections: selectedModal.sections,
      })
    }
  }

  return (
    <div className="theme-page">
      <HeroCard
        id="theme-hero"
        title={themeData.shortName}
        titleColor={themeData.accentColor}
        imageSrc={themeData.mockup}
      />
      <SubHeader
        targetHeroId="theme-hero"
        title={themeData.shortName}
        titleColor={themeData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={themeData.downloadUrl}
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver planes >"
        actionHref="#planes"
        actionColor={themeData.accentColor} // <-- Hereda el verde de Finance, azul de Songs, amarillo de Rename, etc.
        items={themeData.highlights}
      />
      <HeroCard
        id="theme-detail"
        title="SISTEMA VISUAL"
        subtitle={themeData.description}
        titleColor={themeData.accentColor}
        imageSrc={themeData.mockup}
      />
      <FeatureStatsCard
        title="Theme y la eficiencia en la interfaz"
        linkText="Más información en la guía de diseño (PDF)"
        linkHref="#guia-diseno"
        linkColor={themeData.accentColor}
        accentColor={themeData.accentColor}
        icon={FiLayers}
        items={themeData.stats}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={themeData.accentColor}
      />
    </div>
  )
}

export default ThemePage
