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

  const soporteHighlights = [
    {
      id: 'highlight-1',
      title: 'CENTRO DE AYUDA Y GUÍAS RÁPIDAS',
      titleColor: '#8B5CF6',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'ATENCIÓN DIRECTA Y TICKET DE CONSULTAS',
      titleColor: '#8B5CF6',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'ESTADO DE SERVICIOS EN TIEMPO REAL',
      titleColor: '#8B5CF6',
      imageSrc: '/IphonesMockup.png',
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
    {
      title: 'Estado de Servidores y Sistemas',
      sections: [
        {
          subtitle: 'Transparencia de red.',
          description:
            'Supervisión de APIs y servicios en vivo las 24 horas del día, los 7 días de la semana.',
          linkText: 'Ver consola de estado global',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Documentación y Tutoriales',
      sections: [
        {
          subtitle: 'Aprende a tu ritmo.',
          description:
            'Accede a paso a paso interactivos, videos explicativos y preguntas frecuentes actualizadas periódicamente.',
          linkText: 'Explorar base de conocimiento',
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
    {
      id: 'stat-3',
      prefix: 'Base de conocimiento con',
      highlight: 'más de 200 artículos',
      suffix: 'y guías paso a paso para resolución de dudas.',
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
        titleColor="#8B5CF6"
        imageSrc="/IphonesMockup.png"
      />
      <SubHeader
        targetHeroId="soporte-hero"
        title="SOPORTE"
        titleColor="#8B5CF6"
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
        titleColor="#8B5CF6"
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Soporte y el compromiso con nuestros usuarios"
        linkText="Consulta el estado de los servicios en vivo >"
        linkHref="#status"
        linkColor="#8B5CF6"
        accentColor="#8B5CF6"
        icon={FiHelpCircle}
        items={soporteStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor="#8B5CF6"
      />
    </div>
  )
}
