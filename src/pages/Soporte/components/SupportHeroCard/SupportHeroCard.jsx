import React from 'react'
import { motion } from 'framer-motion'
import { FiHelpCircle } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import './SupportHeroCard.css'

export const SupportHeroCard = ({
  title = 'Soporte técnico de Nexora',
  subtitle = '¿Necesitas ayuda? Comienza aquí.',
  accentColor = 'var(--color-primary)',
}) => {
  const customStyle = {
    '--support-accent': accentColor,
    '--support-accent-bg': `${accentColor}15`,
  }

  return (
    <section className="support-hero-wrapper" style={customStyle}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Card radius="2xl" className="support-hero-card">
          {/* Icono Circular Central con Animación */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="support-hero-icon-circle"
          >
            <FiHelpCircle className="support-hero-circle-icon" />
          </motion.div>

          <h1 className="support-hero-title">{title}</h1>
          <p className="support-hero-subtitle">{subtitle}</p>
        </Card>
      </motion.div>
    </section>
  )
}

export default SupportHeroCard
