import { MainLayout } from './layout/MainLayout'
import { HeroCard } from './components/HeroCard/HeroCard'

export function App() {
  return (
    <MainLayout>
      {/* 1. Theme con título Rojo y enlace a /theme */}
      <HeroCard
        id="theme"
        title="THEME"
        href="/theme"
        titleColor="#E11F2F"
        imageSrc="/IphonesMockup.png"
        imageAlt="Nexora Theme"
      />

      {/* 2. Finance con título Verde y enlace a /finance */}
      <HeroCard
        id="finance"
        title="FINANCE"
        href="/finance"
        titleColor="#28C864"
        imageSrc="/IphonesMockup.png"
        imageAlt="Nexora Finance"
      />
    </MainLayout>
  )
}

export default App
