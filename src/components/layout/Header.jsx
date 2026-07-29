import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <img src="/LogoNexoraBlanco.png" alt="Nexora Logo" />
        </Link>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
