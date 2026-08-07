import React from 'react'
import { Sparkles, ArrowLeft, Shield, Zap } from 'lucide-react'

export default function NexoraRenameChangelog() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón de Retorno */}
        <nav className="mb-8">
          <a
            href="/nexora"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al ecosistema Nexora
          </a>
        </nav>

        {/* Encabezado del Módulo */}
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center space-x-3 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Nexora Labs
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-sm text-slate-400">Actualizaciones de Software</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Nexora Rename <span className="text-indigo-400">Changelog</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Historial completo de versiones, mejoras de rendimiento, optimizaciones y correcciones
            del sistema de renombrado inteligente.
          </p>
        </header>

        {/* Timeline de Versiones */}
        <div className="space-y-12">
          {/* Versión 1.0.0 */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-indigo-500/30">
            {/* Indicador de Versión */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-950" />

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
              {/* Cabecera de la Versión */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white">Versión 1.0.0</h2>
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                      Stable Release
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Lanzamiento inicial oficial • 6 de Agosto, 2026
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/80">
                  Build: nx-rename-v1.0.0-release
                </div>
              </div>

              {/* Contenido / Cambios */}
              <div className="space-y-6">
                {/* Nuevas Funcionalidades */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Características Principales
                  </h3>
                  <ul className="space-y-2.5 text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>
                        <strong>Motor de renombrado en lote:</strong> Soporte para procesar cientos
                        de archivos de forma simultánea con bajo consumo de recursos.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>
                        <strong>Patrones y Expresiones Regulares (RegEx):</strong> Capacidades
                        avanzadas para filtrar, reemplazar y estructurar nombres de archivos
                        mediante reglas personalizadas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>
                        <strong>Vista previa en tiempo real:</strong> Visualización instantánea de
                        los cambios antes de aplicar las modificaciones en el sistema de archivos.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>
                        <strong>Sistema de Deshacer (Undo):</strong> Capacidad de revertir las
                        últimas operaciones de renombrado ejecutadas en la sesión.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Optimizaciones y Rendimiento */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Rendimiento y Arquitectura
                  </h3>
                  <ul className="space-y-2.5 text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>
                        Optimización nativa del rendimiento para operaciones de lectura/escritura de
                        directorios pesados.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>
                        Integración visual con la identidad de diseño del ecosistema Nexora (modo
                        oscuro por defecto, componentes minimalistas).
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Correcciones y Seguridad */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Estabilidad y Permisos
                  </h3>
                  <ul className="space-y-2.5 text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>
                        Manejo seguro de permisos de usuario para evitar conflictos al intentar
                        modificar archivos protegidos del sistema.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>
                        Gestión de colisiones de nombres automática (prefijos/sufijos incrementales
                        en caso de archivos duplicados).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Changelog */}
        <footer className="mt-16 text-center border-t border-slate-800/80 pt-8 text-sm text-slate-500">
          <p>
            Nexora Labs — Desarrollando herramientas eficientes para optimizar flujos de trabajo.
          </p>
        </footer>
      </div>
    </div>
  )
}
