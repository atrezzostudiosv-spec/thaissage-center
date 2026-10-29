# ATREZZO WEBS — THAISSAGE CENTER

**Fecha de auditoría:** 2026-10-28  
**Sitio original:** https://thaissagecenter.com/  
**Fuentes revisadas:** sitio público (Home, Our Locations, Cryptocurrency), copia HTML y recursos aportados en `thaissage center.zip`, instrucciones `Markdown pegado(4).md`, manual ATREZZO WEBS Dirección Artística y Scroll v2.0 y perfiles de reservas Fresha de las tres sedes.

## Estado maestro

| Fase | Estado | Comprobación / nota |
|---|---|---|
| 1. Auditoría original | CERRADA (alcance documental) | Auditoría compartida y avance autorizado con «siguiente fase»; pruebas interactivas originales no realizadas, registradas como limitación. |
| 2. Estrategia y arquitectura | CERRADA (aprobación de avance) | La instrucción posterior «inicia la fase 3» autoriza trabajar sobre las 18 rutas, los CTA por sede y la arquitectura de Fase 02. Los datos comerciales contradictorios siguen pendientes, sin reabrir la fase estratégica. |
| 3. Contenido completo | CERRADA PARA CONTINUIDAD (validación comercial pendiente) | 18 páginas redactadas y mapa editorial documentado. La orden «Sigue a siguiente fase» autoriza continuidad de diseño, **no** aprobación de datos comerciales para publicación. Archivo: `FASE-03-CONTENIDO-COMPLETO-18-PAGINAS.md`. |
| 4. Dirección artística / partitura visual | EN VALIDACIÓN | Partitura de 92 escenas para 18 rutas; Home implementado bajo dirección artística aplicada, pendiente de QA visual. |
| 4B. Desarrollo visual / prototipo | EN VALIDACIÓN | Home implementado en `index.html`, CSS y JS; demo de GitHub Pages accesible en navegador conectado. No hay comprobación visual completa en esta intervención. |
| 5. Validación | EN PROCESO | Auditoría estática parcial del Home (29-10-2026), pendiente 375/768/1024/1440 px, interacciones y pruebas externas. |
| 6. Entrega / publicación | PENDIENTE | No autorizado. |

## Hechos sustentados

- La marca se presenta con el lema «Thailand to Texas» y «Since 2017» (afirmación del sitio).
- Sedes: Frisco (9300 John Hickman Pkwy, suite 605), Flower Mound (1021 Long Prairie Road, suite 404), Southlake (101 River Oaks Drive, suite 110 según Home y Fresha).
- Se identifican masajes Thai, Swedish, Thai Combination, Office Syndrome, Deep Tissue, parejas, cuatro manos, aromaterapia, piedras calientes, paquetes Chiang Mai/Bangkok/Phuket y sauna. La oferta de Fresha por sede añade otras categorías como reflexología, prenatal, cupping y tratamientos corporales; no asumir presencia en todas las sedes.
- Reserva externa mediante Fresha para cada sede y eGift Card con Square.
- Existe una página Cryptocurrency que anuncia aceptación de Bitcoin.
- La copia HTML aportada tiene un H1 «Since 2017», no contiene meta description y no incluye un formulario HTML local (la reserva se enlaza a Fresha).

## Hallazgos prioritarios

