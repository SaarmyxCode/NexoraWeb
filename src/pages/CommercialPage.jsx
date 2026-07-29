import { TextReveal } from '../components/ui/Animations'
import '../styles/AboutPage.css'

export const CommercialPage = () => {
  return (
    <section className="section commercial-contact">
      <div className="container commercial-contact__grid">
        <div className="commercial-contact__info">
          <span className="eyebrow eyebrow--accent">Negocios</span>
          <h1 className="h1">
            <TextReveal>Contacto Comercial</TextReveal>
          </h1>
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
  )
}
