import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { ScrollToTop } from './components/ScrollToTop'

import { Home } from './pages/Home'
import { ThemePage } from './pages/Theme/ThemePage'
import { SongsPage } from './pages/Songs/SongsPage'
import { RenamePage } from './pages/Rename/RenamePage'
import { FinancePage } from './pages/Finance/FinancePage'
import { SoportePage } from './pages/Soporte/SoportePage'
import { NotFound } from './pages/NotFound/NotFound'
import { DownloadPage } from './pages/Download/DownloadPage'

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula el tiempo de carga inicial de la app
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loader General */}
      <div className={`app-loader ${!isLoading ? 'is-hidden' : ''}`}>
        <div className="loader-spinner" />
      </div>

      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theme" element={<ThemePage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/rename" element={<RenamePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/soporte" element={<SoportePage />} />
            <Route path="/descargar" element={<DownloadPage />} />

            {/* Captura cualquier ruta que no coincida */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
