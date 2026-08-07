import React from 'react'
import './Badge.css'

export const Badge = ({
  children,
  color,
  variant = 'version', // 'version' | 'status' | 'outline'
  size = 'md', // 'sm' | 'md'
  className = '',
}) => {
  const customStyle = color ? { '--badge-color': color } : undefined

  return (
    <span className={`badge badge-${variant} badge-${size} ${className}`} style={customStyle}>
      {variant === 'status' && <span className="badge-status-dot" />}
      {children}
    </span>
  )
}

export default Badge
