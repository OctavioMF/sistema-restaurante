# Sistema Restaurante 🍽️

Aplicación de escritorio para la gestión de inventario y puntos de venta de un restaurante, construida con tecnologías web modernas y encapsulada con Electron.

## 📋 Descripción

Este proyecto es una aplicación de escritorio (Desktop App) que permite gestionar el stock de productos y simular un proceso de venta. Actualmente cuenta con funcionalidades para visualizar una lista de precios y stock, seleccionar productos para una "orden" o "mesa", y ajustar las cantidades dinámicamente, todo bajo una interfaz moderna basada en Material UI.

## 🚀 Tecnologías Utilizadas

El proyecto utiliza un stack moderno optimizado para rendimiento y experiencia de desarrollo:

* **[React 19](https://react.dev/)**: Biblioteca principal para la interfaz de usuario.
* **[Electron](https://www.electronjs.org/)**: Para empaquetar la aplicación web como un ejecutable de escritorio nativo.
* **[Vite](https://vitejs.dev/)**: Entorno de desarrollo ultrarrápido y empaquetador (bundler).
* **[Material UI (MUI)](https://mui.com/)**: Biblioteca de componentes de diseño para una interfaz visual robusta y accesible.
* **SWC**: Compilador de Rust para una compilación extremadamente rápida (usado via `@vitejs/plugin-react-swc`).

## ✨ Funcionalidades Principales

Basado en el módulo de Stock (`src/stockPage`):

* **Gestión de Inventario en Tiempo Real**: Visualización de tabla con productos, precios y stock disponible.
* **Selección de Productos**: Al hacer clic en un producto de la tabla principal, este se añade a la lista de selección actual y se descuenta del stock automáticamente.
* **Control de Cantidades**: Lógica inteligente para manejar productos repetidos y ajustar cantidades (aumentar/disminuir) devolviendo items al stock si se deseleccionan.
* **Layout Responsivo**: Barra de navegación lateral (Drawer) y diseño adaptable utilizando el sistema de Grids de Material UI.

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio** (si aún no lo has hecho):
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd sistema-restaurante
    ```

2.  **Instalar dependencias**:
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    ```

## ▶️ Ejecución

El proyecto cuenta con varios scripts definidos en el `package.json`:

### Modo Desarrollo
Para iniciar la aplicación en modo desarrollo con recarga en caliente (HMR) tanto para React como para el proceso de Electron:
```bash
npm run dev