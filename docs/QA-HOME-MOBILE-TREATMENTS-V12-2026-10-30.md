# Thaissage Center — Home móvil / Treatments v12

**Fecha:** 30 octubre 2026  
**Instrucción del usuario:** aplicar en móviles la navegación en dos columnas sobre las seis fotografías de OUR TREATMENTS, recuperar espacio de lectura, conservar scroll cinematográfico, sustituir flechas tipo emoji por SVG auténticos, agregar `+ Details` hacia cada servicio y estilizar `Book Now` como botón fotográfico semitransparente. **No modificar desktop ni otras secciones aprobadas salvo la normalización no invasiva de iconos móviles.**

## Cambios implementados

1. En `assets/js/home-scroll-ritual-v4.js` se amplía **solo** el modo móvil Treatments (`config.detailsRoutes`): los seis capítulos conservan la fuente de datos real de `.treatment-card`, fotografías y precios publicados, selector Fresha a través de su `sourceLink.click()` original y transición desde la derecha por scroll nativo. No se implementan escuchas wheel/touch ni se bloquea el scroll.
2. Una navegación de **dos columnas** muestra los seis nombres clicables en este orden editorial: Traditional Thai / Thai Combination; Swedish / Deep Tissue; Couples / More Ways to Unwind. No se altera el orden de capítulos ni su contenido. Selección directa por clic ubica el scroll en la escena escogida, sin navegar fuera.
3. `aria-current=step`, indicadores de progreso y texto subrayado para foco de teclado. Los controles permanecen fuera de los paneles cruzados para no quedar `inert` al cambiar la imagen.
4. `+ Details` individual en los seis capítulos, a:
   - `massage-services/thai-massage/`
   - `massage-services/thai-combination-massage/`
   - `massage-services/deep-tissue-massage/`
   - `massage-services/swedish-massage/`
   - `massage-services/couples-massage/`
   - `massage-services/specialty-massages/`
5. Icono de Book Now creado con SVG inline, no con texto unicode que Safari/iPhone pueda mostrar como emoji. El CTA existente conserva la selección de sede.
6. `assets/css/home-treatments-mobile-v12.css` organiza el espacio de los capítulos, pone copia arriba, hint discreto, navegación 2×3 separada del CTA fijo inferior y botón oscuro translúcido de borde marfil. La pista se amplía a `990svh` para mantener pausas suaves entre capítulos sin afectar scroll nativo.
7. Bajo 660 px de alto y en `prefers-reduced-motion:reduce` se conservan las seis tarjetas fotográficas originales como fallback accesible.
8. `assets/js/home-mobile-icons-v12.js` convierte **solo en móvil** cualquier flecha decorativa `↗` usada en los spans del Home, incluido Signature, en SVG real. Al volver a desktop restaura su nodo de texto y no altera la estructura aprobada desktop. Se detectan recreaciones de etapas mediante MutationObserver de childList sin intervenir en scroll.
9. `index.html` únicamente referencia el nuevo CSS tras v11, usa versión actualizada del scroll JS y enlaza el normalizador de iconos después del controlador.

## Auditoría estática en GitHub
- Archivos reconsultados desde la rama principal después de guardar. JS v4 e iconos v12: sintaxis válida. CSS v12 con llaves balanceadas y consultas solo para móviles.
- Seis rutas `+ Details` distintas y todas sus páginas internas verificadas en el repositorio.
- Seis tratamientos originales siguen presentes en el HTML; CTA Fresha, imágenes, duración/precios y `noindex` preservados.
- Desktop Treatments conserva su script `treatments-chapters.js` y CSS, no tocados. Signature scroll / composición sigue con su lógica existente. Ninguna sección fuera de Treatments ha recibido cambios de layout.
- No se añadió ningún evento de scroll hijacking ni scroll automático sin interacción.

## Pendiente de validación visual/funcional
- Verificar scroll natural, pausa/zoom, seis transiciones y navegación rápida en Safari iPhone a **375/390/430 px** con alturas reales; comprobar que los controles no se solapen con barra fija inferior.
- Probar explícitamente tratamientos con títulos largos (Thai Combination; More Ways to Unwind), todos los enlaces `+ Details` y el selector Fresha.
- Verificar la sustitución de los emoji/flecha por SVG en iPhone; comprobar teclado/VoiceOver en navegación y reduced-motion.
- Revisión de regresión a 768/1024/1440 px. No se han capturado/inspeccionado renders reales desde esta sesión.

**Estado:** IMPLEMENTADO Y COMPROBADO EN CÓDIGO / VALIDACIÓN VISUAL MÓVIL PENDIENTE. El sitio continúa en `noindex`.
