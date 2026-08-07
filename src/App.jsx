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
import { ChangelogPage } from './pages/Changelog/ChangelogPage'
import { DownloadPage } from './pages/Download/DownloadPage'
import { PrivacyPage } from './pages/Privacy/PrivacyPage'
import { NotFound } from './pages/NotFound/NotFound'

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
      {/* Loader General con soporte para accesibilidad */}
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
            <Route path="/theme" element={<ThemePage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/rename" element={<RenamePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/soporte" element={<SoportePage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/descargar" element={<DownloadPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />

            {/* Captura de rutas no encontradas (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