1. **Información entre fuentes:** página Our Locations dice Southlake «Suite 101», mientras que Home y Fresha indican «Suite 110». Aclarar antes de publicar.
2. **Horarios:** Home indica domingo 10am–8pm en las sedes; Fresha muestra domingo 11am–8pm para Frisco. Verificar antes de consolidar.
3. **Servicios por sede:** la página Home indica sauna únicamente en Flower Mound, pero Fresha muestra sauna como servicio/amenidad en otras referencias; verificar disponibilidad precisa.
4. **Catálogo:** Fresha contiene categorías de tratamientos no expuestas claramente en Home; no reducir la oferta al redactar nuevas páginas.
5. **Salud y regulación:** la búsqueda pública muestra mención de «Cryotherapy» junto a texto sobre terapia LED, anti-aging y «FDA Cleared»; esta sección no figura en la copia HTML subida. Confirmar dispositivo, claims, tratamientos y sede antes de reutilizar.
6. **SEO:** título genérico y H1 no descriptivo; falta meta description en copia aportada; evaluar estructura SEO local y Open Graph.
7. **Imagen:** la copia local incluye una fotografía genérica de piedras y orquídea. Los perfiles de Fresha muestran imágenes de instalaciones reales; solicitar autorización de uso y originales antes de incorporarlas.
8. **Reservas:** los botones externos están documentados en el HTML; la ejecución de reserva y el flujo completo de pago no se han comprobado.

## Propuesta artística (NO APROBADA)

**Concepto:** «Thailand to Texas. The Art of Feeling Restored.»  
**Expresión:** serena, humana y contemporánea; raíces tailandesas sin clichés visuales.  
**Paleta sugerida, no acreditada como branding:** marfil cálido, cacao, arena, acento orquídea discreto.  
**Tipografía:** aprovechar Playfair Display y Open Sans existentes, con jerarquía más estricta.  
**Fotografía:** salas, textiles, manos profesionales, detalles auténticos; imágenes de instalaciones reales priorizadas frente a stock.  
**Movimiento:** M2 editorial en Home, M1 en páginas de consulta/reserva; RE suave, ZF mínimo y una sola transición fotográfica breve. Scroll siempre nativo, accesible y reducible.

## Límites de la auditoría documental y pendientes comerciales

- La instrucción «siguiente fase» autoriza continuar a la estrategia, sin significar que hayan sido comprobados los flujos externos ni que exista aprobación final del diseño.
- Datos comerciales contradictorios pendientes de validación: suite Southlake, domingos, sauna, tratamientos específicos, tarifas y claims.
- La prueba de navegación real en 375/768/1024/1440 y la auditoría de formularios/reservas siguen **NO COMPROBADAS**; se ejecutarán en la fase de validación del proyecto, no se presentan como hechas.

## Fase 03 — Entregables y control (28 octubre 2026)

- Se conservaron todas las 18 rutas aprobadas sin crear webs paralelas por sede.
- Se generó `FASE-03-CONTENIDO-COMPLETO-18-PAGINAS.md` con 18 páginas completas, microcopy compartido, footer, títulos y descripciones SEO individuales, CTA reales hacia los tres perfiles Fresha y eGift en Square, nombres de tratamiento, imágenes y alt text propuestos, y enlaces internos.
- Control automatizado aprobado: **18 rutas únicas / 18 SEO titles / 18 meta descriptions / 18 CTA primarios**; títulos <= 65 caracteres y descripciones <= 165 caracteres.
- Se recopilaron las tarifas históricas del Home original sin presentarlas como precios vigentes. Se anotaron diferencias de suite Southlake, apertura dominical Frisco y disponibilidad por sede.
- No se han añadido reseñas inventadas, garantías médicas, políticas legales, empleados o imágenes ficticias.
- No se desarrolló código ni se modificaron sistemas reales; las reservas y compras externas no se probaron de extremo a extremo.

## Próxima acción única

Aprobar la dirección artística de Fase 04 y producir **solo el prototipo interactivo del Home**, con recursos visuales autorizados o inequívocamente ilustrativos. Datos comerciales contradictorios siguen pendientes de validar antes de publicar; no reabrir Fases 01–03 sin causa nueva.

## URLs de evidencia

- https://thaissagecenter.com/
- https://thaissagecenter.com/our-locations
- https://thaissagecenter.com/cryptocurrency
- https://www.fresha.com/a/thaissage-center-frisco-9300-john-hickman-parkway-kaw23s8f
- https://www.fresha.com/a/thaissage-center-flower-mound-1021-long-prairie-road-kiv9ttxc
- https://www.fresha.com/a/thaissage-center-southlake-101-river-oaks-drive-t52fypr6

