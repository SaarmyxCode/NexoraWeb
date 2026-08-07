import React from 'react'
import './Button.css'

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'icon'
  size = 'md', // 'sm' | 'md' | 'lg'
  accentColor,
  isFullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const customStyle = accentColor ? { '--btn-accent-color': accentColor } : undefined

  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${isFullWidth ? 'btn-full' : ''} ${className}`}
      style={customStyle}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
