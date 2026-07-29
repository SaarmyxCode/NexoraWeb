import { TextReveal } from '../components/ui/Animations'
import '../styles/AboutPage.css'

export const AboutPage = () => {
  return (
    <section className="section about-hero">
      <div className="container">
        <span className="eyebrow eyebrow--accent">Compañía</span>
        <h1 className="h1 about-hero__title">
          <TextReveal>Nosotros</TextReveal>
        </h1>
        <p className="about-hero__lead">
          Somos una firma de ingeniería de software enfocada en la creación de productos digitales
          modulares, arquitectura web de alto rendimiento y soluciones técnicas para escala global.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <span className="about-card__tag">// Visión</span>
            <h2 className="h3">Precisión sobre artificio</h2>
            <p>
              Diseñamos software limpio, estructurado y sin dependencias innecesarias. Cada línea de
              código y cada decisión de interfaz responde a un propósito claro de negocio y
              rendimiento.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card__tag">// Ecosistema</span>
            <h2 className="h3">Desarrollo e Innovación</h2>
            <p>
              A través de nuestras marcas como <strong>Nexora Code</strong> y{' '}
              <strong>Nexora Songs</strong>, construimos infraestructura modular para empresas y
              creadores que requieren estándares técnicos superiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
