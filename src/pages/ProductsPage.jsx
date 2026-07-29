import { Products } from '../components/ui/Products'

export const ProductsPage = () => {
  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow eyebrow--accent">Catálogo</span>
        <h1 className="h1" style={{ marginBottom: 'var(--space-6)' }}>
          Productos
        </h1>
      </div>
      <Products />
    </div>
  )
}
