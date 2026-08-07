import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const MainLayout = ({ children }) => {
  return (
    <div className="layout-app">
      <Header logoSrc="/logos/LogoNexoraGrisG.png" />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}
