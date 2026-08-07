import React from 'react'
import './Input.css'

export const Input = ({
  label,
  error,
  icon: Icon,
  variant = 'standard', // 'standard' | 'code'
  accentColor,
  className = '',
  isTextArea = false,
  rows = 4,
  ...props
}) => {
  const customStyle = accentColor ? { '--input-accent-color': accentColor } : undefined
  const InputTag = isTextArea ? 'textarea' : 'input'

  return (
    <div
      className={`input-field-wrapper ${error ? 'has-error' : ''} ${className}`}
      style={customStyle}
    >
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {Icon && <Icon className="input-icon" />}
        <InputTag
          className={`input-element variant-${variant} ${Icon ? 'has-icon' : ''}`}
          rows={isTextArea ? rows : undefined}
          {...props}
        />
      </div>
      {error && <span className="input-error-msg">{error}</span>}
    </div>
  )
}

export default Input
