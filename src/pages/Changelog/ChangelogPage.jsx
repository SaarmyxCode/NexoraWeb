import React, { useState } from 'react'
import { getChangelogSections } from '../../utils/getChangelog'
import { usePageTheme } from '../../hooks/usePageTheme'
import { SecondaryNav } from '../../components/SecondaryNav/SecondaryNav'
import { ChangelogCard } from './components/ChangelogCard'
import { AnimatedTabContent } from '../../components/Animated/AnimatedTabContent'
import './ChangelogPage.css'

export const ChangelogPage = () => {
  usePageTheme('changelog')

  const changelogSections = getChangelogSections()
  const [activeTab, setActiveTab] = useState(changelogSections[0]?.id || 'theme')

  const currentSection = changelogSections.find((s) => s.id === activeTab) || changelogSections[0]

  const changelogNavLinks = changelogSections.map((section) => ({
    id: section.id,
    label: section.title,
    isActive: activeTab === section.id,
    onClick: (e) => {
      e.preventDefault()
      setActiveTab(section.id)
    },
  }))

  return (
    <div className="changelog-page">
      <SecondaryNav title="Novedades" links={changelogNavLinks} isSticky={true} />

      <AnimatedTabContent activeKey={currentSection.id}>
        <ChangelogCard section={currentSection} />
      </AnimatedTabContent>
    </div>
  )
}

export default ChangelogPage
