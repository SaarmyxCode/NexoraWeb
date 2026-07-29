import { motion } from 'framer-motion'
import { TextReveal, StaggerGrid, StaggerItem, MagneticButton } from './Animations'
import './Products.css'

const PRODUCTS_DATA = [
  {
    id: 'nexora-code',
    name: 'Nexora Code',
    status: 'Activo',
    description:
      'Ecosistema de herramientas y boilerplate modular para desarrollo rápido de software empresarial.',
  },
  {
    id: 'nexora-songs',
    name: 'Nexora Songs',
    status: 'Activo',
    description:
      'Plataforma de gestión e integración de catálogo musical y licencias de distribución.',
  },
]

export const Products = () => {
  return (
    <section id="productos" className="section products">
      <div className="container">
        <div className="products__header">
          <span className="eyebrow eyebrow--accent">Ecosistema</span>
          <h2 className="h2">
            <TextReveal>Productos Existentes</TextReveal>
          </h2>
        </div>

        {/* Carga coordinada en cascada */}
        <StaggerGrid className="products__grid">
          {PRODUCTS_DATA.map((product) => (
            <StaggerItem key={product.id}>
              <motion.article
                whileHover={{
                  borderColor: 'var(--color-ink-100)',
                  backgroundColor: 'var(--color-surface-sunken)',
                }}
                transition={{ duration: 0.2 }}
                className="product-card"
              >
                <div>
                  <div className="product-card__header">
                    <h3 className="h3 product-card__title">{product.name}</h3>
                    <span className="product-card__badge">{product.status}</span>
                  </div>
                  <p className="product-card__description">{product.description}</p>
                </div>

                <div className="product-card__footer">
                  <MagneticButton>
                    <a href={`#${product.id}`} className="product-card__link">
                      Explorar Producto &rarr;
                    </a>
                  </MagneticButton>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
