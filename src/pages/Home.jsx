import React from 'react'
import { activeProducts, getProduct } from '../data'
import { usePageTheme } from '../hooks/usePageTheme'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { GridContainer, GridCard } from '../components/GridCard/GridCard'
import './Home.css'

export const Home = () => {
  usePageTheme('home')

  const codeProduct = getProduct('code')
  const uiProduct = getProduct('ui')
  const financeProduct = getProduct('finance')
  const renameProduct = getProduct('rename')
  const songsProduct = getProduct('songs')

  return (
    <div className="home-container">
      {/* Banner Principal Ui */}
      {/* {uiProduct && <HeroCard product={uiProduct} isClickable />} */}

      {/* Banner Secundario Code */}
      {codeProduct && <HeroCard product={codeProduct} isClickable />}

      {/* Banner Terceario Rename */}
      {renameProduct && <HeroCard product={renameProduct} isClickable />}

      {/* Cuadrícula Bento */}
      <GridContainer>
        {/* {renameProduct && <GridCard product={renameProduct} isClickable />}
        {songsProduct && <GridCard product={songsProduct} isClickable />} */}
        {/* {uiProduct && <GridCard product={uiProduct} isClickable />} */}
      </GridContainer>
    </div>
  )
}

export default Home
