import './Services.css'

const SERVICES_DATA = [
  {
    number: '01',
    title: 'Desarrollo Web & Software',
    description:
      'Arquitecturas modulares, plataformas escalables e interfaces modernas optimizadas para rendimiento.',
  },
  {
    number: '02',
    title: 'Sistemas a Medida',
    description:
      'Soluciones técnicas hechas a la medida de tu infraestructura y flujo de operaciones.',
  },
  {
    number: '03',
    title: 'Consultoría Digital',
    description:
      'Auditoría de código, optimización de rendimiento y buenas prácticas en desarrollo frontend/backend.',
  },
]

export const Services = () => {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="services__header">
          <span className="eyebrow eyebrow--accent">Capacidades</span>
          <h2 className="h2">Servicios Principales</h2>
        </div>

        <div className="services__grid">
          {SERVICES_DATA.map((service) => (
            <article key={service.number} className="service-card">
              <span className="service-card__number">// {service.number}</span>
              <h3 className="h4 service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
