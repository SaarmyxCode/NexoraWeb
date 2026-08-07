import { FiLayers, FiMusic, FiFolderPlus, FiTrendingUp, FiShield, FiCpu } from 'react-icons/fi'
import changelogData from '../data/changelog.json'

const iconMap = {
  FiLayers,
  FiMusic,
  FiFolderPlus,
  FiTrendingUp,
  FiShield,
  FiCpu,
}

export const getChangelogSections = () => {
  return Object.entries(changelogData).map(([id, item]) => ({
    id,
    title: item.title || 'Actualización',
    version: item.version || 'v1.0.0',
    date: item.date || 'Reciente',
    badgeColor: item.badgeColor || 'var(--color-primary)',
    icon: iconMap[item.icon] || FiLayers,
    text: item.text || 'Sin descripción disponible.',
    subtext: item.subtext || '',
    changes: Array.isArray(item.changes) ? item.changes : [],
  }))
}
