import { useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { usePageTheme } from '../../hooks/usePageTheme'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './SoportePage.css'

export const SoportePage = () => {
  // Aplica el modo (dark/light) definido en products.json para Soporte a TODA la web
  usePageTheme('soporte')

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
    {
      title: 'Monitoreo e Infraestructura',
      sections: [
        {
          subtitle: 'Estado de los servidores.',
          description:
            'Sistemas redundantes con uptime verificado del 99.9% para garantizar la disponibilidad continua de todas tus herramientas.',
          linkText: 'Ver informe de estado',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Asistencia Especializada',
      sections: [
        {
          subtitle: 'Atención multiidioma.',
          description:
            'Soporte técnico personalizado disponible las 24 horas para guiarte en el despliegue de las aplicaciones.',
          linkText: 'Contactar a un especialista',
          linkHref: '#',
        },
      ],
    },
  ]

  const handleOpenModal = (item, index) => {
    const selectedModal = soporteModalsData[index] || {
      title: item.highlight || 'Asistencia Técnica',
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
        actionText="Ver Preguntas Frecuentes >"
        actionHref="#faq"
        actionColor={soporteData.accentColor}
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
