import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { ScrollToTop } from './components/ScrollToTop'
import { getProduct } from './data'

import { Home } from './pages/Home'
import { UiPage } from './pages/Ui/UiPage'
import { SongsPage } from './pages/Songs/SongsPage'
import { RenamePage } from './pages/Rename/RenamePage'
import { FinancePage } from './pages/Finance/FinancePage'
import { SoportePage } from './pages/Soporte/SoportePage'
import { ChangelogPage } from './pages/Changelog/ChangelogPage'
import { DownloadPage } from './pages/Download/DownloadPage'
import { PrivacyPage } from './pages/Privacy/PrivacyPage'
import { CodePage } from './pages/Code/CodePage'
import { CalculatorPage } from './pages/Calculator/CalculatorPage'
import { NotFound } from './pages/NotFound/NotFound'

// Guardián para proteger las rutas de productos según el flag "enabled"
const ProtectedProductRoute = ({ productId, children }) => {
  const product = getProduct(productId)
  if (!product) {
    return <Navigate to="/404" replace />
  }
  return children
}

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        className={`app-loader ${!isLoading ? 'is-hidden' : ''}`}
        aria-hidden={!isLoading}
        aria-busy={isLoading}
      >
        <div className="loader-spinner" />
      </div>

      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Rutas Protegidas por "enabled: true/false" */}
            <Route
              path="/ui"
              element={
                <ProtectedProductRoute productId="ui">
                  <UiPage />
                </ProtectedProductRoute>
              }
            />
            <Route
              path="/songs"
              element={
                <ProtectedProductRoute productId="songs">
                  <SongsPage />
                </ProtectedProductRoute>
              }
            />
            <Route
              path="/rename"
              element={
                <ProtectedProductRoute productId="rename">
                  <RenamePage />
                </ProtectedProductRoute>
              }
            />
            <Route
              path="/finance"
              element={
                <ProtectedProductRoute productId="finance">
                  <FinancePage />
                </ProtectedProductRoute>
              }
            />

            <Route
              path="/code"
              element={
                <ProtectedProductRoute productId="code">
                  <CodePage />
                </ProtectedProductRoute>
              }
            />

            <Route
              path="/calculator"
              element={
                <ProtectedProductRoute productId="calculator">
                  <CalculatorPage />
                </ProtectedProductRoute>
              }
            />

            {/* Rutas Institucionales y de Servicio */}
            <Route path="/soporte" element={<SoportePage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/descargar" element={<DownloadPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
