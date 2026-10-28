# Fase 4B · Treatments — Carrusel cinematográfico horizontal
**Fecha:** 28 octubre 2026
**Estado:** desarrollado en `work/home-v1`; validación visual final pendiente.

## Dirección y alcance
- Se conserva íntegro el titular «Find Your Kind of Massage», su introducción y los seis grupos de servicios ya documentados.
- Nuevo carrusel de borde a borde con seis tarjetas editoriales, fotografías protagonistas y CTA que abre el selector Fresha original.
- El scroll vertical nativo desplaza el rail horizontalmente en escritorio (ancho >=981 px, alto >=660 px y sin preferencia de movimiento reducido); cada tarjeta sale por el borde izquierdo y la siguiente entra por el derecho.
- No se bloquean wheel, scroll, touch ni lectura con teclado. Hay flechas, foco visible y tratamiento de enlaces fuera del viewport.
- En móvil/tablet el carrusel funciona con swipe horizontal nativo, scroll snap y desplazamiento vertical normal. En `prefers-reduced-motion` no se activa el sticky.
- Las secciones anteriores y posteriores, reservas, eGift y formularios no se modifican.

## Biblioteca propia de seis fotografías optimizadas
Todos los archivos son **ilustrativos/generados para el proyecto**, no fotografías de empleados, clientes o instalaciones reales.
Las seis fotografías de 1100 × 760 px se han adaptado a partir de imágenes originales generadas en el proyecto y composiciones de prueba aprobadas por Atrezzo. Algunos recortes proceden de fotografías generadas integradas originalmente en maquetas; se eliminan textos y elementos de interfaz, se ajustan encuadres y se unifica el color.

| Servicio | Archivo WebP | Alternativa semántica |
|---|---|---|
| Traditional Thai Massage | thaissage-treatment-thai-traditional-cinematic.webp | Thai-style illustrated massage |
| Thai Combination Massage | thaissage-treatment-thai-combination-cinematic.webp | Hands applying flowing massage strokes |
| Deep Tissue Massage | thaissage-treatment-deep-tissue-cinematic.webp | Close-up focused massage pressure |
| Swedish Massage | thaissage-treatment-swedish-cinematic.webp | Soft flowing massage strokes |
| Couples Massage | thaissage-treatment-couples-cinematic.webp | Warm spa interior prepared for treatment, not proof of two therapists or two beds |
| More Ways to Unwind | thaissage-treatment-specialty-cinematic.webp | Botanical and herbal spa still life |

Todos los archivos se sirven localmente desde `web/assets/images/` y cargan de forma diferida con `width`, `height`, `alt` y `decoding=async`. No se añadieron precios ni duraciones.

## Verificaciones técnicas
- Seis tarjetas, seis archivos WebP subidos, 317,066 bytes de imágenes.
- Tres URLs exactas de Fresha conservadas y botón eGift intacto.
- `noindex` conservado; enlaces hash y CTA documentados.
- Scroll basado en evento pasivo + `requestAnimationFrame`, sin escuchas wheel ni scroll lock.
- Reducción de movimiento y touch/swipe contemplados.
- **Pendiente de comprobar en navegador real:** scroll de ida y vuelta; controles teclado; ausencia de overflow; responsive 375/768/1024/1440; contraste de los nuevos cards. No declarar la fase validada antes de estas pruebas.

**Siguiente trabajo:** validar visualmente esta sección del Home y corregir únicamente defectos reproducibles. Las 17 páginas internas continúan pendientes.

---
# Thaissage Center — Treatments / Cinematic Centered Carousel v2
**Fecha:** 2026-10-28
**Alcance:** una sección del Home, #treatments. Sustituye el carrusel horizontal vinculado al scroll vertical. El resto del Home permanece intacto.

## Dirección visual
- Inspiración: referencia facilitada por el cliente (tres grandes cards fotográficas, fondo marfil con luces desenfocadas, iconos finos, textos superpuestos, botón cápsula y tarjeta central ampliada).
- No es un fondo plano: degradados, veladura bokeh creada con fotografía editorial propia `thaissage-gift-experience-cinematic.webp`; tarjetas con fotografías cinematográficas originales que ya existían en `assets/images`.
- Encabezado editorial de dos columnas, título “Massage Treatments Designed Around You.” y párrafo comercial original.
- Seis tarjetas reales: Traditional Thai, Thai Combination, Deep Tissue, Swedish, Couples, More Ways to Unwind.
- Fotografía a sangre, gradiente de lectura, icono SVG específico, H3 y descripción originales, aclaración de disponibilidad por sede, CTA Book Now → selector Fresha.
- **No inventar precios, duraciones ni resultados clínicos.** Los ejemplos económicos de la referencia no se copiaron.

