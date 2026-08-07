import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../../../../atoms/Card/Card'
import productsData from '../../../../data/products.json'
import './SupportProductsGrid.css'

export const SupportProductsGrid = ({ onSelectProduct }) => {
  const productList = Object.keys(productsData).map((key) => ({
    id: key,
    ...productsData[key],
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="support-products-wrapper">
      <Card radius="2xl" className="support-products-container-card">
        <span className="support-products-section-label">SELECCIONA UN PRODUCTO</span>

        <motion.div
          className="support-products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {productList.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%' }}
            >
              <Link
                to={`${product.route}#soporte`}
                className="support-product-item-card"
                onClick={() => onSelectProduct?.(product)}
              >
                <div className="support-product-media">
                  <img
                    src={product.mockup}
                    alt={product.name}
                    className="support-product-img"
                    loading="lazy"
                  />
                </div>
                <span className="support-product-name">{product.shortName || product.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </section>
  )
}

export default SupportProductsGrid
