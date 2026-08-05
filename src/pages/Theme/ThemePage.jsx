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
      titleColor: 'var(--color-primary)',
      imageSrc: '/IphonesMockup.png',
      imageAlt: 'Demostración de temas claros y oscuros',
    },
    {
      id: 'highlight-2',
      title: 'VARIABLES INSTITUCIONALES NEXORA',
      titleColor: 'var(--color-primary)',
      imageSrc: '/IphonesMockup.png',
      imageAlt: 'Tokens visuales de Nexora',
    },
    {
      id: 'highlight-3',
      title: 'GLIKER + INTER EN SINTONÍA',
      titleColor: 'var(--color-primary)',
      imageSrc: '/IphonesMockup.png',
      imageAlt: 'Demostración tipográfica Nexora',
    },
  ]

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
            'Centraliza colores, bordes, sombras y tipografías en un solo archivo de tokens dinámicos.',
          linkText: 'Documentación de tokens de diseño',
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
      <HeroCard
        id="theme-hero"
        title="THEME"
        titleColor="var(--color-primary)"
        imageSrc="/IphonesMockup.png"
      />
      <SubHeader
        targetHeroId="theme-hero"
        title="THEME"
        titleColor="var(--color-primary)"
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
        titleColor="var(--color-primary)"
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Theme y la eficiencia en la interfaz"
        linkText="Más información en la guía de diseño (PDF)"
        linkHref="#guia-diseno"
        linkColor="var(--color-primary)"
        accentColor="var(--color-primary)"
        icon={FiLayers}
        items={themeStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor="var(--color-primary)"
      />
    </div>
  )
}

export default ThemePage
