import { Services } from '../components/ui/Services'

export const ServicesPage = () => {
  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow eyebrow--accent">Soluciones</span>
        <h1 className="h1" style={{ marginBottom: 'var(--space-6)' }}>
          Servicios
        </h1>
      </div>
      <Services />
    </div>
  )
}
