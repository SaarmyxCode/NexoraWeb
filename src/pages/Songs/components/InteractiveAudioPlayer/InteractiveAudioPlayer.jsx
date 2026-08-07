import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiPause, FiMusic, FiSkipForward, FiSkipBack, FiVolume2 } from 'react-icons/fi'
import { Card } from '../../../../atoms/Card/Card'
import { Badge } from '../../../../atoms/Badge/Badge'
import './InteractiveAudioPlayer.css'

export const InteractiveAudioPlayer = ({ accentColor = '#EC4899' }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTrack, setActiveTrack] = useState(0)

  const tracks = [
    {
      title: 'Synthwave Memories',
      artist: 'Nexora Audio Engine',
      duration: '3:42',
      format: 'FLAC 24-bit',
    },
    {
      title: 'Acoustic Horizon',
      artist: 'Midnight Sessions',
      duration: '4:15',
      format: 'MP3 320kbps',
    },
    {
      title: 'Cybernetic Rhythm',
      artist: 'Digital Pulse',
      duration: '2:58',
      format: 'WAV Lossless',
    },
  ]

  const currentTrack = tracks[activeTrack]

  const customStyle = {
    '--songs-accent': accentColor,
    '--songs-accent-bg': `${accentColor}15`,
  }

  return (
    <section className="player-release-wrapper" style={customStyle}>
      <Card radius="2xl" className="player-release-card">
        {/* Badge Superior */}
        <div className="player-release-badge">
          <Badge variant="version" color={accentColor}>
            REPRODUCTOR & ENGINE
          </Badge>
        </div>

        {/* Encabezado Centrado */}
        <h2 className="player-release-title">Audio de Alta Fidelidad</h2>
        <span className="player-release-subtitle">
          Motor de procesamiento de audio en tiempo real con soporte lossless
        </span>

        {/* Descripción Principal */}
        <p className="player-release-description">
          Organiza, normaliza decibeles y analiza el espectro de frecuencias de tus colecciones
          musicales sin pérdida de calidad.
        </p>

        {/* Icono Circular con Pulso */}
        <div className="player-icon-circle">
          <FiMusic className="player-circle-icon" />
        </div>

        {/* Subnota */}
        <p className="player-release-subnote">
          Edición masiva de etiquetas ID3 v2.4 y portadas de álbumes en lote.
        </p>

        {/* Tarjeta Interior del Reproductor */}
        <div className="player-details-box">
          <span className="player-details-label">VISTA PREVIA DEL MOTOR DE AUDIO</span>

          <div className="player-interface-card">
            <div className="player-track-info">
              <div className="player-album-art">
                <FiMusic />
              </div>
              <div className="player-meta">
                <h4 className="player-track-title">{currentTrack.title}</h4>
                <p className="player-track-artist">{currentTrack.artist}</p>
                <span className="player-track-badge">{currentTrack.format}</span>
              </div>
            </div>

            {/* Visualizador de Forma de Onda (Waveform) */}
            <div className="player-waveform">
              {[
                40, 70, 30, 85, 60, 100, 45, 90, 75, 50, 95, 65, 30, 80, 55, 90, 40, 70, 85, 30,
              ].map((height, idx) => (
                <motion.div
                  key={idx}
                  className="waveform-bar"
                  animate={{
                    height: isPlaying
                      ? [`${height}%`, `${Math.max(15, (height + 30) % 100)}%`, `${height}%`]
                      : '20%',
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8 + (idx % 5) * 0.1,
                    ease: 'easeInOut',
                  }}
                  style={{ backgroundColor: isPlaying ? accentColor : 'var(--color-light-border)' }}
                />
              ))}
            </div>

            {/* Controles de Reproducción */}
            <div className="player-controls">
              <button
                type="button"
                className="player-control-btn"
                onClick={() => setActiveTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1))}
              >
                <FiSkipBack />
              </button>

              <button
                type="button"
                className="player-play-btn"
                style={{ backgroundColor: accentColor }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <FiPause /> : <FiPlay style={{ marginLeft: '2px' }} />}
              </button>

              <button
                type="button"
                className="player-control-btn"
                onClick={() => setActiveTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0))}
              >
                <FiSkipForward />
              </button>

              <div className="player-volume-box">
                <FiVolume2 className="player-volume-icon" />
                <div className="player-volume-bar">
                  <div className="player-volume-fill" style={{ backgroundColor: accentColor }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default InteractiveAudioPlayer
