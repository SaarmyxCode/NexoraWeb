import { useState } from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './FinancePage.css'

export const FinancePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })
  const accentGreen = '#10B981'

  const financeHighlights = [
    {
      id: 'highlight-1',
      title: 'CONTROL INTEGRAL DE INGRESOS Y GASTOS',
      titleColor: accentGreen,
      imageSrc: '/MacBookMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'REPORTES Y GRÁFICAS EN TIEMPO REAL',
      titleColor: accentGreen,
      imageSrc: '/MacBookMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'PROYECCIONES Y METAS DE AHORRO',
      titleColor: accentGreen,
      imageSrc: '/MacBookMockup.png',
    },
  ]

  const financeModalsData = [
    {
      title: 'Optimización del Presupuesto',
      sections: [
        {
          subtitle: 'Detección de fuga de capital.',
          description:
            'Categorización automática de consumos recurrentes para señalar suscripciones duplicadas e innecesarias.',
          linkText: 'Calculadora de ahorro estimada',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Privacidad Financiera Cero-Conocimiento',
      sections: [
        {
          subtitle: 'Almacenamiento Local Encriptado.',
          description:
            'Tus cuentas y números no viajan a servidores externos. Todo el cálculo de gráficos ocurre localmente en tu cliente.',
          linkText: 'Leer manifiesto de privacidad',
          linkHref: '#',
        },
      ],
    },
  ]

  const financeStatsData = [
    {
      id: 'stat-1',
      prefix: 'Optimización de',
      highlight: 'hasta un 40% en tus gastos',
      suffix: 'mensuales con nuestras herramientas de proyección.',
    },
    {
      id: 'stat-2',
      prefix: 'Procesamiento de',
      highlight: '100% de tus datos de forma local',
      suffix: 'garantizando la máxima privacidad financiera.',
    },
  ]

  const handleOpenModal = (_, index) => {
    const selectedModal = financeModalsData[index]
    if (selectedModal) {
      setModalState({
        isOpen: true,
        title: selectedModal.title,
        sections: selectedModal.sections,
      })
    }
  }

  return (
    <div className="finance-page">
      <HeroCard
        id="finance-hero"
        title="FINANCE"
        titleColor={accentGreen}
        imageSrc="/MacBookMockup.png"
      />
      <SubHeader
        targetHeroId="finance-hero"
        title="FINANCE"
        titleColor={accentGreen}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref="#descargar"
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver planes >"
        actionHref="#planes"
        items={financeHighlights}
      />
      <HeroCard
        id="finance-detail"
        title="GESTIÓN"
        subtitle="Visualiza el estado de tus finanzas en una sola pantalla. Diseñado para simplificar presupuestos."
        titleColor={accentGreen}
        imageSrc="/MacBookMockup.png"
      />
      <FeatureStatsCard
        title="Finance y el control de tus ingresos"
        linkText="Conoce más sobre la privacidad de tus datos >"
        linkHref="#privacidad"
        linkColor={accentGreen}
        accentColor={accentGreen}
        icon={FiTrendingUp}
        items={financeStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={accentGreen}
      />
    </div>
  )
}

export default FinancePage
