import React from 'react'
import { activeProducts, getProduct } from '../data'
import { usePageTheme } from '../hooks/usePageTheme'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { GridContainer, GridCard } from '../components/GridCard/GridCard'
import './Home.css'

export const Home = () => {
  usePageTheme('home')

  const codeProduct = getProduct('code')
  const themeProduct = getProduct('theme')
  const financeProduct = getProduct('finance')
  const renameProduct = getProduct('rename')
  const songsProduct = getProduct('songs')

  return (
    <div className="home-container">
      {codeProduct && <HeroCard product={codeProduct} isClickable />}

      {/* Banner Principal Theme */}
      {themeProduct && <HeroCard product={themeProduct} isClickable />}

      {/* Banner Secundario FINANCE */}
      {financeProduct && <HeroCard product={financeProduct} isClickable />}

      {/* Cuadrícula Bento */}
      <GridContainer>
        {renameProduct && <GridCard product={renameProduct} isClickable />}
        {songsProduct && <GridCard product={songsProduct} isClickable />}
      </GridContainer>
    </div>
  )
}

export default Home
