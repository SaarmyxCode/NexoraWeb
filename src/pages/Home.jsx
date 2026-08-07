import React from 'react'
import productsData from '../data/products.json'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { GridContainer, GridCard } from '../components/GridCard/GridCard'
import './Home.css'

export const Home = () => {
  // Extraemos los productos mapeados desde el JSON centralizado
  const { theme, finance, songs, rename, soporte } = productsData

  return (
    <div className="home-container">
      {/* Banner Principal THEME */}
      <HeroCard
        id="hero-theme"
        title={theme.shortName}
        to={theme.route}
        titleColor={theme.accentColor}
        isClickable={true}
        imageSrc={theme.mockup}
        imageAlt={`Banner de ${theme.name}`}
      />

      {/* Banner Secundario FINANCE */}
      <HeroCard
        id="hero-finance"
        title={finance.shortName}
        to={finance.route}
        titleColor={finance.accentColor}
        isClickable={true}
        imageSrc={finance.mockup}
        imageAlt={`Banner de ${finance.name}`}
      />

      {/* Cuadrícula Bento 2x2 */}
      <GridContainer>
        <GridCard
          id="grid-songs"
          title={songs.shortName}
          to={songs.route}
          titleColor={songs.accentColor}
          isClickable={true}
          imageSrc={songs.mockup}
          imageAlt={`Grid de ${songs.name}`}
        />

        <GridCard
          id="grid-rename"
          title={rename.shortName}
          to={rename.route}
          titleColor={rename.accentColor}
          isClickable={true}
          imageSrc={rename.mockup}
          imageAlt={`Grid de ${rename.name}`}
        />

        <GridCard
          id="grid-finance"
          title={finance.shortName}
          to={finance.route}
          titleColor={finance.accentColor}
          isClickable={true}
          imageSrc={finance.mockup}
          imageAlt={`Grid de ${finance.name}`}
        />

        <GridCard
          id="grid-soporte"
          title={soporte ? soporte.shortName : 'SOPORTE'}
          to={soporte ? soporte.route : '/soporte'}
          titleColor={soporte ? soporte.accentColor : '#8B5CF6'}
          isClickable={true}
          imageSrc={soporte ? soporte.mockup : '/MacBookMockup.png'}
          imageAlt="Grid de Soporte Técnico"
        />
      </GridContainer>
    </div>
  )
}

export default Home