## Fase 04 — Dirección artística y partitura (28 octubre 2026)

- 18 rutas documentadas en Fase 03 mapeadas individualmente a partituras de escenas: **92 filas** con sección, objetivo, contenido/fuente, patrón visual, foto/foco, movimiento, móvil, CTA y estado.
- Ficha de identidad basada en evidencia comercial y galería real observada de las tres fichas Fresha; tipografía, paleta y criterio de contraste; firma de scroll y reglas responsive.
- Contraste matemático de tokens de color: cacao sobre marfil 12,18:1; orquídea sobre marfil 3,32:1 (no válida para texto normal); arena sobre marfil 2,02:1 (no válida para texto). Contrast sobre fotografía no comprobado.
- Se conserva la propuesta serena y cercana «Thailand to Texas · The Art of Feeling Restored» sin reinterpretar como spa de lujo.
- Movimiento M2 en Home y Signature; M1 en catálogo/tratamientos/ubicaciones; M0 en Contact y Cryptocurrency. Scroll nativo, reduced motion y accesibilidad como criterios obligatorios a verificar.
- Recursos fotográficos **no generados, no licenciados**. Se requiere autorización de originales y correspondencia por sede; tampoco se ha creado prototipo ni ejecutado ninguna prueba de navegador.
- **Estado actual:** partitura visual EN VALIDACIÓN; las decisiones comerciales irresueltas se mantienen como impedimentos de publicación, no como motivo para rehacer fases ya terminadas.

## Infraestructura GitHub — 28 octubre 2026

- Repositorio verificado: `atrezzostudiosv-spec/thaissage-center` (público, rama principal `main`).
- **Repositorio inicializado** con documentación, guías y carpetas de código/recursos; rama `work/home-v1` creada.
- **Nota histórica supersedida al 29-10-2026:** el Home ya está implementado y existe demo GitHub Pages; QA de navegador completo sigue pendiente.
- **Repositorio y estructura: CERRADO (verificados 11 archivos en `main` y lectura de `README.md` en `work/home-v1`).**
- Siguiente fase vigente (29-10-2026): QA visual interactiva del Home; luego avanzar con las páginas internas. No volver a construir el Home desde cero.
- Nunca incorporar fuentes originales de terceros o fotografías de las instalaciones a este repositorio público sin derechos comprobados.

## Actualización de continuidad — 29 de octubre de 2026

- **Home existente:** se verificó su implementación leyendo `index.html`, `assets/css/styles.css`, `assets/css/home-light-ritual.css` y `assets/js/app.js` en `main`, además del contenido textual de la demo GitHub Pages abierta en navegador conectado.
- **Auditoría estática:** 1 H1, 9 secciones, 45 enlaces internos anclados sin destinos ausentes, 6 etiquetas `img` con `alt`, 17 recursos WebP referenciados y los 17 existentes en el repositorio. Demo `noindex,nofollow,noarchive`; CTA de Fresha por las 3 sedes y eGift Square presentes.
- **Pendientes comprobados por código:** falta `og:image`; el formulario se dirige explícitamente a Atrezzo como prueba (no se comprobó recepción ni debe presentarse como comunicación del cliente); canonical final no fijada para dominio de producción.
- **Sin comprobar:** QA interactiva real de scroll, carrusel, menú, foco y responsive a 375/768/1024/1440; procesos completos de Fresha/Square; horarios, suite y disponibilidad por sede, y reivindicaciones clínicas.
- **Regla de continuidad:** auditoría/estrategia/contenido documental ya completados no se reabren; no se modificó HTML, CSS, JS, contenido, ni fotos aprobadas en esta intervención.
- **Informe:** [docs/QA-HOME-2026-10-29.md](docs/QA-HOME-2026-10-29.md).
- **ESTADO ACTUAL:** Home **EN VALIDACIÓN**, 17 rutas internas pendientes de implementación; sitio no autorizado a producción.
- **SIGUIENTE ACCIÓN ÚNICA:** pruebas visuales interactivas del Home en 375/768/1024/1440 px y correcciones solo sobre defectos reproducibles.

