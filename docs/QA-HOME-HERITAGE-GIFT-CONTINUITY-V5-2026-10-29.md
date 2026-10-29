# Thaissage Center — QA Home v5: Heritage y Gift full-screen

**Fecha:** 29/10/2026  
**Estado:** implementado en main, pendiente de prueba visual en navegador.

## Cambios aplicados
1. **OUR TREATMENTS:** el puente editorial con el título «Massage Treatments / Designed Around You», descripción y CTA tiene fondo blanco #FFFFFF en desktop y móvil; no se alteraron los seis tratamientos.
2. **THAILAND TO TEXAS:** sección Heritage de ancho completo, al menos 100svh de altura, foto existente cover y contenido con padding adaptable para dispositivos cortos. El zoom ligero ya existente en desktop permanece.
3. **SIGNATURE EXPERIENCE 03 → A THOUGHTFUL GESTURE:** aviso de duraciones/precios trasladado ANTES de la galería Signature; el JS inserta la galería después del aviso y antes de las tres escenas fuente ocultas cuando hay modo cinematográfico. El último panel Phuket queda contiguo al primero de Gift Cards; no se borra el aviso.
4. **GIFT CARDS:** sección envuelta en gift-scroll-journey. Foto full-bleed 100svh; móvil usa el WebP vertical existente. Con motion permitido y altura >=640px la escena se fija suavemente mientras la página recorre 205svh, ampliando la imagen desde 1.015 a ~1.105 con scroll NATIVO, sin bloquear eventos wheel/touch. Luego la página continúa hacia el mapa. Fallback completo sin JS o con movimiento reducido.
5. **Datos y navegación:** textos, CTA Square, Fresha, mapa y footer intactos. Prototipo mantiene noindex.

## Archivos de código
- index.html: nota Signature reubicada, wrapper Gift, referencias CSS/JS nuevas.
- assets/js/home-scroll-ritual-v4.js: inserción de Signature antes de .signature-stories.
- assets/css/home-finale-polish-v5.css: nuevos estilos acotados.
- assets/js/gift-scroll-zoom-v5.js: progreso scroll y zoom reversible.

## QA de código
- 9 sections abiertas/cerradas, 1 footer, 46 IDs únicos y 47 anclas internas válidas.
- 6 tratamientos, 3 Signature, 1 nota comercial conservados.
- JS con sintaxis válida; CSS balanceado. Sin scroll programático en Gift.
- Mobile/reduced motion y fallback sin JS contemplados.
- Imágenes referenciadas son recursos existentes, no nuevas sedes ni instalaciones inventadas.

## Pendiente
GitHub Pages NO accesible desde lector web de esta sesión: pruebas visuales e interactivas pendientes. Confirmar 375, 768, 1024, 1440 px, Safari/Chrome, Heritage full-viewport, corte sin franja Signature→Gift, paso de zoom y salida a mapa en scroll descendente y ascendente, contraste CTA y barra de reserva móvil.
**No listo para producción; Home en validación.**
