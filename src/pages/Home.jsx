import { HeroCard } from '../components/HeroCard/HeroCard'

export const Home = () => {
  const heroSections = [
    {
      id: 'theme',
      title: 'THEME',
      imageSrc: '/Macbook_Mockup.png',
      imageAlt: 'Demostración de temas e interfaz Nexora',
    },
    {
      id: 'finance',
      title: 'FINANCE',
      imageSrc: '/Macbook_Mockup.png',
      imageAlt: 'Panel financiero Nexora Finance',
    },
  ]

  return (
    <div className="home-container">
      {/* Mapeo dinámico de secciones principales */}
      {heroSections.map((section) => (
        <HeroCard
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
        />
      ))}
    </div>
  )
}
