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

  const financeHighlights = [
    {
      id: 'highlight-1',
      title: 'CONTROL INTEGRAL DE INGRESOS Y GASTOS',
      titleColor: '#10B981',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-2',
      title: 'REPORTES Y GRÁFICAS EN TIEMPO REAL',
      titleColor: '#10B981',
      imageSrc: '/IphonesMockup.png',
    },
    {
      id: 'highlight-3',
      title: 'PROYECCIONES Y METAS DE AHORRO',
      titleColor: '#10B981',
      imageSrc: '/IphonesMockup.png',
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
      title: 'Privacidad Finaciera Cero-Conocimiento',
      sections: [
        {
          subtitle: 'Almacenamiento Local Encritado.',
          description:
            'Tus cuentas y números no viajan a servidores externos. Todo el cálculo de gráficos ocurre localmente en tu cliente.',
          linkText: 'Leer manifiesto de privacidad',
          linkHref: '#',
        },
      ],
    },
    {
      title: 'Exportación e Informes',
      sections: [
        {
          subtitle: 'Formatos estándar.',
          description:
            'Genera balances contables listos para auditorías o declaraciones en PDF, Excel o sintaxis JSON.',
          linkText: 'Descargar plantilla de ejemplo',
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
    {
      id: 'stat-3',
      prefix: 'Generación de',
      highlight: 'reportes instantáneos',
      suffix: 'exportables directamente a formatos PDF o CSV.',
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
        titleColor="#10B981"
        imageSrc="/IphonesMockup.png"
      />
      <SubHeader
        targetHeroId="finance-hero"
        title="FINANCE"
        titleColor="#10B981"
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
        titleColor="#10B981"
        imageSrc="/IphonesMockup.png"
      />
      <FeatureStatsCard
        title="Finance y el control de tus ingresos"
        linkText="Conoce más sobre la privacidad de tus datos >"
        linkHref="#privacidad"
        linkColor="#10B981"
        accentColor="#10B981"
        icon={FiTrendingUp}
        items={financeStatsData}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor="#10B981"
      />
    </div>
  )
}
