export const LegalPage = () => {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="eyebrow eyebrow--accent">Normativa</span>
        <h1 className="h1" style={{ marginBottom: 'var(--space-6)' }}>
          Términos & Privacidad
        </h1>

        <article style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div>
            <h2 className="h3" style={{ marginBottom: 'var(--space-2)' }}>
              1. Términos de Uso
            </h2>
            <p>
              El acceso y uso de las plataformas y software de Nexora están sujetos a los presentes
              términos. Al hacer uso de nuestros servicios, aceptas cumplirlos plenamente.
            </p>
          </div>

          <hr className="hr" />

          <div>
            <h2 className="h3" style={{ marginBottom: 'var(--space-2)' }}>
              2. Propiedad Intelectual
            </h2>
            <p>
              Todo el código, marcas, arquitectura e interfaces desarrolladas bajo los productos
              Nexora Code, Nexora Songs y marcas asociadas son propiedad exclusiva de Nexora.
            </p>
          </div>

          <hr className="hr" />

          <div>
            <h2 className="h3" style={{ marginBottom: 'var(--space-2)' }}>
              3. Política de Privacidad
            </h2>
            <p>
              Garantizamos el tratamiento confidencial de la información recolectada a través de
              nuestros formularios y servicios, utilizada únicamente para la gestión de proyectos y
              soporte técnico.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
