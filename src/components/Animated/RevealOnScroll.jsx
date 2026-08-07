import React from 'react'
import { motion } from 'framer-motion'

export const RevealOnScroll = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple Smooth Easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
