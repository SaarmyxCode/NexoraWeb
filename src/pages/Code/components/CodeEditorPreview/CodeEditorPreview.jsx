import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiPlay, FiTerminal, FiCopy, FiCheck } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './CodeEditorPreview.css'

export const CodeEditorPreview = ({ accentColor = 'var(--color-code-accent)' }) => {
  const [activeFile, setActiveFile] = useState('styles.css')
  const [copied, setCopied] = useState(false)
  const [output, setOutput] = useState(
    'Pronto para ejecutar. Presiona "Ejecutar" para compilar tokens.',
  )

  const codeSnippets = {
    'styles.css': `:root {
  --nexora-primary: ${accentColor};
  --nexora-bg: #0d1117;
  --nexora-radius: 16px;
  --nexora-contrast: 100%;
}

.button-primary {
  background: var(--nexora-primary);
  border-radius: var(--nexora-radius);
  color: #ffffff;
  padding: 12px 24px;
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}`,
    'main.js': `import { NexoraTokens } from '@nexora/theme'

const engine = new NexoraTokens({
  mode: 'dark',
  zeroLatency: true
})

engine.on('compile', (tokens) => {
  console.log('Design Tokens compilados localmente en 2ms')
})

engine.init()`,
  }

  const handleRun = () => {
    setOutput(`[BUILD SUCCESS] Compilado en 3ms
✔ Design Tokens parseados sin errores.
✔ 0 dependencias externas detectadas.
✔ Memoria consumida: 4.2 MB`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeFile])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const customStyle = {
    '--code-accent': accentColor,
    '--code-accent-bg': `${accentColor}15`,
  }

  return (
    <section className="code-editor-wrapper" style={customStyle}>
      <Card radius="2xl" className="code-editor-card">
        {/* Badge Superior */}
        <div className="code-editor-badge">
          <Badge variant="version" color={accentColor}>
            IDE & EDITOR ENGINE
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h2 className="code-editor-title">Editor Ligero de Zero-Latency</h2>
        <span className="code-editor-subtitle">
          Entorno de desarrollo ultra rápido enfocado en componentes y Design Tokens
        </span>

        {/* Descripción Principal */}
        <p className="code-editor-description">
          Edita código, valida sintaxis y previsualiza tus interfaces en tiempo real sin sobrecargar
          la memoria de tu equipo.
        </p>

        {/* Icono Circular Central */}
        <div className="code-icon-circle">
          <FiCode className="code-circle-icon" />
        </div>

        {/* Subnota */}
        <p className="code-editor-subnote">
          Compatible con los atajos y sintaxis de VS Code, Vim y SubLime.
        </p>

        {/* Tarjeta Interior del Editor */}
        <div className="code-details-box">
          <div className="code-details-header">
            <div className="code-window-controls">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>

            {/* Pestañas de Archivos */}
            <div className="code-tabs">
              {Object.keys(codeSnippets).map((filename) => (
                <button
                  key={filename}
                  type="button"
                  className={`code-tab ${activeFile === filename ? 'is-active' : ''}`}
                  onClick={() => setActiveFile(filename)}
                >
                  {filename}
                </button>
              ))}
            </div>

            <button type="button" className="code-copy-btn" onClick={handleCopy}>
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
          </div>

          {/* Área del Código */}
          <div className="code-body font-mono">
            <pre>
              <code>{codeSnippets[activeFile]}</code>
            </pre>
          </div>

          {/* Consola e Inspección */}
          <div className="code-console">
            <div className="console-header">
              <span className="console-title">
                <FiTerminal /> Consola de Ejecución Local
              </span>
              <button
                type="button"
                className="code-run-btn"
                style={{ backgroundColor: accentColor }}
                onClick={handleRun}
              >
                <FiPlay /> Ejecutar
              </button>
            </div>
            <pre className="console-output">{output}</pre>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default CodeEditorPreview
