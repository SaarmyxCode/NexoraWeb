# Nexora Web Core

Breve y elegante portal web para la suite de productos de Nexora Labs. Sitio de referencia que agrupa demos, descargas y documentación de los distintos productos del ecosistema.

## Contenido rápido

- **Stack:** React 18 + Vite
- **Estilos:** CSS modular con Design Tokens
- **Rutas:** React Router v6

## Tecnologías

- React 18
- Vite
- React Router DOM v6
- React Icons
- CSS puro (módulos por componente) y variables de diseño

## Características principales

- Sistema de tokens y temas dinámicos
- Componentes modulares (Header, SubHeader, HeroCard, DetailModal, etc.)
- Animaciones y revelado por scroll con Intersection Observer
- Modal con bloqueo de fondo y atajos de teclado

## Instalación (rápida)

Pre-requisitos: Node.js (>=16) y npm.

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nexora-web.git
cd nexora-web
```

2. Instalar dependencias

```bash
npm install
```

3. Ejecutar en desarrollo

```bash
npm run dev
```

El sitio quedará disponible en http://localhost:5173 por defecto.

4. Compilar para producción

```bash
npm run build
```

## Estructura básica del proyecto

- `src/` — código fuente
  - `components/` — componentes reutilizables (Header, HeroCard, DetailModal...)
  - `pages/` — vistas principales (Home, Download, Finance, etc.)
  - `styles/` — tokens y estilos globales
  - `data/` — contenidos JSON y configuraciones

Para una vista completa de la estructura, revisa el árbol de carpetas del repositorio.

## Cómo contribuir

- Abre un issue para proponer mejoras o reportar bugs
- Crea ramas con prefijo `feat/` o `fix/` y envía un Pull Request
- Sigue el estilo existente y escribe descripciones claras en los commits

## Contacto y soporte

- Equipo: Nexora Labs
- Para soporte o preguntas internas, usa el canal de comunicación del equipo.

## Licencia

Reservados todos los derechos por Nexora Labs.
