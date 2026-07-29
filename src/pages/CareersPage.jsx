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

export const CareersPage = () => {
  return (
    <section className="section careers">
      <div className="container">
        <div className="careers__header">
          <span className="eyebrow eyebrow--accent">Talento</span>
          <h1 className="h1">
            <TextReveal>Oportunidades Laborales</TextReveal>
          </h1>
          <p className="careers__sub">
            Buscamos ingenieros y creadores con obsesión por los detalles y la arquitectura limpia.
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
                  <a href="/contacto-comercial" className="btn btn--outline">
                    Postularme &rarr;
                  </a>
                </MagneticButton>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
