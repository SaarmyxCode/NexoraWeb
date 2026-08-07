import React, { useState } from 'react'
import { FiLayers, FiMusic, FiFolderPlus, FiTrendingUp, FiShield, FiCpu } from 'react-icons/fi'
import { SecondaryNav } from '../../components/SecondaryNav/SecondaryNav'
import { useReveal } from '../../hooks/useReveal'
import './ChangelogPage.css'

export const ChangelogPage = () => {
  const heroRevealRef = useReveal()

  const changelogSections = [
    {
      id: 'theme',
      title: 'Nexora Theme',
      icon: FiLayers,
      version: 'v1.2.0',
      date: 'Actualizado el 5 de agosto de 2026',
      text: 'Lanzamiento de la nueva paleta de Design Tokens unificada. Se redujo a cero la latencia de renderizado en componentes con alto contraste y se añadió integración directa con fuentes tipográficas Gliker e Inter.',
      subtext: 'Soporte completo para temas oscuros adaptativos y microinteracciones fluidas.',
      changes: [
        'Añadido: Motor dinámico de CSS Custom Properties con cero latencia.',
        'Mejora: Optimización de accesibilidad en tarjetas Bento Grid.',
        'Fix: Corrección de contraste en modales flotantes con glassmorphism.',
      ],
    },
    {
      id: 'songs',
      title: 'Nexora Songs',
      icon: FiMusic,
      version: 'v1.1.4',
      date: 'Actualizado el 2 de agosto de 2026',
      text: 'Integración de listas curadas para sesiones de Deep Work y concentración máxima. Se optimizó el reproductor web para minimizar el consumo de memoria en segundo plano.',
      subtext: 'Transiciones de audio sin interrupciones y reproducción en alta fidelidad.',
      changes: [
        'Añadido: Modo offline para playlists guardadas localmente.',
        'Mejora: Ecualizador de frecuencia ajustado para trabajo enfocado.',
        'Fix: Sincronización de metadatos de pistas en navegadores móviles.',
      ],
    },
    {
      id: 'rename',
      title: 'Nexora Rename',
      icon: FiFolderPlus,
      version: 'v1.0.0',
      date: 'Actualizado el 1 de agosto de 2026',
      text: 'Lanzamiento oficial del motor multihilo local para procesamiento y renombrado masivo de archivos. Diseñado para organizar miles de documentos en lote sin sobrecargar el procesador.',
      subtext: 'Lectura instantánea de metadatos EXIF e ID3 para creación de reglas avanzadas.',
      changes: [
        'Añadido: Generador de reglas compuestas con variables dinámicas.',
        'Añadido: Previsualización en tiempo real del lote antes de confirmar.',
        'Mejora: Soporte Drag & Drop para carpetas completas.',
      ],
    },
    {
      id: 'finance',
      title: 'Nexora Finance',
      icon: FiTrendingUp,
      version: 'v2.0.1',
      date: 'Actualizado el 28 de julio de 2026',
      text: 'Implementación del motor contable con cifrado Zero-Knowledge. Todos tus datos financieros, presupuestos y proyecciones permanecen 100% cifrados dentro de tu almacenamiento local.',
      subtext: 'Control contable profesional con reportes exportables sin intermediarios.',
      changes: [
        'Añadido: Proyecciones automáticas de ahorro mensual.',
        'Mejora: Cálculo dinámico de presupuestos en múltiples divisas.',
        'Fix: Corrección en el renderizado de gráficos estadísticos.',
      ],
    },
    {
      id: 'vault',
      title: 'NexoraVault',
      icon: FiShield,
      version: 'v1.3.0',
      date: 'Actualizado el 20 de julio de 2026',
      text: 'Actualización del núcleo de cifrado a estándares de nivel bancario. Bóveda local de credenciales con generación de contraseñas de alta entropía y autenticación biométrica.',
      subtext: 'Tus claves máster jamás salen de tu dispositivo.',
      changes: [
        'Añadido: Auto-relleno seguro en plataformas web integradas.',
        'Mejora: Auditoría automática de contraseñas duplicadas o débiles.',
        'Fix: Bloqueo automático por inactividad optimizado.',
      ],
    },
    {
      id: 'core',
      title: 'Core Ecosistema',
      icon: FiCpu,
      version: 'v2.1.0',
      date: 'Actualizado el 15 de julio de 2026',
      text: 'Mejoras globales en el rendimiento del ecosistema Nexora Web. Navegación entre aplicaciones acelerada mediante prefetch inteligente y optimización de dependencias.',
      subtext: 'Arquitectura unificada para una experiencia de usuario fluida y reactiva.',
      changes: [
        'Añadido: Componente de búsqueda global interactiva (SearchModal).',
        'Mejora: Soporte de navegación secundaria adhesiva (SecondaryNav).',
        'Mejora: Tiempos de carga inicial reducidos en un 40%.',
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState(changelogSections[0].id)

  const currentSection = changelogSections.find((s) => s.id === activeTab) || changelogSections[0]
  const ActiveIcon = currentSection.icon

  const changelogNavLinks = changelogSections.map((section) => ({
    id: section.id,
    label: section.title,
    isActive: activeTab === section.id,
    onClick: (e) => {
      e.preventDefault()
      setActiveTab(section.id)
    },
  }))

  return (
    <div className="changelog-page">
      <SecondaryNav
        title="Novedades"
        titleColor="var(--color-text-heading)"
        links={changelogNavLinks}
        isSticky={true}
      />

      {/* HERO ÚNICO CON ANIMACIÓN DE ENTRADA POR CLAVE */}
      <section ref={heroRevealRef} className="changelog-wrapper reveal-on-scroll">
        <div key={currentSection.id} className="changelog-hero-card animate-tab-change">
          <div className="changelog-version-badge">{currentSection.version}</div>

          <h1 className="changelog-hero-title">{currentSection.title}</h1>

          <span className="changelog-updated-date">{currentSection.date}</span>

          <div className="changelog-hero-body">
            <p className="changelog-hero-text">{currentSection.text}</p>

            <div className="changelog-icon-container">
              <div className="changelog-icon-badge">
                <ActiveIcon className="changelog-icon" />
              </div>
            </div>

            <p className="changelog-hero-text">{currentSection.subtext}</p>

            {/* Lista detallada de cambios de la versión */}
            <div className="changelog-items-container">
              <h3 className="changelog-items-title">Detalles de la versión</h3>
              <ul className="changelog-items-list">
                {currentSection.changes.map((change, idx) => (
                  <li key={idx} className="changelog-item-line">
                    {change}
                  </li>
                ))}
              </ul>
            </div>

            <div className="changelog-hero-actions">
              <a href="#reportar" className="changelog-action-link">
                ¿Encontraste un problema? Reporta un error en el centro de soporte &gt;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChangelogPage
