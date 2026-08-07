import { useState } from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import { getProduct } from '../../utils/getProduct'
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { HighlightSection } from '../../components/HighlightSection/HighlightSection'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'
import './FinancePage.css'

export const FinancePage = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  const financeData = getProduct('finance')

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
        title={financeData.shortName}
        titleColor={financeData.accentColor}
        imageSrc={financeData.mockup}
        imageAlt={`Mockup de ${financeData.name}`}
      />
      <SubHeader
        targetHeroId="finance-hero"
        title={financeData.shortName}
        titleColor={financeData.accentColor}
        outlineBtnText="Explorar"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar"
        primaryBtnHref={financeData.downloadUrl}
      />
      <HighlightSection
        title="Mira lo más destacado."
        actionText="Ver planes >"
        actionHref="#planes"
        actionColor={financeData.accentColor} // <-- Hereda el verde de Finance, azul de Songs, amarillo de Rename, etc.
        items={financeData.highlights}
      />
      <HeroCard
        id="finance-detail"
        title="GESTIÓN"
        subtitle={financeData.description}
        titleColor={financeData.accentColor}
        imageSrc={financeData.mockup}
        imageAlt={`Demostración de gestión de ${financeData.name}`}
      />
      <FeatureStatsCard
        title="Finance y el control de tus ingresos"
        linkText="Conoce más sobre la privacidad de tus datos >"
        linkHref="#privacidad"
        linkColor={financeData.accentColor}
        accentColor={financeData.accentColor}
        icon={FiTrendingUp}
        items={financeData.stats}
        onCardClick={handleOpenModal}
      />
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={financeData.accentColor}
      />
    </div>
  )
}

export default FinancePage
