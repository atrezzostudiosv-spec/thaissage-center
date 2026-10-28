# QA — Thaissage Center Home v1
**Fecha:** 28 octubre 2026 · **Fase:** Home en validación · **Rama:** `work/home-v1`

## Pruebas ejecutadas localmente
- Se renderizó el Home en Chromium mediante Playwright a **375, 768, 1024 y 1440 px**; en los cuatro tamaños: ancho del documento igual al viewport y **sin desbordamiento horizontal**.
- Existe **un único H1**, siete H2, seis destinos de navegación internos distintos y **ningún enlace de ancla roto**.
- El menú móvil abre, navega y cierra a 375 px.
- El selector de reserva abre y cierra por botón y por Escape; muestra **los tres enlaces Fresha**. En escritorios se comprobó igualmente su cierre.
- En las cuatro resoluciones la estructura y las interacciones esenciales se ejecutaron sin errores bloqueantes en las pruebas.
- Con `prefers-reduced-motion: reduce`, las escenas se muestran sin clase de animación y el contenido permanece visible.
- Sin JavaScript, los tratamientos siguen visibles y las reservas globales conservan el enlace alternativo a `#locations`.
- Meta `noindex,nofollow,noarchive` y `robots.txt` de bloqueo presentes.

## Verificación pública limitada
- Las fichas de **Frisco, Flower Mound y Southlake en Fresha** son páginas públicas accesibles, y la dirección de Square identifica una página de eGift Cards.
- No se ha efectuado ni simulado una reserva ni una compra con éxito.

## No comprobado
- Las capturas locales sustituyeron fotografías de Unsplash por imágenes locales para poder revisar la maqueta: el entorno de navegador no accede a la red externa. **No se han verificado los encuadres exactos de Unsplash en un navegador conectado.**
- No hay prueba auditada de Core Web Vitals, Lighthouse, contraste WCAG 2.2 AA sobre cada fotografía, ni lectores de pantalla reales.
- Falta inspección editorial humana de cada escena con fotografía definitiva, incluido scroll inverso y alturas bajas.
- Las 17 páginas internas y los contenidos de fase 3 permanecen **pendientes de desarrollo**, por decisión de validación por fases.
- Conflicto comercial: Suite 101/110 Southlake, posibles horarios y tarifas desactualizadas. No usar suite de Southlake hasta confirmar.

## Resultado
**IMPLEMENTADO:** Home HTML/CSS/JS en la rama de trabajo.  
**VERIFICADO:** lectura de archivos, pruebas locales de interacción, viewport y anclas.  
**PENDIENTE:** validación visual definitiva con fotografías que se mostrarán en la web, aceptación del Home y desarrollo multipágina.

**No etiquetar como producción. Noindex hasta autorización explícita.**
