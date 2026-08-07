import React from 'react'
import productsData from '../data/products.json'
import { usePageTheme } from '../hooks/usePageTheme'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { GridContainer, GridCard } from '../components/GridCard/GridCard'
import './Home.css'

export const Home = () => {
  // Garantiza el tema por defecto/claro en el inicio
  usePageTheme('home')

  const { theme, rename, songs, finance, soporte } = productsData

  return (
    <div className="home-container">
      {/* Banner Principal THEME */}
      {theme && <HeroCard productId="theme" isClickable />}

      {/* Banner Secundario FINANCE (Opcional) */}
      {/* {finance && <HeroCard productId="finance" isClickable />} */}

      {/* Cuadrícula Bento */}
      <GridContainer>
        {/* {songs && <GridCard productId="songs" isClickable />} */}

        {rename && <GridCard productId="rename" isClickable />}

        {/* {finance && <GridCard productId="finance" isClickable />} */}

        {/* {soporte && <GridCard productId="soporte" isClickable />} */}
      </GridContainer>
    </div>
  )
}

export default Home
