import { motion, useScroll, useSpring } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  const location = useLocation()
  const { scrollYProgress } = useScroll()

  // Suavizado de la barra de progreso
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Indicador de lectura superior */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: 'var(--color-accent)',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />

      <Header />

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ flex: 1, paddingTop: 'var(--header-h)' }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  )
}
