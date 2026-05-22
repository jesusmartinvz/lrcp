# LRCP - Landing Page

Landing page profesional de **single-page** (una sola página con scroll a secciones).

## 📁 Estructura del proyecto

```
lrcp-landing/
├── index.html              ← Página principal (HTML)
├── css/
│   ├── variables.css       ← ⭐ COLORES, FUENTES, ESPACIADOS (edita aquí)
│   ├── reset.css           ← Reset de navegadores
│   ├── base.css            ← Botones, contenedores, utilidades
│   ├── layout.css          ← Header y Footer
│   ├── sections.css        ← Estilos de cada sección
│   └── responsive.css      ← Media queries (mobile/tablet)
├── js/
│   └── main.js             ← Interacciones (menú, acordeón, etc.)
└── assets/
    ├── images/             ← ⭐ AQUÍ VAN LAS IMÁGENES (reemplazar)
    └── icons/              ← Iconos extra si los necesitas
```

## ⭐ Para editar COLORES y FUENTES

Abre `css/variables.css`. Ahí está TODO centralizado:

```css
--color-primary: #1E4E5A;        /* Verde principal */
--color-primary-hover: #2a6575;  /* Hover verde */
--color-secondary: #CCB691;      /* Marrón contacto */
--color-accent: #BFA475;         /* Iconos y símbolos +/- */
--color-cream: #F4EFDF;          /* Fondo amarillento */
--color-border-light: #f0f0f0;   /* Hover botón outline */
```

Si cambias un color ahí, se actualiza en todo el sitio automáticamente.

## 🖼️ Reemplazar imágenes

Coloca tus imágenes en `assets/images/` con estos nombres exactos:

| Archivo | Para qué se usa | Tamaño recomendado |
|---------|-----------------|---------------------|
| `logo.svg` | Logo del header | 200x80px (SVG o PNG) |
| `favicon.png` | Favicon del navegador | 64x64px |
| `hero.jpg` | Imagen principal del Hero | 800x600px |
| `services.jpg` | Imagen sección Servicios | 600x600px |
| `team-1.jpg` | Foto Ernesto Davila | 600x800px |
| `team-2.jpg` | Foto Augusto Loayza | 600x800px |
| `team-3.jpg` | Foto Moises Lopez | 600x800px |

> Mientras no las subas, se muestran imágenes placeholder automáticamente (no se rompe el diseño).

## ✨ Efectos implementados

✅ Badges `+5 Experiencia` y `500+ Casos` flotan suavemente (animación arriba/abajo)
✅ Las 3 tarjetas blancas de "Por qué LRCP" se elevan al pasar el mouse
✅ El acordeón de servicios abre uno a la vez (los demás se cierran automáticamente)
✅ Las tarjetas del equipo se agrandan (scale) al hacer hover
✅ Header se vuelve sticky con sombra al hacer scroll
✅ Menú hamburguesa en móvil
✅ Scroll suave entre secciones (al hacer click en el menú)
✅ 100% responsive (Desktop, Tablet, Mobile)
✅ Validación básica del formulario

## 🎨 Sobre las fuentes

Usé **Plus Jakarta Sans** (Google Fonts, gratis) y **Manrope** (botones).

**Niveau Grotesk es de pago**, por eso uso Plus Jakarta como fallback (es muy similar). Si quieres usar Niveau Grotesk real, debes comprar la licencia en [MyFonts](https://www.myfonts.com/) o [Adobe Fonts](https://fonts.adobe.com/) y reemplazarla en `variables.css`.

## 🔧 Sobre los iconos

Los iconos son **SVG inline** (van dentro del HTML directamente). Son del set **Lucide Icons** (gratis, open source).

Para sacar iconos de Figma:
1. Click derecho sobre el icono en Figma
2. Copy / Paste → Copy as SVG
3. Pega el SVG en el HTML donde lo necesites

O descarga más en: https://lucide.dev

## 🚀 Cómo probar la web

Solo abre `index.html` en tu navegador. Listo.

Para un servidor local (recomendado para desarrollo):
```bash
# Si tienes Python
python -m http.server 8000

# Si tienes Node
npx serve
```

## 📝 Próximos pasos sugeridos

- [ ] Reemplazar imágenes en `assets/images/`
- [ ] Conectar el formulario a un backend (PHP, API o servicio como Formspree)
- [ ] Agregar Google Analytics o Meta Pixel si necesitas
- [ ] Optimizar imágenes (usar formato WebP)
- [ ] Verificar metadatos SEO en `<head>` de `index.html`
