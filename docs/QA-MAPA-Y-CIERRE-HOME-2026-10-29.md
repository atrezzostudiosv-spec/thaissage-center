# Thaissage Center — integración de mapa y cierre cinematográfico
**Fecha:** 29 de octubre de 2026
**Estado:** implementado en GitHub `main`, pendiente de pruebas visuales reales
**Alcance:** reemplazo de Contact (formulario de pruebas), conexión editorial con Locations y nuevo fondo fotográfico en Final CTA; no se alteraron Hero, Treatments, Our Approach, Heritage ni Signature.

## Cambios reales implementados
1. **Contact → Find Us / Visit Your Center.** Eliminación completa del formulario de pruebas de `index.html`; eliminado el código JavaScript que intentaba enviarlo por FormSubmit.
2. **Tres centros individuales.** Frisco (9300 John Hickman Pkwy, Suite 605), Flower Mound (1021 Long Prairie Rd, Suite 404) y Southlake (101 River Oaks Dr, sin suite añadida por falta de confirmación), con los enlaces Fresha que ya figuraban en el Home.
3. **Google Maps seleccionado por ubicación.** Un único iframe de Google Maps que muestra **la sede seleccionada**, tres botones seleccionables, dirección y CTA Fresha por sede, enlaces individuales para abrir Google Maps. No se simula un mapa de tres pins simultáneos: para integrar marcadores personalizados dentro de Maps Embed API se requiere una clave autorizada.
4. **Locations superior reforzado.** Se han añadido links `View on Map` en las tarjetas iniciales; los tres enlaces del footer ahora apuntan a anclas individuales `#map-frisco`, `#map-flower-mound` y `#map-southlake`, y el menú usa «Find Us» en lugar de «Contact».
5. **Final CTA fotográfico.** «YOUR TIME TO RESET / Make Room for Yourself.» mantiene copy y selector de reserva, ahora sobre una escena panorámica con gradiente de contraste y un encuadre móvil independiente. Fotografía existente WebP (`thaissage-hero-spa-interior-desktop.webp` 1680×1000 y `thaissage-hero-spa-interior-mobile.webp` 768×1050). Se emplea el mismo espacio del Hero como recurso editorial intencional de cierre; no representa una instalación real identificada.
6. **Recursos nuevos de código:** `assets/css/home-integration.css` y `assets/js/locations-map.js`; el HTML los carga al final de la cadena existente con parámetro de caché `20261029-map-end-2`.

## Comprobaciones realizadas en código
- Un iframe `#thaissage-map`, tres `data-map-select` y tres `map-*` con identificadores únicos.
- No hay `#contact-form`, endpoint FormSubmit ni código de handler de prueba.
- Sin anclas `#...` rotas en el HTML existente y sin enlaces `a` anidados tras la intervención.
- JavaScript de mapa y `app.js` con sintaxis válida.
- HTML conserva los seis tratamientos y la navegación de reserva ya implementada.
- CSS nuevo con llaves balanceadas, @media 1100/850/720/390, y `prefers-reduced-motion`; fotografía de fondo disponible realmente en GitHub.
- La demo mantiene `noindex,nofollow,noarchive`.

## Pendiente y limitaciones
- **Mapa de Google:** la solución funciona en código como selector de una sede por vez; **no** muestra tres pins simultáneos. No se ha podido abrir realmente el iframe en navegador para verificar contenido, cookies ni eventuales bloqueos de Google.
- **Fotografía original generada por Atrezzo:** se produjo un recurso original conceptual adicional, con versiones WebP locales; no fue incorporado a GitHub porque el conector de texto del repositorio no trasladó sus bytes en esta intervención. No afirmar lo contrario. El cierre usa versiones responsivas de la fotografía ya alojada.
- **Pruebas del usuario posteriores a cambios:** verificar 375, 768, 1024 y 1440 px, sitios de Frisco/Flower Mound/Southlake, selección de mapa, anclas de Locations/footer, scroll, carga de iframe y CTA final; todo sigue EN VALIDACIÓN hasta comprobarlo.
- **Datos comerciales:** confirmar dirección exacta de Southlake, horarios, tarifas y disponibilidad de tratamientos antes de producción.
- **Google Maps API:** si el cliente exige tres marcadores simultáneos dentro del mapa oficial, registrar y restringir una clave de Google Cloud Maps Embed/JavaScript API en una fase posterior. No inventar ni incrustar una clave.
