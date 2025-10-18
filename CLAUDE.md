# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

La Salamanca is a static website for promoting land lots (lotes) for sale. The site is in Spanish and uses a JSON-based content management approach where all property data, prices, and descriptions are defined in a single `data.json` file.

## Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- JSON-based content management
- Static file hosting (no backend required)

**Key Design Principles:**
- Content is completely separated from presentation via `data.json`
- Responsive design with mobile-first approach
- Smooth scrolling navigation
- Dynamic content loading via Fetch API

## File Structure

- `index.html` - Main HTML structure with semantic sections (header, hero, lotes, contact, footer)
- `styles.css` - All styling using CSS custom properties for theming
- `script.js` - Handles JSON data loading and DOM manipulation
- `data.json` - **Single source of truth** for all content (site info, contact details, property listings)
- `images/` - Directory for property images

## Development Commands

**Start local development server:**
```bash
# Using npm (recommended)
npm start

# Alternative: using Python
python3 -m http.server 8000

# Alternative: using npx directly
npx serve
```

Then open `http://localhost:8000` in your browser.

## Content Management

All content updates should be made in `data.json`. The structure is:

```json
{
  "siteTitle": "string",
  "heroTitle": "string",
  "heroSubtitle": "string",
  "description": "string",
  "contact": {
    "phone": "string",
    "email": "string",
    "whatsapp": "string"
  },
  "lotes": [
    {
      "id": number,
      "nombre": "string",
      "precio": "string",
      "superficie": "string",
      "ubicacion": "string",
      "descripcion": "string",
      "caracteristicas": ["string"],
      "imagen": "string (path)"
    }
  ]
}
```

**When adding new lotes:**
1. Add entry to `lotes` array in `data.json`
2. Place corresponding image in `images/` directory
3. Update `imagen` property with correct path

## Styling System

Colors are managed via CSS custom properties in `:root` (styles.css:10-18):
- `--primary-color` - Main brand color (buttons, links, accents)
- `--primary-hover` - Hover state for interactive elements
- `--text-dark` / `--text-light` - Text color hierarchy
- `--bg-light` - Background color for sections

**Responsive breakpoints:**
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## JavaScript Behavior

`script.js` loads on DOMContentLoaded and:
1. Fetches `data.json`
2. Populates all text content dynamically
3. Generates lote cards from array data
4. Sets up smooth scrolling for anchor links
5. Handles errors gracefully with user-friendly messages

**Key function:** `createLoteCard(lote)` - Generates HTML for each property card. Modify this to change card layout.

## Deployment

Site is deployment-ready for any static hosting platform:
- GitHub Pages
- Netlify (drag & drop)
- Vercel
- Cloudflare Pages

No build step required - upload all files as-is.

## Common Tasks

**Add a new lote:**
Edit `data.json` and add object to `lotes` array.

**Change site colors:**
Edit CSS custom properties in `styles.css` `:root` selector.

**Modify contact info:**
Edit `contact` object in `data.json`.

**Update hero section:**
Edit `heroTitle`, `heroSubtitle`, or `description` in `data.json`.

**Add new section:**
1. Add HTML structure to `index.html`
2. Add corresponding styles to `styles.css`
3. If dynamic, add data to `data.json` and update `script.js`
