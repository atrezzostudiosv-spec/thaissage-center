# Thaissage Center — Home · Mobile Hero + Locations v9

**Fecha:** 30 de octubre de 2026  
**Estado:** implementado en rama principal; pendiente QA visual real en dispositivo.  
**Instrucción:** intervenir EXCLUSIVAMENTE en móvil el Hero y Choose Your Center, con las cuatro capturas del usuario como referencia. Mantener sin alteración desktop, Treatments, Signature, footer y páginas interiores.

## Cambios ejecutados

### Hero móvil (<=720 px)
- El párrafo `.hero-intro` se oculta **solo en móvil**; sigue en el DOM y es visible en desktop. No se elimina el contenido fuente.
- El título recibe un desplazamiento vertical moderado mediante padding del `.hero-inner`, en lugar de cambiar su tipografía aprobada.
- `Book Your Visit` y `Explore Treatments` quedan inmediatamente después del H1, ocupando el espacio donde antes se veía la descripción.
- Los CTA ajustan gaps y padding según ancho de dispositivo para no romper en 375px. Los enlaces de reservas no cambian.
- Gift Cards, pruebas de Google y barra inferior siguen presentes, con separación más respirada.

### Locations móvil (<=720 px)
- Se adapta la imagen atmosférica existente a fondo fotográfico de la sección: `thaissage-hero-spa-interior-mobile.webp`, `cover`, opacidad controlada sobre verde muy claro; imagen ilustrativa y no atribuida a ninguna sede.
- Cada `details.location-choice` recibe fondo blanco casi opaco individual, borde fino y separación para mantener contraste y orden.
- La información se alinea a los márgenes interiores del acordeón: dirección completa, CALL TO SCHEDULE, teléfono clicable, divisor fino, opening hours en dos columnas (día izquierda, horario derecha).
- Los botones verdes grandes pasan a enlaces editoriales `Book Frisco / Flower Mound / Southlake`, subrayados, 14px; `View on Map` conserva su destino original.
- Los tres acordeones permanecen cerrados por defecto en móvil mediante markup y selector actual: sin cambios JS.
- No se tocaron direcciones, teléfonos, horarios, URLs Fresha ni mapa.

## Archivos
- **Nuevo:** `assets/css/home-mobile-art-direction-v9.css`, con TODAS las reglas encerradas en `@media screen and (max-width:720px)`, `@media screen and (max-width:390px)` o reduced-motion móvil.
- **Modificado:** `index.html` solamente para añadir la referencia a la hoja v9 **después** de los estilos ya aprobados, con cache-busting `?v=20261030-mobile-hero-locations-v9-1`.
- Desktop, JS, páginas interiores y contenidos no cambiaron.

## Verificación estática
- Nueva hoja cargada al final. CSS con llaves balanceadas.
- Solo móvil: el párrafo Hero permanece en HTML; se comprueba selector de ocultación exclusivo de <=720.
- H1, Gift Cards, reseñas, dos CTA y barra de reserva preservados.
- 3 `details` cerrados inicialmente, todos con los mismos enlaces Fresha/Map, teléfonos y horarios; ids únicos y anclas internas válidas.
- `noindex,nofollow,noarchive` sin modificaciones.

## Validación pendiente
1. Comprobar fotografías, contraste y apertura de acordeón a **375 y 390 px** en Safari/Chrome, incluida rotación y barra de URL.
2. Comprobar el Hero: título más abajo, botones inmediatamente debajo, Gift Cards + reseñas sin aglomeración ni desbordamiento y barra fija no solapada.
3. Comprobar Hours a dos columnas en Frisco/Flower Mound/Southlake, especialmente nombres largos y pantallas de 320–375 px.
4. Comparar **768, 1024 y 1440 px** con la versión aprobada para confirmar que desktop/tablet no cambian.
5. No se obtuvo una captura del despliegue real desde herramientas: estos son controles de código, no una certificación visual.

**Estado:** implementado en GitHub, EN VALIDACIÓN VISUAL. No declarar Home aprobado ni listo para producción hasta revisión real.
