import { useNavigate } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Página no encontrada</h2>
        <p className="not-found-description">
          La ruta a la que intentas acceder no existe o ha sido movida.
        </p>
        <button className="not-found-btn" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
    </div>
  )
}

export default NotFound
