# Nexora Web

Sitio web oficial y plataforma de presentación de **Nexora**. Construido con una arquitectura modular, un sistema de diseño basado en _design tokens_ monocromáticos y animaciones interactivas de alto rendimiento.

---

## 🛠️ Tech Stack

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)

- **Routing:** [React Router v6](https://reactrouter.com/)

- **Animations:** [Framer Motion](https://www.framer.com/motion/)

- **Styling:** CSS puro modularizado (_Design Tokens_, Reset, Base y Scoped CSS por componente)

- **Icons & Assets:** SVGs y PNGs estáticos servidos desde `/public`

---

## 📁 Arquitectura del Proyecto

```text
nexora-web/
├── public/                  # Recursos estáticos globales (Logos, favicon, etc.)
└── src/
    ├── assets/              # Imágenes e íconos locales
    ├── components/          # Componentes reutilizables de UI
    │   ├── layout/          # Estructura global (Header, Footer, Layout)
    │   └── ui/              # Componentes de UI (Hero, Products, Services, Animations, etc.)
    ├── pages/               # Vistas de la aplicación (Home, Products, Services, About, Careers, etc.)
    ├── styles/              # Arquitectura de estilos CSS
    │   ├── tokens.css       # Sistema de variables de diseño (Colores, Tipografía, Spacing)
    │   ├── reset.css        # Reset CSS global
    │   ├── base.css         # Clases utilitarias y tipografía base
    │   └── AboutPage.css    # Estilos específicos de páginas
    ├── App.jsx              # Configuración de rutas principales
    └── main.jsx             # Punto de entrada de React
```

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio e instalar dependencias:**

```bash
git clone <https://github.com/NexoraLabs-Code/NexoraWeb>
cd nexora-web
npm install
```

2. **Iniciar servidor de desarrollo:**

```bash
npm run dev
```

3. **Construir para producción:**

```bash
npm run build
```

4. **Previsualizar la build de producción:**

```bash
npm run preview
```

---

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de **Design Tokens** centralizado en `src/styles/tokens.css`.

- **Paleta:** Monocromática pura (`#0a0a0a` / `#ffffff`) con un único acento de marca (`--color-accent: #e11d2e`).

- **Tipografía:** `Archivo` para encabezados de exhibición y `Inter` para texto de cuerpo.

- **Bordes:** Radio casi nulo (`--radius-sm: 2px`) para una estética técnica e industrial.

---

## 📄 Licencia

Derechos reservados © 2026 Nexora Inc.
