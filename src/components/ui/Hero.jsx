import { motion } from 'framer-motion'
import './Hero.css'

export const Hero = () => {
  return (
    <section id="inicio" className="section hero">
      <div className="container hero__container">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow eyebrow--accent"
        >
          Sistemas & Software
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h1 hero__title"
        >
          Ingeniería digital con precisión técnica.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero__description"
        >
          Construimos arquitectura de software modular y plataformas web optimizadas para escala.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero__actions"
        >
          <a href="#contacto" className="btn btn--primary">
            Iniciar Proyecto
          </a>
          <a href="#servicios" className="btn btn--outline">
            Ver Servicios
          </a>
        </motion.div>
      </div>
    </section>
  )
}
