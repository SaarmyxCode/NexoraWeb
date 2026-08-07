import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTool, FiArrowRight, FiExternalLink, FiShield, FiSmartphone } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import './SupportFeatureGrid.css'

export const SupportFeatureGrid = ({
  serviceTitle = 'Asistencia e instalación certificada',
  serviceDesc = 'Podemos ayudarte con la configuración de temas, integración de tokens o solución de conflictos en tus entornos de desarrollo de confianza.',
  serviceLinkText = 'Iniciar solicitud de asistencia',
  serviceLinkHref = '/soporte#asistencia',
  appTitle = 'Centro de Descargas Nexora',
  appDesc = 'Obtén los instaladores oficiales para macOS, Windows y Linux en un solo lugar o conecta con la comunidad.',
  appLinkText = 'Ir a Descargas',
  appLinkHref = '/descargar',
  noticeTitle = 'Ten cuidado con distribuciones no oficiales',
  noticeParagraph1 = 'Es posible que algunas versiones modificadas o descargadas fuera de nuestros canales oficiales contengan scripts maliciosos que comprometan tu privacidad o estabilidad del sistema. Para garantizar una experiencia segura, descarga siempre desde nuestro sitio web oficial.',
  noticeParagraph2 = 'Asimismo, Nexora Labs no ofrece soporte técnico para copias no autorizadas o scripts alterados por terceros. Contamos con documentación oficial y guías verificadas para garantizar el rendimiento óptimo de tu entorno.',
  accentColor = 'var(--color-primary)',
}) => {
  const customStyle = {
    '--support-feature-accent': accentColor,
  }

  const revealVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="support-features-wrapper" style={customStyle}>
      <div className="support-features-container">
        {/* BLOQUE 1 */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <Card radius="2xl" className="support-feature-card split-card">
            <div className="split-media-box bg-gradient-brand">
              <div className="split-floating-icons">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="floating-badge badge-primary"
                >
                  <FiTool />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="floating-badge badge-secondary"
                >
                  <FiShield />
                </motion.div>
              </div>
            </div>

            <div className="split-content-box">
              <h2 className="split-card-title">{serviceTitle}</h2>
              <p className="split-card-desc">{serviceDesc}</p>
              <Link to={serviceLinkHref} className="split-card-link">
                <span>{serviceLinkText}</span>
                <FiArrowRight />
              </Link>
            </div>
          </Card>
        </motion.div>

        {/* BLOQUE 2 */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <Card radius="2xl" className="support-feature-card split-card reverse-card">
            <div className="split-content-box">
              <h2 className="split-card-title">{appTitle}</h2>
              <p className="split-card-desc">{appDesc}</p>
              <Link to={appLinkHref} className="split-card-link">
                <span>{appLinkText}</span>
                <FiExternalLink />
              </Link>
            </div>

            <div className="split-media-box bg-subtle-accent">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="app-icon-circle"
              >
                <FiSmartphone />
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* BLOQUE 3 */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <Card radius="2xl" className="support-notice-card">
            <h3 className="notice-card-title">{noticeTitle}</h3>
            <p className="notice-card-text">{noticeParagraph1}</p>
            <p className="notice-card-text">{noticeParagraph2}</p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SupportFeatureGrid
