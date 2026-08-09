import React, { useState } from 'react'
import { CiCalculator1 } from 'react-icons/ci'
import { FiClock, FiTrash2, FiCopy, FiCheck } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './CalculatorSimulator.css'

export const CalculatorSimulator = ({ accentColor = '#64748B' }) => {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [history, setHistory] = useState([
    { eq: '1,250 * 1.19', res: '1,487.50' },
    { eq: '5,000 / 4', res: '1,250.00' },
  ])
  const [copied, setCopied] = useState(false)

  const handleNum = (val) => {
    if (display === '0') {
      setDisplay(val)
    } else {
      setDisplay(display + val)
    }
  }

  const handleOp = (op) => {
    setEquation(`${display} ${op} `)
    setDisplay('0')
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  const handleEqual = () => {
    if (!equation) return
    try {
      const sanitizedEq = (equation + display).replace(/×/g, '*').replace(/÷/g, '/')
      // eslint-disable-next-line no-eval
      const result = eval(sanitizedEq).toLocaleString('en-US', { maximumFractionDigits: 4 })

      const newHistory = [{ eq: equation + display, res: String(result) }, ...history]
      setHistory(newHistory.slice(0, 5))
      setDisplay(String(result))
      setEquation('')
    } catch {
      setDisplay('Error')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(display)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const customStyle = {
    '--calc-accent': accentColor,
    '--calc-accent-bg': `${accentColor}15`,
  }

  return (
    <section className="calc-simulator-wrapper" style={customStyle}>
      <Card radius="2xl" className="calc-simulator-card">
        {/* Badge Superior */}
        <div className="calc-simulator-badge">
          <Badge variant="version" color={accentColor}>
            CÓMPUTO DE ALTA PRECISIÓN
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h2 className="calc-simulator-title">Calculadora & Cinta Continua</h2>
        <span className="calc-simulator-subtitle">
          Evaluación de expresiones sin redondeos prematuros con historial local
        </span>

        {/* Descripción Principal */}
        <p className="calc-simulator-description">
          Realiza operaciones complejas, lleva el registro continuo de tus cómputos y convierte
          unidades sin salir de la interfaz.
        </p>

        {/* Icono Circular Central */}
        <div className="calc-icon-circle">
          <CiCalculator1 className="calc-circle-icon" />
        </div>

        {/* Subnota */}
        <p className="calc-simulator-subnote">
          Soporta entrada por teclado físico, funciones trigonométricas e historial exportable.
        </p>

        {/* Tarjeta Interior del Simulador */}
        <div className="calc-details-box">
          {/* Pantalla & Cinta */}
          <div className="calc-screen-container">
            <div className="calc-equation-display">{equation || '\u00A0'}</div>
            <div className="calc-main-display-row">
              <span className="calc-main-display">{display}</span>
              <button
                type="button"
                className="calc-copy-btn"
                onClick={handleCopy}
                title="Copiar resultado"
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>
          </div>

          <div className="calc-body-grid">
            {/* Teclado */}
            <div className="calc-keypad">
              <button type="button" className="calc-btn btn-action" onClick={handleClear}>
                C
              </button>
              <button type="button" className="calc-btn btn-op" onClick={() => handleOp('÷')}>
                ÷
              </button>
              <button type="button" className="calc-btn btn-op" onClick={() => handleOp('×')}>
                ×
              </button>
              <button type="button" className="calc-btn btn-op" onClick={() => handleOp('-')}>
                -
              </button>

              <button type="button" className="calc-btn" onClick={() => handleNum('7')}>
                7
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('8')}>
                8
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('9')}>
                9
              </button>
              <button type="button" className="calc-btn btn-op" onClick={() => handleOp('+')}>
                +
              </button>

              <button type="button" className="calc-btn" onClick={() => handleNum('4')}>
                4
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('5')}>
                5
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('6')}>
                6
              </button>
              <button
                type="button"
                className="calc-btn btn-equal"
                style={{ backgroundColor: accentColor }}
                onClick={handleEqual}
              >
                =
              </button>

              <button type="button" className="calc-btn" onClick={() => handleNum('1')}>
                1
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('2')}>
                2
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('3')}>
                3
              </button>

              <button type="button" className="calc-btn btn-zero" onClick={() => handleNum('0')}>
                0
              </button>
              <button type="button" className="calc-btn" onClick={() => handleNum('.')}>
                .
              </button>
            </div>

            {/* Panel Lateral: Cinta de Historial */}
            <div className="calc-history-panel">
              <div className="history-header">
                <span className="history-title">
                  <FiClock /> Cinta de Historial
                </span>
                {history.length > 0 && (
                  <button
                    type="button"
                    className="history-clear-btn"
                    onClick={() => setHistory([])}
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>

              <div className="history-list">
                {history.length === 0 ? (
                  <span className="history-empty">Sin historial reciente</span>
                ) : (
                  history.map((item, idx) => (
                    <div key={idx} className="history-item" onClick={() => setDisplay(item.res)}>
                      <span className="history-eq">{item.eq} =</span>
                      <span className="history-res">{item.res}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default CalculatorSimulator
