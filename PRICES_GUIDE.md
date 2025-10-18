# Guía de Administración de Precios

## Cómo Funcionan los Precios

### 📋 Páginas del Sitio

**Página Principal (index.html):**
- ✅ Muestra los lotes SIN precios
- ✅ Muestra el plano del loteo SIN precios
- ✅ Solo muestra: nombre, superficie, ubicación, descripción y características
- ✅ Botón "Ver Precios" que lleva a la página de precios

**Página de Precios (precios.html):**
- ✅ Muestra todos los lotes CON precios
- ✅ Muestra el mismo plano del loteo (sin precios en la imagen)
- ✅ Los precios se muestran en texto, cargados desde data.json
- ✅ Lista completa de lotes con precio y superficie

### 🎯 Editando Precios

**TODOS los precios se editan desde un solo archivo:** `data.json`

#### Ejemplo de estructura en data.json:

```json
{
  "lotes": [
    {
      "id": 1,
      "nombre": "Del Potrero",
      "precio": "$35,000 USD",       ← Edita aquí el precio
      "superficie": "1750 m²",
      "ubicacion": "Barrio La Salamanca",
      "descripcion": "Excelente lote con vista panorámica...",
      "caracteristicas": [...],
      "imagen": "images/terreno-del-potrero.jpg"
    }
  ]
}
```

### ✏️ Cómo Cambiar Precios

1. Abre el archivo `data.json`
2. Busca el lote que quieres editar
3. Cambia el valor del campo `"precio"`
4. Guarda el archivo
5. Recarga la página de precios en el navegador

**Ejemplos de formatos de precio válidos:**
- `"$35,000 USD"`
- `"$42,000 USD"`
- `"Consultar"`
- `"U$S 35.000"`
- `"Vendido"` (si quieres marcar como vendido)

### 📊 Campos Editables por Lote

En `data.json`, cada lote tiene estos campos que puedes editar:

- **nombre**: "Del Potrero", "De La Cantera", etc.
- **precio**: El precio del lote (se muestra solo en /precios)
- **superficie**: "1750 m²"
- **ubicacion**: "Barrio La Salamanca"
- **descripcion**: Texto descriptivo del lote
- **caracteristicas**: Array de características ["Red eléctrica", "Vista panorámica", ...]
- **imagen**: Ruta a la imagen del lote

### 🔄 Otros Campos Editables

También puedes editar en `data.json`:

**Formas de Pago:**
```json
"formasPago": [
  "Contado efectivo",
  "Financiación propia hasta 6 cuotas"
]
```

**Características del Loteo:**
```json
"caracteristicasLoteo": [
  "Lotes desde 1750m²",
  "Red eléctrica aérea",
  "Alambrado de 3 hilos"
]
```

**Información de Contacto:**
```json
"contact": {
  "phone": "+5491138067266",
  "email": "barriolasalamancalf@gmail.com",
  "whatsapp": "+5491138067266"
}
```

### ⚠️ Importante

- **NO edites** los archivos HTML directamente para cambiar precios
- **NO edites** los archivos JavaScript (.js)
- **SOLO edita** el archivo `data.json`
- Los cambios en `data.json` se reflejan automáticamente en ambas páginas
- Asegúrate de mantener el formato JSON válido (comas, comillas, llaves)

### 🧪 Verificar Cambios

Después de editar `data.json`:
1. Guarda el archivo
2. Abre o recarga `index.html` en el navegador
   - Verifica que NO se vean precios
3. Abre o recarga `precios.html` en el navegador
   - Verifica que SÍ se vean los precios actualizados
