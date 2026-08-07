import { useNavigate } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import './NotFound.css'

export const NotFound = () => {
  const navigate = useNavigate()
  const revealRef = useReveal()

  return (
    <div className="not-found-container">
      <div ref={revealRef} className="not-found-card reveal-on-scroll">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Página no encontrada</h2>
        <p className="not-found-description">
          La ruta a la que intentas acceder no existe o ha sido movida.
        </p>
        <button type="button" className="not-found-btn" onClick={() => navigate('/')}>
          Volver al Inicio
        </button>
      </div>
    </div>
  )
}

export default NotFound
