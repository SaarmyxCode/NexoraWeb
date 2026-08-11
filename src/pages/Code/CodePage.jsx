import React, { useState } from 'react'
import { FiCode } from 'react-icons/fi'
import { getProduct } from '../../data'
import { usePageTheme } from '../../hooks/usePageTheme'
import changelogData from '../../data/changelog.json'

// Componentes Generales
import { HeroCard } from '../../components/HeroCard/HeroCard'
import { SubHeader } from '../../components/SubHeader/SubHeader'
import { FeatureStatsCard } from '../../components/FeatureStatsCard/FeatureStatsCard'
import { ChangelogCard } from '../../components/pages/ChangelogCard/ChangelogCard'
import { DetailModal } from '../../components/DetailModal/DetailModal'

// Componente Exclusivo de Code
import { CodeEditorPreview } from './components/CodeEditorPreview/CodeEditorPreview'

import './CodePage.css'

export const CodePage = () => {
  usePageTheme('code')

  const [modalState, setModalState] = useState({ isOpen: false, title: '', sections: [] })

  const codeData = getProduct('code') || {
    name: 'Nexora Code',
    shortName: 'CODE',
    accentColor: '#2563EB',
    description: 'Entorno de edición y ejecución ligera de código.',
    mockup: '/mockups/NexoraCode.png',
    downloadUrl: 'https://github.com/nexora-labs/code/releases',
    stats: [],
  }

  // Mapeo detallado con múltiples párrafos y subtítulos por característica
  const techDetailsMap = {
    'code-stat-1': {
      title: 'Eficiencia Extrema de Memoria (Core en Rust)',
      sections: [
        {
          subtitle: '1. Arquitectura Nativa sin Navegador Embebido',
          paragraphs: [
            'A diferencia de editores tradicionales basados en Electron que ejecutan instancias completas de Chromium y el motor V8, Nexora Code se renderiza directamente sobre la GPU usando Impeller/Skia en Flutter.',
            'Esto elimina la recolección de basura invasiva y reduce drásticamente el consumo de memoria RAM en reposo a menos de 65 MB.',
          ],
        },
        {
          subtitle: '2. Gestión del Árbol Sintáctico (AST) en Rust',
          paragraphs: [
            'El procesamiento de código fuente, la indexación de archivos y el tokenizado se delegan a un proceso nativo en Rust.',
            'La comunicación vía FFI (Foreign Function Interface) garantiza que el hilo de la interfaz de usuario nunca se bloquee, ni siquiera al cargar repositorios masivos.',
          ],
          linkText: 'Ver arquitectura del core en GitHub',
          linkHref: 'https://github.com/nexora-labs/code',
        },
      ],
    },
    'code-stat-2': {
      title: 'Arranque e Inicialización Ultrarrápida',
      sections: [
        {
          subtitle: '1. Tiempo de Inicio < 45ms',
          paragraphs: [
            'Al no depender del arranque de un entorno web pesado, la aplicación está lista para editar texto en cuestión de milisegundos desde el momento de ejecución.',
            'Los buffers de texto se leen directamente mediante mapeo de memoria (mmap) en Rust.',
          ],
        },
        {
          subtitle: '2. Carga Instantánea de Proyectos',
          paragraphs: [
            'El árbol de directorios y la detección de tipos de archivo se resuelven en paralelo aprovechando todos los núcleos de tu procesador.',
          ],
          linkText: 'Ver benchmarks de tiempo de inicio',
          linkHref: 'https://github.com/nexora-labs/code/releases',
        },
      ],
    },
    'code-stat-3': {
      title: 'Renderizado Acelerado por Hardware',
      sections: [
        {
          subtitle: '1. Tasa de Refresco de 120 FPS',
          paragraphs: [
            'El canvas de Flutter dibuja los glifos y el resaltado de sintaxis directamente en la tarjeta gráfica, manteniendo animaciones fluidas al hacer scroll o seleccionar bloques de código.',
            'Se elimina por completo el desgarro de pantalla (screen tearing) y la latencia entre la pulsación del teclado y la aparición de la letra.',
          ],
        },
      ],
    },
    'code-stat-4': {
      title: 'Aislamiento Local y Privacidad Garantizada',
      sections: [
        {
          subtitle: '1. Cero Telemetría y Análisis Local',
          paragraphs: [
            'Todo el motor de autocompletado, las sugerencias de código y la compilación operan estrictamente en tu máquina local.',
            'Ninguna línea de tu proyecto o datos de uso se envían a servidores externos. Tu código fuente permanece 100% privado.',
          ],
          linkText: 'Ver política de privacidad local',
          linkHref: '/soporte',
        },
      ],
    },
  }

  const handleOpenModal = (item) => {
    const detail = techDetailsMap[item.id] || {
      title: item.highlight || 'Detalles del motor',
      sections: [
        {
          subtitle: `${item.prefix || ''} ${item.highlight || ''}`,
          paragraphs: [`${item.prefix || ''} ${item.highlight || ''} ${item.suffix || ''}`],
          linkText: 'Ver repositorio en GitHub',
          linkHref: 'https://github.com/nexora-labs/code',
        },
      ],
    }

    setModalState({
      isOpen: true,
      title: detail.title,
      sections: detail.sections,
    })
  }

  return (
    <div className="code-page">
      {/* 1. Hero Principal */}
      <HeroCard id="code-hero" product={codeData} />

      {/* 2. SubHeader Flotante */}
      <SubHeader
        targetHeroId="code-hero"
        title={codeData.shortName}
        titleColor={codeData.accentColor}
        outlineBtnText="Explorar Editor"
        outlineBtnHref="#explorar"
        primaryBtnText="Descargar binario"
        primaryBtnHref={codeData.downloadUrl}
      />

      {/* 3. Novedades y Historial de Versiones */}
      {changelogData.code && <ChangelogCard changelogData={changelogData.code} />}

      {/* 4. Editor e IDE Interactivo (Exclusivo) */}
      <div id="explorar">
        <CodeEditorPreview accentColor={codeData.accentColor} />
      </div>

      {/* 5. Rendimiento y Métricas Técnicas */}
      {codeData.stats?.length > 0 && (
        <FeatureStatsCard
          title="Nexora Code: Arquitectura Flutter + Rust"
          linkText="Explorar repositorios oficiales en GitHub >"
          linkHref="https://github.com/nexora-labs/code"
          linkColor={codeData.accentColor}
          accentColor={codeData.accentColor}
          icon={FiCode}
          items={codeData.stats}
          onCardClick={handleOpenModal}
        />
      )}

      {/* Modal Interactivo de Detalle Multisección */}
      <DetailModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        sections={modalState.sections}
        linkColor={codeData.accentColor}
      />
    </div>
  )
}

export default CodePage