## Rediseño aprobado de Treatments — 29 de octubre de 2026

- **Solicitud del usuario:** sustituir exclusivamente el grid repetitivo de seis tratamientos del Home por una secuencia cinematográfica desktop según el mockup aprobado.
- **REALIZADO EN `main`:** `index.html` conecta `assets/css/treatments-chapters.css` y `assets/js/treatments-chapters.js`. El nuevo layout de desktop usa una fotografía protagonista, copy y CTA de cada tratamiento, contador 01/06, seis miniaturas seleccionables, flechas de navegación y transiciones mediante scroll nativo; el último capítulo tiene zoom fotográfico progresivo y la sección suelta naturalmente el scroll.
- **CONTENIDO:** el componente lee los datos de las seis tarjetas originales en DOM, evitando divergencia de nombres, descripciones, precios y enlaces Fresha; las 17 imágenes ya presentes en el repositorio son la fuente disponible. No se han creado fotos ficticias de locales/empleados.
- **RESPONSIVE / ACCESSIBILITY:** la mejora solo se instancia a partir de 1101 px de ancho, 720 px de altura y sin preferencia de movimiento reducido. En tablet, móvil, ventanas bajas, reduced-motion o JavaScript deshabilitado, permanecen las seis tarjetas originales. No se intercepta wheel ni touch. CTA delegado al selector de ubicación existente.
- **VERIFICACIÓN ESTÁTICA:** archivos nuevos legibles en GitHub, CSS/JS enlazados desde Home, seis tarjetas originales preservadas, lógica de activación/desactivación, seis capítulos, precios y CTA derivadas del original, contador, navegación y condiciones de reduced motion presentes; noindex mantenido.
- **NO COMPROBADO:** renderizado público de la última versión de GitHub Pages, QA visual/scroll real en 375/768/1024/1440, click en navegación y reservas en navegador, métricas de rendimiento y accesibilidad ejecutada. No declarar la escena cerrada hasta probarla.
- **ESTADO:** Treatments desktop **EN VALIDACIÓN VISUAL**. Resto del Home **NO MODIFICADO**. No autorizado a producción.
- **SIGUIENTE ACCIÓN ÚNICA:** observar la sección en navegador real a 1440/1024/768/375 y corregir únicamente defectos reproducibles.

## Corrección de activación de la sección Treatments — 29/10/2026
- **Incidencia:** el usuario recargó la demo y seguía viendo el catálogo antiguo.
- **Causa técnica identificada en código:** el nuevo componente requería un viewport de al menos 1101 px de ancho y 720 px de alto, condición demasiado estricta para portátiles con barras del navegador visibles. No se ha confirmado mediante inspector que fuera la única causa.
- **Corrección en main:** condición de activación sincronizada entre CSS y JS a ancho >=1025 px, alto >=560 px y motion permitido. CSS responsive compacto para altos 560–760 px, manteniendo el flujo original en tablet/móvil, ventanas inferiores y motion reducido.
- **Caché:** referencias CSS y JS del Home actualizadas a versión `20261029-2` para invalidar recursos previos.
- **Comprobado por repositorio:** HTML enlaza ambos archivos nuevos, existe contenido actualizado, JavaScript sintácticamente válido; se mantienen los seis tratamientos y sus CTA del selector Fresha.
- **No comprobado:** build/despliegue final en GitHub Pages y navegación visual en el navegador del usuario. Hasta observarlo, estado EN VALIDACIÓN; no atribuir la incidencia exclusivamente al breakpoint.
- **SIGUIENTE ACCIÓN:** confirmar visualmente la aparición en la demo de escritorio y, en caso de persistir, inspeccionar el origen publicado (respuesta de recursos y errores de consola).

