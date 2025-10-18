# Lotes en Venta - Barrio La Salamanca

Static website para promocionar lotes en venta en Barrio La Salamanca. El sitio cuenta con una página principal con información general y una página dedicada a mostrar los precios de cada lote.

## Estructura del Proyecto

```
la-salamanca/
├── index.html                  # Página principal
├── precios.html                # Página de precios
├── styles.css                  # Estilos del sitio
├── script.js                   # JavaScript para cargar datos dinámicamente
├── data.json                   # Datos del sitio (características, precios, contacto)
├── images/                     # Carpeta para imágenes
│   ├── logo.png               # Logo de La Salamanca
│   ├── plano-layout.png       # Plano sin precios
│   └── plano-precios.png      # Plano con precios
├── README.md                   # Este archivo
├── IMAGES_INSTRUCTIONS.md      # Instrucciones para agregar imágenes
└── CLAUDE.md                   # Guía para Claude Code
```

## Características del Sitio

- ✅ **Diseño de marca**: Colores verde oliva basados en el logo de La Salamanca
- ✅ **Dos páginas**: Página principal e información general + Página de precios detallados
- ✅ **Planos interactivos**: Muestra el layout de los lotes sin y con precios
- ✅ **Responsive**: Se adapta a móviles, tablets y escritorio
- ✅ **Información dinámica**: Contenido cargado desde JSON
- ✅ **Contacto integrado**: Email, teléfono y WhatsApp

## Cómo Usar

### 1. **IMPORTANTE: Agregar las Imágenes**

Antes de poder visualizar el sitio correctamente, necesitas agregar 3 imágenes a la carpeta `images/`:

1. **logo.png** - El logo circular verde de La Salamanca
2. **plano-layout.png** - El plano del loteo sin precios
3. **plano-precios.png** - El plano con los precios de cada lote

Ver el archivo `IMAGES_INSTRUCTIONS.md` para instrucciones detalladas.

### 2. Editar el Contenido

Edita el archivo `data.json` para actualizar la información del sitio:

- **siteTitle**: Título del sitio
- **heroTitle**: Título principal en la sección hero
- **heroSubtitle**: Subtítulo en la sección hero
- **description**: Descripción general
- **contact**: Información de contacto (teléfono, email, WhatsApp)
- **lotes**: Array con los lotes disponibles

Ejemplo de estructura para un lote:

```json
{
  "id": 1,
  "nombre": "Lote Premium Vista al Mar",
  "precio": "$1,500,000 MXN",
  "superficie": "500 m²",
  "ubicacion": "Zona Norte, Ciudad X",
  "descripcion": "Hermoso lote con vista al mar...",
  "caracteristicas": [
    "Agua potable",
    "Electricidad",
    "Acceso pavimentado"
  ],
  "imagen": "images/lote1.jpg"
}
```

### 3. Ver el Sitio Localmente

Para ver el sitio en tu navegador, puedes usar cualquiera de estas opciones:

**Opción 1: Servidor HTTP simple con Python**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en `http://localhost:8000`

**Opción 2: Live Server (VSCode)**
- Instala la extensión "Live Server" en VSCode
- Haz clic derecho en `index.html` y selecciona "Open with Live Server"

**Opción 3: npx (Node.js)**
```bash
npx serve
```

### 4. Publicar el Sitio

Puedes publicar este sitio estático en servicios gratuitos como:

- **GitHub Pages**: Sube el repositorio a GitHub y activa GitHub Pages
- **Netlify**: Arrastra la carpeta del proyecto a netlify.com
- **Vercel**: Conecta tu repositorio o arrastra la carpeta
- **Cloudflare Pages**: Similar a Netlify/Vercel

## Personalización

### Colores

Los colores principales se definen en `styles.css` usando variables CSS. El color verde está basado en el logo de La Salamanca:

```css
:root {
    --primary-color: #6b7c3e;      /* Verde oliva (del logo) */
    --primary-hover: #586530;      /* Verde oscuro para hover */
    --text-dark: #1f2937;          /* Texto oscuro */
    --text-light: #6b7280;         /* Texto claro */
    --bg-cream: #faf8f3;           /* Fondo crema */
}
```

### Diseño Responsivo

El sitio está diseñado para verse bien en dispositivos móviles, tablets y escritorio. Los breakpoints son:
- Móvil: < 480px
- Tablet: 480px - 768px
- Escritorio: > 768px

## Soporte

Para problemas o preguntas, consulta la documentación en el archivo o contacta al desarrollador.
