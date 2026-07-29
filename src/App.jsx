import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { ProductsPage } from './pages/ProductsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { LegalPage } from './pages/LegalPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />

          {/* Rutas para Acerca de Nexora */}
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/oportunidades-laborales" element={<AboutPage />} />
          <Route path="/contacto-comercial" element={<AboutPage />} />

          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
