import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// 1. Reveal con máscara (Efecto persiana/clip muy estético para títulos)
export const TextReveal = ({ children, delay = 0 }) => {
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// 2. Parallax al hacer Scroll (desplaza elementos a diferente velocidad)
export const ParallaxScroll = ({ children, offset = 40, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

// 3. Stagger Container (Coordinación en cascada para listas/grids)
export const StaggerGrid = ({ children, className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Item para usar DENTRO de StaggerGrid
export const StaggerItem = ({ children, className = '' }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// 4. Interactive Magnetic Button (Microinteracción: atrae el botón hacia el cursor)
export const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.35 // Intensidad de atracción
    const y = (clientY - (top + height / 2)) * 0.35

    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      style={{ display: 'inline-block', transition: 'transform 0.15s ease-out' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
