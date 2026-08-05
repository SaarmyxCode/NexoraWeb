import { useState } from 'react'
import { FiUsers, FiShield, FiFileText, FiSliders, FiEye, FiLock } from 'react-icons/fi'
import { SecondaryNav } from '../../components/SecondaryNav/SecondaryNav'
import { useReveal } from '../../hooks/useReveal'
import './PrivacyPage.css'

export const PrivacyPage = () => {
  const heroRevealRef = useReveal()

  const privacySections = [
    {
      id: 'descripcion',
      title: 'Descripción',
      icon: FiUsers,
      text: 'En Nexora Labs, creemos que la privacidad es un derecho fundamental. Nuestras aplicaciones (Theme, Songs, Rename, Finance y NexoraVault) están desarrolladas bajo el principio de minimización de datos: recopilamos únicamente lo estrictamente necesario para que las herramientas funcionen.',
      subtext: 'No rastreamos tu actividad ni vendemos tus datos a ningún anunciante o tercero.',
    },
    {
      id: 'prestaciones',
      title: 'Prestaciones de Seguridad',
      icon: FiShield,
      text: 'Implementamos cifrado de extremo a extremo y procesamiento local en el dispositivo del usuario. Las claves de cifrado de herramientas como NexoraVault jamás se transmiten o almacenan en servidores remotos.',
      subtext: 'Tu información permanece bajo tu control exclusivo en tu almacenamiento local.',
    },
    {
      id: 'fichas',
      title: 'Fichas de Datos',
      icon: FiFileText,
      text: 'Cada aplicación detalla en su documentación técnica el tipo de almacenamiento que utiliza. La mayoría de nuestras soluciones operan 100% offline sin necesidad de conexión constante a la red.',
      subtext: 'Transparencia absoluta sobre dónde y cómo se procesa cada archivo.',
    },
    {
      id: 'control',
      title: 'Control del Usuario',
      icon: FiSliders,
      text: 'Tienes el control total para exportar, eliminar o resetear la base de datos de cualquiera de tus aplicaciones en cualquier momento con un solo clic.',
      subtext: 'Tus datos son tuyos y puedes borrarlos definitivamente cuando lo desees.',
    },
    {
      id: 'transparencia',
      title: 'Informe de Transparencia',
      icon: FiEye,
      text: 'Publicamos reportes periódicos que confirman nuestra política de cero registros (no-logs). No comercializamos datos de ningún tipo con ninguna entidad privada o gubernamental.',
      subtext: 'Compromiso público auditado de neutralidad y seguridad digital.',
    },
    {
      id: 'politica',
      title: 'Política de Privacidad Completa',
      icon: FiLock,
      text: 'Al utilizar las plataformas de Nexora Labs, aceptas los términos descritos en este documento. Si tienes dudas sobre cómo tratamos la seguridad de tus datos, puedes contactar a nuestro equipo en el centro de soporte.',
      subtext: 'Última revisión realizada por el equipo de ingeniería de Nexora.',
    },
  ]

  const [activeTab, setActiveTab] = useState(privacySections[0].id)

  const currentSection = privacySections.find((s) => s.id === activeTab) || privacySections[0]
  const ActiveIcon = currentSection.icon

  const privacyNavLinks = privacySections.map((section) => ({
    id: section.id,
    label: section.title,
    isActive: activeTab === section.id,
    onClick: (e) => {
      e.preventDefault()
      setActiveTab(section.id)
    },
  }))

  return (
    <div className="privacy-page">
      <SecondaryNav
        title="Privacidad"
        titleColor="var(--color-light-text-heading)"
        links={privacyNavLinks}
      />

      {/* HERO ÚNICO CON ANIMACIÓN DE ENTRADA POR CLAVE */}
      <section ref={heroRevealRef} className="privacy-wrapper reveal-on-scroll">
        <div key={currentSection.id} className="privacy-hero-card animate-tab-change">
          <h1 className="privacy-hero-title">{currentSection.title}</h1>

          <span className="privacy-updated-date">Actualizado el 4 de agosto de 2026</span>

          <div className="privacy-hero-body">
            <p className="privacy-hero-text">{currentSection.text}</p>

            <div className="privacy-icon-container">
              <div className="privacy-icon-badge">
                <ActiveIcon className="privacy-icon" />
              </div>
            </div>

            <p className="privacy-hero-text">{currentSection.subtext}</p>

            <div className="privacy-hero-actions">
              <a href="#descargar-pdf" className="privacy-action-link">
                Descarga una copia de esta política de privacidad (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
