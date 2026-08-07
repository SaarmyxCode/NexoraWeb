import './GridCard.css'

export const GridContainer = ({ children }) => {
  return (
    <section className="grid-container-wrapper">
      <div className="grid-container">{children}</div>
    </section>
  )
}
