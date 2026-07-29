import { TextReveal, StaggerGrid, StaggerItem, MagneticButton } from '../components/ui/Animations'
import '../styles/AboutPage.css'

const JOBS_DATA = [
  {
    title: 'Frontend Engineer (React / CSS Architecture)',
    type: 'Remoto',
    level: 'Senior',
    description:
      'Buscamos desarrolladores enfocados en rendimiento, sistemas de diseño modulares y código semántico.',
  },
  {
    title: 'Backend Systems Architect',
    type: 'Remoto / Híbrido',
    level: 'Senior',
    description:
      'Diseño e implementación de microservicios e infraestructura escalable para el ecosistema Nexora.',
  },
]

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* SECCIÓN 1: NOSOTROS */}
      <section id="nosotros" className="section about-hero">
        <div className="container">
          <span className="eyebrow eyebrow--accent">Compañía</span>
          <h1 className="h1 about-hero__title">
            <TextReveal>Acerca de Nexora</TextReveal>
          </h1>
          <p className="about-hero__lead">
            Somos una firma de ingeniería de software enfocada en la creación de productos digitales
            modulares, arquitectura web de alto rendimiento y soluciones técnicas para escala
            global.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <span className="about-card__tag">// Visión</span>
              <h2 className="h3">Precisión sobre artificio</h2>
              <p>
                Diseñamos software limpio, estructurado y sin dependencias innecesarias. Cada línea
                de código y cada decisión de interfaz responde a un propósito claro de negocio y
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

      <hr className="hr" />

      {/* SECCIÓN 2: OPORTUNIDADES LABORALES */}
      <section id="oportunidades-laborales" className="section careers">
        <div className="container">
          <div className="careers__header">
            <span className="eyebrow eyebrow--accent">Talento</span>
            <h2 className="h2">
              <TextReveal>Oportunidades Laborales</TextReveal>
            </h2>
            <p className="careers__sub">
              Buscamos ingenieros y creadores con obsesión por los detalles y la arquitectura
              limpia.
            </p>
          </div>

          <StaggerGrid className="careers__list">
            {JOBS_DATA.map((job, i) => (
              <StaggerItem key={i}>
                <div className="job-card">
                  <div className="job-card__header">
                    <h3 className="h4">{job.title}</h3>
                    <div className="job-card__tags">
                      <span className="job-tag">{job.type}</span>
                      <span className="job-tag job-tag--accent">{job.level}</span>
                    </div>
                  </div>
                  <p className="job-card__desc">{job.description}</p>
                  <MagneticButton>
                    <a href="#contacto-comercial" className="btn btn--outline">
                      Postularme &rarr;
                    </a>
                  </MagneticButton>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <hr className="hr" />

      {/* SECCIÓN 3: CONTACTO COMERCIAL */}
      <section id="contacto-comercial" className="section commercial-contact">
        <div className="container commercial-contact__grid">
          <div className="commercial-contact__info">
            <span className="eyebrow eyebrow--accent">Negocios</span>
            <h2 className="h2">
              <TextReveal>Contacto Comercial</TextReveal>
            </h2>
            <p>
              ¿Interesado en licencias enterprise, alianzas estratégicas o desarrollo a medida?
              Nuestro equipo comercial y técnico evalúa cada solicitud de manera directa.
            </p>
            <div className="commercial-details">
              <div className="commercial-detail-item">
                <span className="eyebrow">Atención Directa</span>
                <p>ventas@nexora.com</p>
              </div>
              <div className="commercial-detail-item">
                <span className="eyebrow">Ubicación</span>
                <p>Colombia / Operación Remota Global</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__group">
              <label className="form__label">Empresa / Organización</label>
              <input type="text" className="form__input" required />
            </div>

            <div className="form__group">
              <label className="form__label">Correo Corporativo</label>
              <input type="email" className="form__input" required />
            </div>

            <div className="form__group">
              <label className="form__label">Tipo de Solicitud</label>
              <select className="form__input" defaultValue="licensing">
                <option value="licensing">Licenciamiento / Nexora Enterprise</option>
                <option value="development">Desarrollo de Sistemas a Medida</option>
                <option value="careers">Postulación / Talent Pool</option>
                <option value="other">Otro asunto comercial</option>
              </select>
            </div>

            <div className="form__group">
              <label className="form__label">Detalles del Proyecto</label>
              <textarea className="form__textarea" required></textarea>
            </div>

            <button type="submit" className="btn btn--primary">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
