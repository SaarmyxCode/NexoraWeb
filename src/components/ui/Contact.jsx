import './Contact.css'

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para enviar formulario
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow eyebrow--accent">Contacto</span>
          <h2 className="h2">Inicia un proyecto</h2>
          <p>
            ¿Tienes en mente un desarrollo o necesitas infraestructura técnica a medida? Escríbenos
            y nos pondremos en contacto.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Nombre
            </label>
            <input type="text" id="name" className="form__input" required />
          </div>

          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Correo electrónico
            </label>
            <input type="email" id="email" className="form__input" required />
          </div>

          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Mensaje
            </label>
            <textarea id="message" className="form__textarea" required></textarea>
          </div>

          <button type="submit" className="btn btn--primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
