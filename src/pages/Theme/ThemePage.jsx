import { useState } from 'react'
import { FiLayers } from 'react-icons/fi'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './ThemePage.css'

export const ThemePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  const themeHighlights = [
    {
      id: 'highlight-1',
      title: 'MODO OSCURO Y MODO CLARO PURO',
      titleColor: '#E11F2F',
      imageSrc: '/IphonesMockup.png',
      imageAlt: 'Demostración de temas claros y oscuros',
    },
    {
      id: 'highlight-2',
      title: 'VARIABLES INSTITUCIONALES NEXORA',
      titleColor: '#E11F2F',
      imageSrc: '/IphonesMockup.png',
      imageAlt: 'Tokens visuales de Nexora',
    },
    {
      id: 'highlight-3',
      title: 'GLIKER + INTER EN SINTONÍA',
      titleColor: '#E11F2F',
      imageSrc: '/IphonesMockup.png',
      imageAlt: 'Demostración tipográfica Nexora',
    },
  ]

  // Contenido específico de cada modal para Theme
  const themeModalsData = [
    {
      title: 'Contraste y Salud Visual',
      sections: [
        {
          subtitle: 'Optimización de color.',
          description:
            'Cada paleta de Nexora Theme cumple estrictamente con el nivel AAA de las pautas WCAG. Los fondos negros puros en pantallas OLED garantizan un consumo energético mínimo y cero fatiga visual.',
          linkText: 'Ver especificaciones de contraste (PDF en español)',
          linkHref: '#',
        },
        {
          subtitle: 'Adaptación de entorno.',
          description:
            'El sistema detecta los cambios de luz ambiental de tu dispositivo para ajustar la opacidad del texto y los relieves en tiempo real.',
          linkText: 'Guía de accesibilidad visual',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Tokens y Variables CSS',
      sections: [
        {
          subtitle: 'Arquitectura escalable.',
          description:
            'Centraliza colores, bordes, sombras y tipografías en un solo archivo de tokens dinámicos. Modificar el tono institucional toma un segundo y se propaga en toda la aplicación.',
          linkText: 'Documentación de tokens de diseño',
          linkHref: '#',
        },
        {
          subtitle: 'Compatibilidad con React.',
          description:
            'Variables totalmente exportables como módulos CSS, Styled Components o Tailwind CSS.',
          linkText: 'Descargar paquete de tokens (npm)',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Render sin Latencia',
      sections: [
        {
          subtitle: 'Transición instantánea.',
          description:
            'El cambio de estado entre temas no fuerza un reflow del DOM. Las variables se actualizan directamente en la memoria del navegador ofreciendo 60 FPS garantizados.',
          linkText: 'Informe de pruebas de rendimiento (PDF)',
          linkHref: '#',
        },
        {
          subtitle: 'Estrategia de caché.',
          description:
            'La preferencia del usuario se almacena en el almacenamiento local sin requerir llamadas al servidor.',
          linkText: 'Más sobre rendimiento visual',
          linkHref: '#',
        },
      ],
    },
  ]

  const themeStatsData = [
    {
      id: 'stat-1',
      prefix: 'Construido con un',
      highlight: '100% de contraste optimizado',
      suffix: 'para lectura continua y descanso visual.',
    },
    {
      id: 'stat-2',
      prefix: 'Sincronización de',
      highlight: 'tokens CSS dinámicos',
      suffix: 'aplicables al instante en todo el ecosistema.',
    },
    {
      id: 'stat-3',
      prefix: 'Reducción de',
      highlight: '0ms de latencia en render',
      suffix: 'al cambiar entre modo claro y oscuro.',
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
      <HeroCard id="theme-hero" title="THEME" titleColor="#E11F2F" imageSrc="/IphonesMockup.png" />
      <SubHeader
        targetHeroId="theme-hero"
        title="THEME"
        titleColor="#E11F2F"
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref="#descargar"
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver documentación >"
        actionHref="#docs"
        items={themeHighlights}
      />
      <HeroCard
        id="theme-detail"
        title="SISTEMA VISUAL"
        subtitle="Presentamos el lenguaje de diseño unificado de Nexora. Diseñado desde cero para ofrecer una experiencia consistente, fluida y con alto contraste en todas nuestras herramientas."
        titleColor="#E11F2F"
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Theme y la eficiencia en la interfaz"
        linkText="Más información en la guía de diseño (PDF en español)"
        linkHref="#guia-diseno"
        linkColor="#E11F2F"
        accentColor="#E11F2F"
        icon={FiLayers}
        items={themeStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor="#E11F2F"
      />
    </div>
  )
}
