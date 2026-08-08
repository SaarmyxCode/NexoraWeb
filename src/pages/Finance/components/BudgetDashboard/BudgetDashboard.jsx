import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiDollarSign, FiPieChart, FiArrowUpRight, FiLock } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './BudgetDashboard.css'

export const BudgetDashboard = ({ accentColor = 'var(--color-finance-accent)' }) => {
  const [activeTab, setActiveTab] = useState('mensual')

  const metrics = [
    { label: 'Ingresos Totales', amount: '$4,250.00', change: '+12.5%', isPositive: true },
    { label: 'Gastos Fijos', amount: '$1,820.00', change: '-3.2%', isPositive: true },
    { label: 'Ahorro Proyectado', amount: '$2,430.00', change: '+18.4%', isPositive: true },
  ]

  const categories = [
    {
      name: 'Desarrollo & Infraestructura',
      spent: 650,
      total: 1000,
      color: 'var(--color-finance-accent)',
    },
    { name: 'Suscripciones & Licencias', spent: 320, total: 400, color: '#3B82F6' },
    { name: 'Fondo de Emergencia', spent: 850, total: 1000, color: '#8B5CF6' },
  ]

  const customStyle = {
    '--finance-accent': accentColor,
    '--finance-accent-bg': `${accentColor}15`,
  }

  return (
    <section className="finance-dashboard-wrapper" style={customStyle}>
      <Card radius="2xl" className="finance-dashboard-card">
        {/* Badge Superior */}
        <div className="finance-dashboard-badge">
          <Badge variant="version" color={accentColor}>
            FINANCE ENGINE
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h2 className="finance-dashboard-title">Panel Financiero Inteligente</h2>
        <span className="finance-dashboard-subtitle">
          Procesamiento de presupuestos y proyecciones en tiempo real 100% local
        </span>

        {/* Descripción Principal */}
        <p className="finance-dashboard-description">
          Visualiza el flujo de caja de tus proyectos, proyecta metas de ahorro y monitorea tus
          gastos fijos con cifrado Zero-Knowledge.
        </p>

        {/* Icono Circular Central */}
        <div className="finance-icon-circle">
          <FiDollarSign className="finance-circle-icon" />
        </div>

        {/* Subnota de Privacidad */}
        <p className="finance-dashboard-subnote">
          <FiLock style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Tus datos financieros jamás se transmiten a servidores externos.
        </p>

        {/* Tarjeta Interior del Dashboard */}
        <div className="finance-details-box">
          <div className="finance-details-header">
            <span className="finance-details-label">SIMULACIÓN DE MÉTRICAS EN VIVO</span>
            <div className="finance-tabs-toggle">
              {['mensual', 'anual'].map((period) => (
                <button
                  key={period}
                  type="button"
                  className={`finance-tab-btn ${activeTab === period ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(period)}
                >
                  {period.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Grilla de Métricas Principales */}
          <div className="finance-metrics-grid">
            {metrics.map((item, idx) => (
              <div key={idx} className="finance-metric-card">
                <span className="finance-metric-label">{item.label}</span>
                <div className="finance-metric-value-group">
                  <span className="finance-metric-amount">{item.amount}</span>
                  <span className="finance-metric-badge">
                    <FiArrowUpRight /> {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Barras de Progreso por Categorías */}
          <div className="finance-categories-box">
            <span className="finance-categories-title">Presupuestos por Categoría</span>
            <div className="finance-categories-list">
              {categories.map((cat, idx) => {
                const percentage = Math.round((cat.spent / cat.total) * 100)
                return (
                  <div key={idx} className="finance-category-row">
                    <div className="finance-category-info">
                      <span className="finance-category-name">{cat.name}</span>
                      <span className="finance-category-values">
                        ${cat.spent} / ${cat.total} USD ({percentage}%)
                      </span>
                    </div>
                    <div className="finance-progress-bar">
                      <motion.div
                        className="finance-progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ backgroundColor: cat.color }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default BudgetDashboard
