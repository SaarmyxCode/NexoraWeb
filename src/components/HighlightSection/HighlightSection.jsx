import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlay, FiPause } from 'react-icons/fi'
import './HighlightSection.css'

export const HighlightSection = ({
  title = 'Mira lo más destacado.',
  actionText = 'Ver documentación >',
  actionHref = '#docs',
  items = [],
}) => {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Autoplay continuo cuando se activa el botón de reproducción
  useEffect(() => {
    let interval = null
    if (isPlaying && items.length > 0) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % items.length
          scrollToIndex(nextIndex)
          return nextIndex
        })
      }, 3500)
    }
    return () => clearInterval(interval)
  }, [isPlaying, items.length])

  const handleScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, clientWidth } = sliderRef.current
    const index = Math.round(scrollLeft / clientWidth)
    setActiveIndex(index)
  }

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return
    const cardWidth = sliderRef.current.children[0]?.clientWidth || 0
    const gap = 24
    sliderRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  return (
    <section className="highlights-wrapper">
      <div className="highlight-main-card">
        <div className="highlights-header">
          <h2 className="highlights-title">{title}</h2>
          {actionText && (
            <Link to={actionHref} className="highlights-action-btn">
              {actionText}
            </Link>
          )}
        </div>

        <div className="highlights-slider-track" ref={sliderRef} onScroll={handleScroll}>
          {items.map((item, index) => (
            <div key={item.id || index} className="highlight-item-card">
              <div className="highlight-item-header">
                <h3
                  className="highlight-item-title"
                  style={item.titleColor ? { color: item.titleColor } : undefined}
                >
                  {item.title}
                </h3>
              </div>

              {item.imageSrc && (
                <div className="highlight-item-media">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt || item.title}
                    className="highlight-item-image"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="highlights-controls-bar">
          <div className="highlights-dots">
            {items.map((_, index) => (
              <button
                key={index}
                className={`highlight-dot ${activeIndex === index ? 'is-active' : ''}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="highlights-play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pausar reproductor' : 'Reproducir carrusel'}
          >
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
        </div>
      </div>
    </section>
  )
}