## Rediseño inmersivo de Treatments basado en la referencia Ranchman — 29/10/2026
- **Nueva decisión del usuario:** sustituir el diseño anterior de tratamientos (tarjetas y miniaturas) por una experiencia full-viewport con fotografía completa, seis títulos de servicios en una barra inferior, transiciones lentas por scroll nativo, navegación directa con clic y salida fluida del sexto tratamiento. Solo desktop.
- **Referencias examinadas:** vídeo Ranchman (40,5 segundos), archivo web guardado y `ranchman-javascript.zip` (34 JS externos, 14.201 embebidos). Módulos pertinentes `visual-story-loCHz21g.js` y `world-map-l_XtpPqx.js`. Solo se estudió el comportamiento; no se copió su código ni sus imágenes.
- **Implementado en `main`:** reemplazados `assets/js/treatments-chapters.js` y `assets/css/treatments-chapters.css` con una escena sticky de 730svh, seis fotografías full-bleed, titulares/descrición/precios/CTA superpuestos, barra inferior clicable y zoom suave en el último capítulo. Se mantuvieron las seis tarjetas originales como fuente y respaldo; interfaz de móvil/tablet/reduced-motion sin cambios.
- **Correcciones internas:** delegación del CTA activo al selector Fresha original; visibilidad continua de las capas para hacer crossfade entre capítulos; versión de archivos `20261029-ranchman-4`.
- **Verificación real:** JavaScript sintácticamente válido, referencias HTML/CSS/JS coherentes, seis servicios y datos originales conservados, `noindex` intacto. Informe: [docs/QA-TREATMENTS-FULL-BLEED-2026-10-29.md](docs/QA-TREATMENTS-FULL-BLEED-2026-10-29.md).
- **NO verificado:** resultado visual o ejecución de JavaScript en el despliegue de GitHub Pages, scroll real, click de botones, compatibilidad por navegador y respuesta a 375/768/1024/1440 px. La herramienta pública de lectura de la demo no permitió acceder a esa última versión. No afirmar entrega final.
- **ESTADO:** Treatments full-bleed **EN VALIDACIÓN VISUAL**. Home restante y fases previas no modificados.
- **SIGUIENTE ACCIÓN ÚNICA:** abrir en navegador real la demo y comprobar seis capítulos, barra inferior y flujos de reserva. Corregir únicamente fallos observados.

## Tratamientos: limpieza de navegación inferior — 29/10/2026
- **Petición del usuario:** eliminar los marcos morados que hacen parecer seis tarjetas/botones en la barra inferior, pero conservar nombres clicables, líneas de progreso y tratamiento activo. El resto del layout full-bleed está aprobado visualmente por captura de usuario.
- **Causa identificada:** la regla global `button,a:focus-visible` de `assets/css/styles.css` genera contorno sobre todos los `button`; no se modificó la regla global para evitar impacto en secciones ya aprobadas.
- **Cambio limitado:** `assets/css/treatments-chapters.css` restablece `outline:0`, `border:0`, `box-shadow:none` y mantiene foco de teclado distinguible con subrayado del nombre y línea clara. Se cambió la versión de la hoja en `index.html` a `20261029-nav-clean-5` para evitar caché.
- **Móvil (SIN CAMBIOS):** se mantiene la cuadrícula en una columna a <=720px como fallback; propuesta futura de capítulos fotográficos verticales en flujo normal, sin los 6 sticky prolongados del desktop. No implementar hasta decisión de diseño; no confundir con prueba responsive.
- **VERIFICADO:** CSS/HTML en GitHub y enlace versionado. **NO COMPROBADO:** render interactivo de la demo, foco real y todas las resoluciones.
- **ESTADO:** ajuste desktop implementado, EN VALIDACIÓN VISUAL; fase móvil sin modificar. **SIGUIENTE PASO:** confirmar en navegador que los seis marcos desaparecieron, con foco de teclado visible y CTA intactos.
