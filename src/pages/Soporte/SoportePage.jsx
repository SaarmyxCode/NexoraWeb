import { useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './SoportePage.css'

export const SoportePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const accentPurple = '#8B5CF6'

  const soporteHighlights = [
    {
      id: 'highlight-1',
      title: 'CENTRO DE AYUDA Y GUÍAS RÁPIDAS',
      titleColor: accentPurple,
      imageSrc: '/MacBookMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'ATENCIÓN DIRECTA Y TICKET DE CONSULTAS',
      titleColor: accentPurple,
      imageSrc: '/MacBookMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'ESTADO DE SERVICIOS EN TIEMPO REAL',
      titleColor: accentPurple,
      imageSrc: '/MacBookMockup.png',
    },
  ]

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

  const soporteStatsData = [
    {
      id: 'stat-1',
      prefix: 'Respuesta en',
      highlight: 'menos de 15 minutos',
      suffix: 'para tickets prioritarios de soporte técnico.',
    },
    {
      id: 'stat-2',
      prefix: 'Disponibilidad del',
      highlight: '99.9% de los servicios',
      suffix: 'con monitoreo continuo en tiempo real.',
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
        title="SOPORTE"
        titleColor={accentPurple}
        imageSrc="/MacBookMockup.png"
      />
      <SubHeader
        targetHeroId="soporte-hero"
        title="SOPORTE"
        titleColor={accentPurple}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Contactar"
        primaryBtnHref="#contactar"
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver Preguntas Frecuentes >"
        actionHref="#faq"
        items={soporteHighlights}
      />
      <HeroCard
        id="soporte-detail"
        title="ASISTENCIA"
        subtitle="Estamos para resolver tus dudas y asistirte en la instalación o configuración de cada una de nuestras aplicaciones."
        titleColor={accentPurple}
        imageSrc="/MacBookMockup.png"
      />
      <FeatureStatsCard
        title="Soporte y el compromiso con nuestros usuarios"
        linkText="Consulta el estado de los servicios en vivo >"
        linkHref="#status"
        linkColor={accentPurple}
        accentColor={accentPurple}
        icon={FiHelpCircle}
        items={soporteStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={accentPurple}
      />
    </div>
  )
}

export default SoportePage
