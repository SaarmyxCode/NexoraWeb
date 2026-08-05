import { HeroCard } from '../components/HeroCard/HeroCard'
import { GridContainer } from '../components/GridCard/GridContainer'
import { GridCard } from '../components/GridCard/GridCard'
import './Home.css'

export const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Principal THEME */}
      <HeroCard
        id="hero-theme"
        title="THEME"
        to="/theme"
        titleColor="#E11F2F"
        isClickable={true}
        imageSrc="/IphonesMockup.png"
        imageAlt="Nexora Theme"
      />

      <HeroCard
        id="hero-finance"
        title="FINANCE"
        to="/finance"
        titleColor="#28C864"
        isClickable={true}
        imageSrc="/IphonesMockup.png"
        imageAlt="Nexora Finance"
      />

      {/* Cuadrícula Bento 2x2 */}
      <GridContainer>
        <GridCard
          id="grid-songs"
          title="SONGS"
          to="/songs"
          titleColor="#2563EB"
          isClickable={true}
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Songs"
        />

        <GridCard
          id="grid-rename"
          title="RENAME"
          to="/rename"
          titleColor="#EAB308"
          isClickable={true}
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Rename"
        />

        <GridCard
          id="grid-finance"
          title="FINANCE"
          to="/finance"
          titleColor="#10B981"
          isClickable={true}
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Finance"
        />

        <GridCard
          id="grid-soporte"
          title="SOPORTE"
          to="/soporte"
          titleColor="#8B5CF6"
          isClickable={true}
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Soporte"
        />
      </GridContainer>
    </div>
  )
}

export default Home
