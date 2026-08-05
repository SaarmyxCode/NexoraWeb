# 🚀 Nexora Web Core

Bienvenido al repositorio oficial del portal web de **Nexora**, un ecosistema unificado de aplicaciones y herramientas digitales avanzadas. Esta plataforma está diseñada bajo los más altos estándares de rendimiento, accesibilidad y experiencia de usuario (_UI/UX_), inspirada en la filosofía de diseño limpia y minimalista de Apple.

---

## 🛠️ Tecnologías Utilizadas

- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (para un entorno de desarrollo ultrarrápido y soporte HMR).
- **Enrutamiento**: [React Router DOM v6](https://reactrouter.com/) (gestión de rutas dinámicas y componentes de página).
- **Iconografía**: [React Icons](https://react-icons.github.io/react-icons/) (colección de íconos vectoriales livianos).
- **Estilos & UI**:
  - **CSS3 Puro** con arquitectura modular por componentes.
  - **Tokens de Diseño** mediante CSS Custom Properties (`var(...)`) para un control dinámico de temas, colores de acento y tipografías (`Gliker` e `Inter`).
  - **Efectos y Microinteracciones**: Soporte para _Bento Grids_, _Floating Cards_, modales con _backdrop blur_ y animaciones mediante _Intersection Observer_.

---

## 📦 Productos del Ecosistema

El sitio organiza y presenta la suite de productos desarrollada por **Nexora Labs**:

1. 🎨 **Nexora Theme**: Sistema visual unificado, librería de componentes y motor de tokens dinámicos con alto contraste y cero latencia de renderizado.
2. 🎵 **Nexora Songs**: Catálogo y reproductor musical curado para sesiones de _Deep Work_ y productividad.
3. 📁 **Nexora Rename**: Herramienta de automatización y renombrado masivo de archivos en lote con soporte para metadatos EXIF e ID3.
4. 📈 **Nexora Finance**: Gestor de presupuestos, proyecciones de ahorro y control contable con arquitectura de datos 100% local (_Zero-Knowledge_).
5. 🛡️ **NexoraVault**: Bóveda de credenciales y gestor de contraseñas con cifrado de nivel bancario.

---

## 🎨 Arquitectura y Componentes Clave

- **`SubHeader` (Subnav Flotante)**: Barra de navegación fija con detección de scroll (_Intersection Observer_) que adapta dinámicamente el botón de acción principal al color de acento de la página actual.
- **`FeatureStatsCard` (Bento Grid)**: Módulo de tarjetas informativas tipo Apple con soporte para botones interactivos de expansión.
- **`DetailModal`**: Ventana modal flotante con efecto _glassmorphism_, cierre mediante atajos de teclado (`ESC`) y bloqueo de scroll en fondo.
- **`DownloadPage`**: Selector interactivo de productos tipo _App Store Hero_ para la descarga de instaladores multiplataforma (Windows, macOS, Linux, Web).

---

## 🚀 Instalación y Configuración Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno de desarrollo local:

### 1. Clonar el repositorio

```bash
git clone [https://github.com/tu-usuario/nexora-web.git](https://github.com/tu-usuario/nexora-web.git)
cd nexora-web

```

### 2. Instalar dependencias

```bash
npm install

```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev

```

El proyecto estará disponible en `http://localhost:5173`.

### 4. Compilar para producción

```bash
npm run build

```

---

## 📂 Estructura del Proyecto

```text
src/
├── assets/             # Recursos estáticos (Imágenes, SVG, Mockups)
├── components/         # Componentes UI reutilizables
│   ├── DetailModal/    # Modal flotante de detalles
│   ├── FeatureStatsCard/# Módulo Bento Grid
│   ├── Header/         # Barra de navegación principal
│   ├── HeroCard/       # Tarjetas Hero de sección
│   ├── SubHeader/      # Subnav sticky con acento dinámico
│   └── ...
├── hooks/              # Custom Hooks (ej. useReveal para animaciones)
├── layout/             # Estructura base de la aplicación (MainLayout)
├── pages/              # Vistas principales de la aplicación
│   ├── Download/       # Vista de descargas por producto
│   ├── Finance/        # Vista de Nexora Finance
│   ├── Home/           # Landing page principal
│   ├── NotFound/       # Página de error 404
│   ├── Rename/         # Vista de Nexora Rename
│   ├── Songs/          # Vista de Nexora Songs
│   ├── Soporte/        # Centro de ayuda y asistencia
│   └── Theme/          # Vista de Nexora Theme
└── styles/             # Variables globales, animaciones y reset CSS
    ├── animations.css  # Definición de Keyframes y transiciones
    ├── index.css       # Estilos globales de la app
    ├── responsive.css # Media queries globales
    └── tokens.css     # Design Tokens (Colores, Spacing, Typography)

```

---

## 📄 Licencia

Este proyecto está desarrollado bajo la firma de **Nexora Labs**. Todos los derechos reservados.
