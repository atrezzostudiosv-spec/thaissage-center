# Thaissage Center — Favicon y social sharing · Auditoría técnica

**Fecha:** 29/10/2026  
**Alcance:** pedido «agrega favicon e imagen para cuando se comparte link en redes» y protocolo adjunto de optimización SEO/UX sin cambiar el diseño aprobado.  
**Estado:** implementado en GitHub `main`; falta comprobar el resultado en las plataformas reales.

## Archivos entregados
- `assets/icons/thaissage-favicon.svg` — emblema floral fiel al símbolo del header de Thaissage; fondo verde bosque sólido e icono marfil, sin degradados; SVG escalable para pestañas de navegador.
- `assets/images/thaissage-social-share-1200x630.png` — imagen de marca 1200 × 630 px, aproximadamente 3 KB, PNG optimizado y adecuado como imagen social común en Facebook, WhatsApp, LinkedIn y X. Editorial sobrio, con Thaissage Center, símbolo floral y «Thailand to Texas»; verde bosque de fondo sólido, sin gradientes verdes.
- `assets/images/thaissage-social-share-artwork.svg` — fuente editable de la composición social (no usada directamente como `og:image` por compatibilidad de plataformas).

## Metadatos añadidos a las 18 páginas
- `rel="icon"` con ruta relativa correcta según profundidad del directorio.
- `og:image` absoluta apuntando a la tarjeta PNG común; `og:image:type=image/png`, dimensiones `1200 × 630`, texto `og:image:alt`, `og:site_name`, `og:locale`, `og:url` exacta de la página de demo.
- `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image` y alt.
- Se mantienen los títulos y descripciones sociales propios de cada página, de modo que no se copia el mismo copy para los 18 enlaces.
- El Home recibe por primera vez `og:image` y metadata completa de imagen; las interiores dejan de usar fotografías WebP de formato vertical o proporción irregular como imagen social principal.

## Auditoría realizada
- Las 18 páginas se releyeron directamente de la rama principal y verificaron: favicon con nivel relativo de ruta adecuado, una sola etiqueta `og:image`, URL PNG absoluta, metadata de Twitter, dimensiones y `noindex,nofollow,noarchive`.
- La imagen PNG se volvió a leer del repositorio GitHub como binario y se verificó: firma PNG válida, anchura 1200, altura 630, `IHDR`/`PLTE`/`IDAT`/`IEND` completos, CRC correcto y longitud de archivo íntegra.
- No se cambiaron secciones visuales aprobadas, navegación, servicios, tarifas, botones, mapas, código JS ni metadatos de robots.

## Pendiente de confirmar
- **NO se ha comprobado visualmente** una previsualización real compartida en WhatsApp, Facebook, LinkedIn o X, ni el despliegue efectivo de GitHub Pages. Los robots de las redes pueden conservar caché de imágenes anteriores y el sitio está aún en demo.
- Después de que GitHub Pages sirva la versión actual, comprobar un enlace Home y otro de interior en las herramientas de depuración de enlaces de Meta/LinkedIn y un teléfono móvil. Si prevalece una miniatura antigua, solicitar actualización de caché.
- El estado de demo `noindex` es intencional; no retirarlo sin autorización de publicación.

**Estado técnico:** Favicon + PNG social integrados y verificados en GitHub en **18/18** rutas. Pendiente únicamente QA externa de previews en plataformas reales.
