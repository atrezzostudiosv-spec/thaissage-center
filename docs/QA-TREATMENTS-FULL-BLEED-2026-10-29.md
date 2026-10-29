# Thaissage Center · QA del Treatment Journey full-bleed
**Fecha:** 2026-10-29
**Estado:** IMPLEMENTACIÓN EN REPOSITORIO · VALIDACIÓN VISUAL PENDIENTE
**Referencia de comportamiento:** paquete aportado por el usuario `ranchman-javascript.zip` y vídeo de Ranchman Properties del 29/10/2026.

## Referencia técnica verificada
- `visual-story-loCHz21g.js`: utiliza progreso por desplazamiento nativo, contenedor visual fijo, capas fotográficas y navegación inferior por capítulos.
- `world-map-l_XtpPqx.js`: implementa una experiencia de capítulos con navegación directa y cambio progresivo por scroll; contiene la arquitectura de `ranch-atlas`.
- El paquete incluye **34 JavaScript externos**, **14.201 scripts embebidos** y un registro de **200 páginas**. Se analizan únicamente los módulos pertinentes. **No se han copiado bibliotecas ni activos de Ranchman al proyecto Thaissage.**

## Modificación realizada
- `assets/js/treatments-chapters.js`: rediseñado con seis capítulos fotográficos, selector inferior de nombres, cálculo de progreso por desplazamiento vertical nativo, cambio progresivo de imagen y copy, zoom sutil, salto directo por capítulo y salida natural del último.
- `assets/css/treatments-chapters.css`: escena full-bleed de pantalla completa, degradados de legibilidad, tipografía sobre fotografía, barra inferior de seis nombres, composición responsive para desktop y CTA de reserva.
- `index.html`: versiones de assets actualizadas con `?v=20261029-ranchman-4` para evitar una caché anterior.
- Sin cambios en el Home restante, el catálogo original, las rutas Fresha, el copy de tratamientos ni los recursos fotográficos.

## Comprobaciones estáticas
| Control | Evidencia | Estado |
|---|---|---|
| JavaScript sintácticamente válido | Compilación de script leído en GitHub | PASA |
| Archivos CSS y JS conectados en Home | Inspección de HTML del branch `main` | PASA |
| Seis servicios conservados | Seis tarjetas fuente en `index.html` | PASA |
| Navegación inferior | Seis botones generados del contenido fuente; `goTo(index)` | PASA (código) |
| Scroll natural | No se interceptan eventos `wheel` ni `touchmove` | PASA (código) |
| Recorrido lento | 730svh de sección; ~105svh por capítulo | PASA (código) |
| Zoom de último capítulo | Interpolación adicional antes de liberar sticky | PASA (código) |
| Reservas | Botón visible llama al enlace original con `data-book-dialog` | PASA (código); interacción no probada |
| Accesibilidad | `inert`, `aria-hidden`, `aria-current`, foco de botones | PRESENTE; no auditado en navegador |
| Móvil / tablet / reduced-motion | Mejora activada solo >=1025px de ancho y >=560px de alto sin reduced motion; fallback original | PASA (código) |
| Demo noindex | Se mantiene meta robots | PASA |
| Navegador, scroll, clics y carga real de fotografías | No ejecutado mediante navegador interactivo | PENDIENTE |
| Despliegue GitHub Pages | El repositorio contiene la versión, pero no se confirmó que Pages la esté sirviendo | NO COMPROBADO |

## Próxima acción
Abrir el Home desplegado en Chromium o Safari a **1440 / 1024 / 768 / 375 px**, ejecutar scroll hacia abajo y hacia arriba, saltar a tratamientos 1, 3 y 6 desde la navegación inferior, pulsar «Book Now» y verificar selector Fresha, comprobar fotos y contraste, y revisar reduced motion. Corregir solo defectos reproducibles; no reabrir fases cerradas.
