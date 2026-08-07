import React from 'react'
import './Toggle.css'

export const Toggle = ({
  checked = false,
  onChange,
  label,
  accentColor,
  type = 'switch', // 'switch' | 'checkbox'
  disabled = false,
  className = '',
}) => {
  const customStyle = accentColor ? { '--toggle-accent-color': accentColor } : undefined

  return (
    <label
      className={`toggle-wrapper toggle-${type} ${disabled ? 'is-disabled' : ''} ${className}`}
      style={customStyle}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => !disabled && onChange?.(e.target.checked)}
        disabled={disabled}
        className="toggle-input"
      />
      <span className="toggle-control" />
      {label && <span className="toggle-label">{label}</span>}
    </label>
  )
}

export default Toggle
