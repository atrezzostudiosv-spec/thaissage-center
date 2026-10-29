# THAISSAGE CENTER · QA / Home Scroll Ritual v4
**Fecha:** 29 de octubre de 2026  
**Estado:** implementado en `main`, pendiente de validación visual real.  
**Decisión del cliente:** unificar el Home con experiencia scroll cinematográfica, conservando identidad editorial, fotografía, navegación, datos comerciales y reservas. No añadir efectos al resto de secciones aprobadas.

## Alcance entregado

### A. Choose Your Center
- **Desktop:** fondo de sección ambiental usando el WebP panorámico existente `thaissage-hero-spa-interior-desktop.webp` con baja opacidad sobre verde salvia; se mantiene la foto editorial lateral `thaissage-massage-hands-treatment-editorial.webp`, títulos, tres ciudades, direcciones, teléfonos y los enlaces Fresha individuales.
- **Móvil:** los `<details name="thaissage-centers">` llegan **todos cerrados**, incluso antes de ejecutar JavaScript. En escritorio se abre Frisco al cargar; el script `assets/js/center-selector.js` ajusta estado al cruzar 720 px y conserva apertura exclusiva.
- Menos espacio inferior y transición suave hacia bloque de intro Treatments, sin reestructurar el contenido de la sede ni el mapa inferior.

### B. Treatments, introducción + seis capítulos móviles
- Única cabecera `#treatments-title`, texto original («From assisted stretching…»), enlace de reserva, trasladados desde el contenedor de tarjetas a un nuevo `.treatments-intro-bridge` en el flujo **antes** de `section#treatments`. Se recupera en escritorio y móvil sin duplicar encabezados ni ocultarlo bajo el sticky desktop.
- Fondo verde salvia `#E3EDE5` y adaptación `#DFEBE1` en móvil; se elimina el gran vacío blanco entre Locations y el comienzo de Treatments mediante reducción de padding de Locations y puente editorial.
- Escritorio >=1025 y altura>=560: **sigue operando** `assets/js/treatments-chapters.js` y su efecto Ranchman ya aprobado.
- Móvil <=720, altura>=560, movimiento permitido: se construye un `treatment-scroll-track` de seis paneles de fotografía de pantalla completa, sticky 100svh, contador 01/06, nombre, descripción, duración, precio y reserva. Cada capítulo usa ~1.25 alturas de viewport de scroll nativo; la fotografía gana escala gradualmente hasta ~1.081 y después la siguiente entra **desde la derecha**. No se capturan wheel/touch, no `scrollTo()`, sin auto-scroll.
- En ausencia de JavaScript, si `prefers-reduced-motion:reduce` o en pantallas bajas: permanece visible el catálogo original de seis capítulos con imágenes a todo ancho. Las fuentes de texto siguen siendo originales; el botón en escena llama al CTA original enlazado al selector Fresha.

### C. Signature Experiences: tres capítulos full-bleed
- Se mantiene la introducción (TAKE A LITTLE LONGER / Three Signature Experiences), con fondo claro; debajo se añade un `signature-scroll-track` de tres escenas fotográficas que reemplaza visualmente la composición 2-columnas cuando JS está activo, con opacidad progresiva y zoom de fondo, revelado por avance nativo.
- **Escritorio:** fundido y revelado editorial con zoom fotográfico; **móvil:** siguiente escena **entra desde abajo** (a diferencia de Treatments). Ritmo de ~1.23 alturas de viewport por historia. Sticky visual solo, sin bloqueo del desplazamiento.
- Escenas y datos:
  - Chiang Mai · A Thai-centered sequence… · 120 min / $200*
  - Bangkok · A longer spa experience… · 150 min / $230*
  - Phuket · A body scrub… · 120 min / $200*
- Reservas `Check Availability` delegadas al selector Fresha existente. Las fotos existentes se usan a `object-fit:cover`; no se inventaron salas ni servicios.
- Fallback sin JS, en baja altura o con movimiento reducido: las tres escenas editoriales anteriores quedan disponibles sin sticky.

## Archivos
- `index.html` · introduce `.treatments-intro-bridge`, cierra inicialmente acordeones, añade CSS/JS v4
- `assets/css/home-scroll-ritual-v4.css` · diseño responsive nuevo y escenas de scroll
- `assets/js/home-scroll-ritual-v4.js` · escenas originales desde el DOM, zoom/entrada lateral o vertical según sección, gestiona media, resize y limpieza
- `assets/js/center-selector.js` · sincronización de apertura inicial mobile/desktop
- **No modificados:** JavaScript/CSS original de Treatments desktop, Google Maps, footer, los 6 datos de tratamientos, 3 paquetes, tarifas publicadas ni enlaces Fresha.

## QA estático confirmado
- Una sola ID de la cabecera Treatments; la cabecera está por delante de la sección scroll (y accesible por `aria-labelledby`).
- 3 acordeones, ninguno marcado `open` inicialmente; script abre Frisco solamente en escritorio y cierra los 3 en teléfonos.
- 6 tarjetas originales + 3 capítulos Signature fuente; enlaces a Fresha, mapa, Gift Cards y footer conservados.
- Etiquetas `section`, `details` balanceadas; IDs únicos; todas las anclas internas válidas.
- Nuevo JS y los JS independientes sintácticamente válidos; hoja CSS balanceada.
- Breakpoints >=1025 desktop Treatments existente, <=720 móvil cinematográfico, versiones tablet/fallback y `prefers-reduced-motion`.
- Demo conserva `noindex,nofollow,noarchive`.

## Pendientes antes de la aprobación
1. Abrir GitHub Pages con caché nueva, validar primero a **375×667**, **390×844**, **768**, **1024**, **1440**, iPhone Safari/Android Chrome si es posible. No se ha obtenido captura interactiva del deploy desde el entorno: GitHub Pages no accesible por lector web.
2. Comprobar que el color de transición Locations→Treatments elimina efectivamente la separación vacía y que los acordeones abren bajo su propia ciudad sin recortes.
3. Verificar en móvil el ancho completo, recorte, título, descripción, duración, CTA y barra flotante de reserva durante seis tratamientos; desplazamiento hacia abajo, hacia arriba, parada entre capítulos y salida natural.
4. Verificar tres Signature en escritorio/móvil, dirección de entrada y final de la tercera, margen antes de Gift Cards, legibilidad y rendimiento.
5. Las fotografías Signature alojadas son **840×1050**: al llenar una pantalla 1440px pueden necesitar sustituciones panorámicas optimizadas para nitidez; actualmente no se han creado nuevas imágenes ni se atribuyen a instalaciones reales.
6. Reconciliar precios/hora con Fresha y permitir aprobación solo tras comprobación visual y funcional. El prototipo continúa noindex.

**ESTADO:** v4 implementada en GitHub, **EN VALIDACIÓN VISUAL**, no publicada para producción.
