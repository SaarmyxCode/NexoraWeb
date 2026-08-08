import React from 'react'
import { motion } from 'framer-motion'
import { FiLock, FiCreditCard, FiDownload } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import './SupportQuickFaqGrid.css'

export const SupportQuickFaqGrid = ({ onSelectFaq }) => {
  const faqCategories = [
    {
      id: 'vault-access',
      title: 'Restablecer acceso y llaves de cifrado',
      icon: FiLock,
      iconColor: '#2563EB',
      linkText: 'Recuperación de credenciales',
    },
    {
      id: 'subscriptions',
      title: 'Gestionar suscripción y facturación',
      icon: FiCreditCard,
      iconColor: 'var(--color-theme-accent)',
      linkText: 'Cambiar o cancelar suscripción',
    },
    {
      id: 'installers',
      title: 'Descargas y licencias de software',
      icon: FiDownload,
      iconColor: 'var(--color-finance-accent)',
      linkText: 'Obtener instaladores oficiales',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="support-faq-wrapper">
      <Card radius="2xl" className="support-faq-container-card">
        <span className="support-faq-section-label">CONSULTAS FRECUENTES</span>

        <motion.div
          className="support-faq-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {faqCategories.map((item) => {
            const IconComp = item.icon
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="support-faq-item-card"
                onClick={() => onSelectFaq?.(item)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="support-faq-icon-box"
                  style={{ color: item.iconColor, backgroundColor: `${item.iconColor}15` }}
                >
                  <IconComp />
                </div>

                <h3 className="support-faq-item-title">{item.title}</h3>

                <span className="support-faq-item-link" style={{ color: item.iconColor }}>
                  {item.linkText} &gt;
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </Card>
    </section>
  )
}

export default SupportQuickFaqGrid
