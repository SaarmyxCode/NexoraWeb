import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import './Select.css'

export const Select = ({
  options = [],
  value,
  onChange,
  label,
  accentColor,
  className = '',
  ...props
}) => {
  const customStyle = accentColor ? { '--select-accent-color': accentColor } : undefined

  return (
    <div className={`select-wrapper ${className}`} style={customStyle}>
      {label && <label className="select-label">{label}</label>}
      <div className="select-container">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="select-element"
          {...props}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <FiChevronDown className="select-arrow" />
      </div>
    </div>
  )
}

export default Select