## Comportamiento
- Carrusel horizontal nativo mediante overflow-x/scroll-snap, NO controlado por scroll vertical ni fijado con sticky.
- Primera presentación: segunda tarjeta centrada en escritorio (tarjeta a la izquierda y a la derecha); primera en móvil.
- Zoom suave `scale(1.035)` en desktop y `1.015` en móvil para el elemento activo; fotografías con pequeño zoom al hover.
- Flechas anterior/siguiente, seis indicadores clicables, deslizamiento táctil y teclado ArrowLeft/ArrowRight/Home/End cuando el carrusel tiene foco.
- `prefers-reduced-motion: reduce` elimina zoom y transiciones.
- Todas las tarjetas permanecen en el DOM y sus CTA usan el selector de las tres sedes Fresha.

## Verificación
- **Verificado mediante lectura de archivos GitHub:** 20/20 comprobaciones estáticas: sintaxis JavaScript, seis tarjetas, seis fotos WebP distintas, seis controles de puntos y CTA, sin precios/duraciones inventados, scroll nativo, zoom CSS, menú y secciones conservados, tres URLs Fresha, Square y noindex.
- **Bloqueo:** navegador Chromium del entorno rechaza navegar a la preview pública (`ERR_BLOCKED_BY_ADMINISTRATOR`). No se puede marcar el QA visual real a 375/768/1024/1440 px como completado.
- **Pendiente:** revisión de render, swipe/teclado/foco, contraste sobre fotografías y desempeño en la URL publicada.

**Estado:** implementado / EN VALIDACIÓN VISUAL.


## Treatments v3 — datos comerciales y secuencia de escritorio (2026-10-29)

**Cambio solicitado**: mantener intacto el comportamiento táctil en móvil, reincorporar en escritorio el efecto de escena detenida y tarjetas avanzando a medida que el usuario hace scroll vertical, añadir zoom de la tarjeta con hover, duración/precio y botones de contorno delicado como la referencia.

**Fuente comercial contrastada**: sitio original Thaissage Center, https://thaissagecenter.com/, secciones Thai Massage, Thai Combination, Swedish, Deep Tissue y Couples; además del anexo Fase 3. Valores publicados: masajes individuales 60 min $80, 90 min $120, 120 min $160. Couples 60 min $160, 90 min $240, 120 min $320. No se han inferido precios entre sedes.

**Precios en las seis tarjetas**: Thai, Thai Combination, Deep Tissue y Swedish = `60–120 min · From $80`; Couples = `60–120 min · From $160`; More Ways to Unwind = `Varies by treatment · See pricing`, ya que agrupa servicios con tarifas/duraciones diferentes.

**Implementación**:
- Desktop: sección sticky con `is-scroll-ready`, activada solamente por `(min-width:981px) and (min-height:690px) and (hover:hover) and (prefers-reduced-motion:no-preference)`. Altura de sección = viewport + distancia horizontal real. Scroll vertical nativo mueve `scrollLeft` sin bloquear wheel. Zoom de toda la card al pasar el mouse.
- Móvil: conserva el scroll-snap táctil, deslizamiento horizontal, controles y reglas de ampliación previas. No se habilita sticky en móvil ni movimiento forzado.
- CTA: cápsula fina de contorno translúcido y flecha con hover discreto; se mantienen enlaces al selector Fresha.
- Nota comercial: tarifa inicial orientativa del sitio publicado; el precio y disponibilidad deben confirmarse con cada sede por Fresha.

**QA estático**: 22/22 controles superados en archivos de la rama, incluyendo JS sintáctico, 6 grupos, 6 duraciones/precios, valores confirmados, sticky acotado al escritorio, continuidad móvil, noindex, enlaces Fresha/Square e IDs/anclas.

**PENDIENTE**: QA real de sticky (scroll hacia adelante/atrás, enlace con foco y hover zoom) en desktop 1024/1440 y mobile 375/768; navegación visual del website desplegado. Prohibido marcar como acabado visualmente sin verificar.
