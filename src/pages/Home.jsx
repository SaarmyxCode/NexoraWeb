import { HeroCard } from '../components/HeroCard/HeroCard'
import { GridContainer } from '../components/GridCard/GridContainer'
import { GridCard } from '../components/GridCard/GridCard'

export const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Principal THEME */}
      <HeroCard
        id="theme"
        title="THEME"
        to="/theme"
        titleColor="#E11F2F"
        isClickable="true"
        imageSrc="/IphonesMockup.png"
        imageAlt="Nexora Theme"
      />

      <HeroCard
        id="finance"
        title="FINANCE"
        to="/finance"
        titleColor="#28C864"
        isClickable="true"
        imageSrc="/IphonesMockup.png"
        imageAlt="Nexora Theme"
      />

      {/* Cuadrícula 2x2 */}
      <GridContainer>
        <GridCard
          id="songs"
          title="SONGS"
          to="/songs"
          titleColor="#2563EB"
          isClickable="true"
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Songs"
        />

        <GridCard
          id="rename"
          title="RENAME"
          to="/rename"
          titleColor="#EAB308"
          isClickable="true"
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Rename"
        />

        <GridCard
          id="finance"
          title="FINANCE"
          to="/finance"
          titleColor="#10B981"
          isClickable="true"
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Finance"
        />

        <GridCard
          id="soporte"
          title="SOPORTE"
          to="/soporte"
          titleColor="#8B5CF6"
          isClickable="true"
          imageSrc="/IphonesMockup.png"
          imageAlt="Nexora Soporte"
        />
      </GridContainer>
    </div>
  )
}
