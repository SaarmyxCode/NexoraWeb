import { useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './SoportePage.css'

export const SoportePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  const soporteData = getProduct('soporte')

  const soporteModalsData = [
    {
      title: 'Tiempos de Respuesta Garantizados',
      sections: [
        {
          subtitle: 'Atención técnica.',
          description:
            'Nuestro equipo de ingenieros revisa los tickets en tiempo real para resolver problemas de configuración e instalación inmediatamente.',
          linkText: 'Crear un ticket prioritario',
          linkHref: '#',
        },
      ],
    },
  ]

  const handleOpenModal = (_, index) => {
    const selectedModal = soporteModalsData[index]
    if (selectedModal) {
      setModalState({
        isOpen: true,
        title: selectedModal.title,
        sections: selectedModal.sections,
      })
    }
  }

  return (
    <div className="soporte-page">
      <HeroCard
        id="soporte-hero"
        title={soporteData.shortName}
        titleColor={soporteData.accentColor}
        imageSrc={soporteData.mockup}
        imageAlt={`Mockup de ${soporteData.shortName}`}
      />
      <SubHeader
        targetHeroId="soporte-hero"
        title={soporteData.shortName}
        titleColor={soporteData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Contactar"
        primaryBtnHref={soporteData.downloadUrl}
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver planes >"
        actionHref="#planes"
        actionColor={soporteData.accentColor} // <-- Hereda el verde de Finance, azul de Songs, amarillo de Rename, etc.
        items={soporteData.highlights}
      />
      <HeroCard
        id="soporte-detail"
        title="ASISTENCIA"
        subtitle={soporteData.description}
        titleColor={soporteData.accentColor}
        imageSrc={soporteData.mockup}
        imageAlt="Asistencia técnica Nexora"
      />
      <FeatureStatsCard
        title="Soporte y el compromiso con nuestros usuarios"
        linkText="Consulta el estado de los servicios en vivo >"
        linkHref="#status"
        linkColor={soporteData.accentColor}
        accentColor={soporteData.accentColor}
        icon={FiHelpCircle}
        items={soporteData.stats}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={soporteData.accentColor}
      />
    </div>
  )
}

export default SoportePage
