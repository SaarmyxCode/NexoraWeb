import React, { useState } from 'react'
import { FiUsers, FiShield, FiFileText, FiSliders, FiEye, FiLock } from 'react-icons/fi'
import { usePageTheme } from '../../hooks/usePageTheme'
import { SecondaryNav } from '../../components/SecondaryNav/SecondaryNav'
import { PrivacyCard } from './components/PrivacyCard/PrivacyCard'
import { AnimatedTabContent } from '../../components/Animated/AnimatedTabContent'
import './PrivacyPage.css'

export const PrivacyPage = () => {
  usePageTheme('privacidad')

  const privacySections = [
    {
      id: 'descripcion',
      title: 'Descripción General',
      icon: FiUsers,
      text: 'En Nexora Labs, creemos que la privacidad es un derecho fundamental. Nuestras aplicaciones (Theme, Songs, Rename, Finance y NexoraVault) están desarrolladas bajo el principio de minimización de datos.',
      subtext: 'No rastreamos tu actividad ni vendemos tus datos a ningún anunciante o tercero.',
      details: [
        {
          title: 'Minimización de Datos',
          description:
            'Solo solicitamos los permisos estrictamente requeridos para ejecutar la app localmente.',
        },
        {
          title: 'Cero Rastreadores',
          description:
            'Sin SDKs de telemetría de terceros ni analíticas invasivas en segundo plano.',
        },
        {
          title: 'Procesamiento Local',
          description:
            'Tus archivos de música, imágenes y presupuestos nunca salen de tu almacenamiento.',
        },
      ],
    },
    {
      id: 'prestaciones',
      title: 'Prestaciones de Seguridad',
      icon: FiShield,
      text: 'Implementamos cifrado de extremo a extremo y procesamiento local en el dispositivo del usuario. Las claves de cifrado jamás se transmiten a servidores remotos.',
      subtext: 'Tu información permanece bajo tu control exclusivo.',
      details: [
        {
          title: 'Cifrado AES-256',
          description:
            'Las credenciales guardadas en herramientas como NexoraVault utilizan algoritmos de estándar militar.',
        },
        {
          title: 'Zero-Knowledge Architecture',
          description:
            'Incluso los creadores de Nexora ignoran la clave maestra con la que cifras tus datos.',
        },
        {
          title: 'Aislamiento de Sandboxing',
          description:
            'Cada aplicación corre aislada en el SO para impedir acceso no autorizado entre procesos.',
        },
      ],
    },
    {
      id: 'fichas',
      title: 'Fichas y Metadatos',
      icon: FiFileText,
      text: 'Cada aplicación detalla en su documentación técnica el tipo de almacenamiento local que utiliza. La mayoría de nuestras soluciones operan 100% offline.',
      subtext: 'Transparencia absoluta sobre dónde y cómo se procesa cada archivo.',
      details: [
        {
          title: 'Operatividad Offline',
          description: 'Funcionalidad completa sin requerir conexión a internet activa.',
        },
        {
          title: 'Metadatos Sanitizados',
          description:
            'Herramientas como Nexora Rename te permiten limpiar metadatos EXIF sensibles antes de compartir.',
        },
        {
          title: 'Sin Cookies de Rastreo',
          description: 'Nuestra plataforma web no deposita cookies de perfilado comercial.',
        },
      ],
    },
    {
      id: 'control',
      title: 'Control del Usuario',
      icon: FiSliders,
      text: 'Tienes el control total para exportar, eliminar o resetear la base de datos de cualquiera de tus aplicaciones en cualquier momento con un solo clic.',
      subtext: 'Tus datos son tuyos y puedes borrarlos definitivamente cuando lo desees.',
      details: [
        {
          title: 'Portabilidad Directa',
          description:
            'Exporta tus bases de datos en JSON, CSV o SQLite sin bloqueos de propietario.',
        },
        {
          title: 'Borrado Definitivo',
          description:
            'Función de purga instantánea que remueve hasta el último registro en tu disco.',
        },
        {
          title: 'Restauración Local',
          description: 'Crea copias de respaldo encriptadas y restáuralas en cualquier máquina.',
        },
      ],
    },
    {
      id: 'transparencia',
      title: 'Informe de Transparencia',
      icon: FiEye,
      text: 'Publicamos reportes periódicos que confirman nuestra política de cero registros (no-logs). No comercializamos datos con ninguna entidad privada o gubernamental.',
      subtext: 'Compromiso público auditado de neutralidad y seguridad digital.',
      details: [
        {
          title: 'Política No-Logs',
          description: 'No existe historial de accesos ni dirección IP vinculada a tus consultas.',
        },
        {
          title: 'Auditoría de Código',
          description:
            'Revisiones constantes del código fuente para garantizar la integridad del software.',
        },
        {
          title: 'Independencia Comercial',
          description:
            'Sostenemos la suite mediante ventas directas, evitando monetización por datos.',
        },
      ],
    },
    {
      id: 'politica',
      title: 'Política Completa',
      icon: FiLock,
      text: 'Al utilizar las plataformas de Nexora Labs, aceptas los términos descritos en este documento. Si tienes dudas sobre cómo tratamos la seguridad, contacta a soporte.',
      subtext: 'Última revisión realizada por el equipo de ingeniería de Nexora.',
      details: [
        {
          title: 'Actualizaciones de Política',
          description:
            'Notificamos cualquier ajuste estructural directamente en el registro de novedades (Changelog).',
        },
        {
          title: 'Derechos ARCO',
          description:
            'Garantizamos acceso, rectificación, cancelación y oposición inmediata sobre tus datos.',
        },
        {
          title: 'Contacto de Seguridad',
          description: 'Canal directo de reporte ante hallazgos de vulnerabilidades.',
        },
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState(privacySections[0].id)

  const currentSection = privacySections.find((s) => s.id === activeTab) || privacySections[0]

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
      <SecondaryNav title="Privacidad" links={privacyNavLinks} isSticky={true} />

      <AnimatedTabContent activeKey={currentSection.id}>
        <PrivacyCard section={currentSection} />
      </AnimatedTabContent>
    </div>
  )
}

export default PrivacyPage
