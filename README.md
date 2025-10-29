# PROA — Página web del partido ficticio PROA

## Introducción

Este proyecto ha sido desarrollado como parte de un trabajo universitario para la Facultad de Comunicación de la Universidad de Sevilla, dirigido a alumnos del grado de Publicidad y Relaciones Públicas.  
El objetivo principal era diseñar y construir la página web del partido político ficticio PROA (Progreso, Oportunidad y Avance).

El enfoque del proyecto se ha centrado especialmente en el diseño y la experiencia visual, priorizando la coherencia estética y la presentación sobre la lógica de programación o funcionalidades avanzadas.

---

## Tecnologías utilizadas

- **Astro**  
  Framework principal para la construcción del sitio.

- **Tailwind CSS**
  Sistema de estilos para componentes y páginas.

---

## Documentación técnica

### Estructura de carpetas

```
/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas principales del sitio
│   ├── styles/         # Archivos de estilos globales (si existen)
│   └── ...             # Otros directorios relacionados
├── public/             # Recursos estáticos (imágenes, favicon, etc.)
├── package.json        # Configuración de dependencias y scripts
└── ...
```

### Ejemplo de estilos en componentes Astro

```astro
---
// src/components/Header.astro
import styles from './Header.module.css';
---
<header class={styles.header}>
  <h1 class="text-3xl font-bold text-primary">PROA</h1>
</header>
```

```css
/* src/components/Header.module.css */
.header {
  background-color: #fff;
  padding: 1rem;
  border-bottom: 2px solid #e5e7eb;
}
```

**Ejemplo con Tailwind CSS:**

```astro
---
// src/components/Hero.astro
---
<section class="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
  <h2 class="text-xl font-semibold mb-2">Bienvenidos a PROA</h2>
  <p class="text-base">Tu espacio de progreso y avance.</p>
</section>
```

### Organización de los estilos

- Los estilos se aplican directamente en los componentes Astro usando clases de Tailwind CSS para mantener la coherencia visual.
- Los estilos globales pueden encontrarse en la carpeta `src/styles/`.
- Se prioriza la reutilización de componentes visuales para mantener una experiencia uniforme en toda la web.

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Hugo-Parames-Baeza/proa.git
cd proa
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el proyecto en local

```bash
npm run dev
```

---

## Enlace a la pagina

[![Partido Proa](https://img.shields.io/badge/Accede_a_PROA-D62929?style=for-the-badge&logoColor=white)](https://partidoproa.netlify.app)

---

## Licencia y autoría

- **Autor:** Hugo Parames Baeza
- **Trabajo Universitario:** Facultad de Comunicación, Universidad de Sevilla  
  Grado en Publicidad y Relaciones Públicas

---

> Para cualquier consulta, sugerencia o mejora, no dudes en abrir una issue en el repositorio.
