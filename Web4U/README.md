# Web4U — Sitio educativo (HTML, SVG, CSS)

Estructura mínima:
- index.html
- html.html
- svg.html
- css.html
- /css/styles.css
- /css/print.css
- /assets/*.svg
- /scripts/toc.js
- /scripts/generate_pdfs.js (opcional)
- /pdfs (carpeta de salida para PDFs)

## Ejecutar localmente
1. Desde la raíz del proyecto instala un servidor estático:
   - `npx http-server -p 8080`  (o `npm i -g http-server` y `http-server -p 8080`)
2. Abre `http://localhost:8080` en tu navegador.

## Generar PDFs
1. `npm init -y`
2. `npm install puppeteer`
3. Levanta el servidor local (`npx http-server -p 8080`)
4. `node scripts/generate_pdfs.js`
   - Los PDFs se guardarán en la carpeta `pdfs/`

## Notas
- Todos los textos están en español.
- Mantén la estructura y rutas tal como están para que los enlaces funcionen correctamente.
- Para profesores: cada página incluye TOC con enlaces a secciones (IDs), `title` en enlaces importantes y `aria-current` para indicar la página activa.
