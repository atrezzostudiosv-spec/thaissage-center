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

## Tratamientos móvil · Capítulos fotográficos verticales — 29/10/2026
- **Decisión del usuario:** tras aprobar el desktop full-bleed y la eliminación de marcos inferiores, continuar con la adaptación móvil propuesta de seis escenas fotográficas verticales, sin un sticky de seis capítulos.
- **Realizado:** hoja `assets/css/treatments-mobile.css` nueva, cargada al final de las hojas de estilo en `index.html` con `?v=20261029-mobile-v1`. Solo aplica hasta 720 px de ancho; conserva las reglas 721–1024 px y el desktop >=1025 px. No se modificaron JS, texto, fotografías, datos de tratamientos ni las secciones fuera de Treatments.
- **Composición:** sección de título clara seguida de seis capítulos full-width, fotografía con recorte `object-fit:cover`, degradado negro calibrado, contador 01/06, titular y descripción sobre imagen, duración, tarifa y CTA original. Alturas fluidas de referencia 82svh con mínimo legible de 550 px; scroll vertical totalmente nativo, sin seis controles comprimidos. La barra de reserva móvil global permanece.
- **Movimiento:** zoom fotográfico opcional mediante CSS scroll-driven animation solo en navegadores compatibles y sin `prefers-reduced-motion`; fallback estático íntegro, sin ocultar contenido.
- **Verificación estática:** HTML enlaza CSS nuevo **después** del CSS desktop; seis fuentes de contenido en HTML y sus seis CTA conservados; hojas móviles limitadas a <=720 px; CSS equilibrado; noindex preservado. Revisión de código registrada; no constituye prueba visual en navegador.
- **Pendiente:** probar el deploy interactivo y recortes de las seis fotografías a 375 px, 390 px y tamaños intermedios, altura baja, pantalla horizontal, visibilidad del CTA con barra móvil fija, contraste, loading y comportamiento de scroll. La herramienta web no ha podido abrir GitHub Pages en esta sesión.
- **ESTADO:** móvil **IMPLEMENTADO EN REPOSITORIO / EN VALIDACIÓN VISUAL**. No marcar cerrado ni listo para producción.
- **SIGUIENTE ACCIÓN:** observar en teléfono o navegador 375×667 y 390×844, comprobar seis encuadres/CTA y corregir solo defectos reproducibles.

## Auditoría integral del Home y plan de integración visual — 29/10/2026
- **Alcance:** revisión documental de las nueve secciones del Home, cuatro hojas CSS, dos JS, arquitectura de CTAs, fuentes visuales, flujo de scroll y responsive previsto en código; contrastada con la captura de Treatments del usuario y documentos de Fase 04.
- **Informe nuevo:** [docs/AUDITORIA-HOME-UNIFICACION-VISUAL-2026-10-29.md](docs/AUDITORIA-HOME-UNIFICACION-VISUAL-2026-10-29.md).
- **Decisión recomendada:** conservar Hero y Treatments como polos visuales aprobados, sin replicar la secuencia larga sticky en otras secciones. Focalizar mejoras en Locations (directorio editorial), Our Approach (pausa fotográfica de identidad, no masaje repetido) y Signature (composición asimétrica). Gift y cierre: retoques posteriores solo si hay problemas comprobados.
- **Deuda técnica observada:** 4 CSS ~94KB fuente y 230 `!important`; salto en barra de Treatments con `behavior:'instant'`, las tres sedes del footer enlazan al mismo `#locations`, repetición de imagen Gift, fotos apaisadas usadas en móvil; falta `og:image`. Precios, rating y formulario de prueba son bloqueos de validación comercial, no motivos para rehacer fases cerradas.
- **CAMBIOS EN CÓDIGO:** ninguno en esta auditoría. No se reclaman pruebas visuales a 375/768/1024/1440 ni validación de compras/correos.
- **ESTADO:** Home / Dirección artística unificada **EN VALIDACIÓN**. Fases 01–03 documentales permanecen cerradas; no se crea una segunda fase activa.
- **SIGUIENTE ACCIÓN ÚNICA:** intervenir de forma focalizada las tres secciones (Locations, Our Approach y Signature) conforme a la partitura y verificar su integración sin alterar Hero ni Treatments.

## Integración aprobada: mapa editorial y cierre cinematográfico — 29/10/2026
- **Orden de usuario:** eliminar formulario de pruebas, colocar Google Maps reforzando tres ubicaciones de Texas, mantener reservas individuales; cerrar «YOUR TIME TO RESET / Make Room for Yourself» con imagen full-bleed y overlay elegante; las pruebas visuales se harán después de aplicar los cambios.
- **IMPLEMENTADO** en `main`: HTML de formulario sustituido por tres filas editoriales de Frisco, Flower Mound y Southlake y mapa de Google seleccionable; enlaces `View on Map` en Locations superior; anclas por sede en footer; navegación «Find Us»; nuevo cierre fotográfico; hojas `assets/css/home-integration.css` y `assets/js/locations-map.js`; handler antiguo FormSubmit retirado de `assets/js/app.js`.
- **Google Maps sin clave:** el iframe muestra la **sede seleccionada**, no tres pines a la vez; las tres sedes y sus enlaces individuales permanecen visibles. Google Maps Embed API oficial requiere clave para marcadores/rutas personalizadas; no se inventó clave ni se prometió una vista multipin no configurada.
- **Fotografía:** para no ampliar un archivo retrato de 840 px a 1440 px, el cierre utiliza una fotografía panorámica WebP existente del Hero como «bookend» visual, y la versión de móvil específicamente recortada. Se generó además una propuesta fotográfica original que no ha sido enviada a GitHub en esta intervención; no afirmar subida de ese recurso.
- **Verificación estática:** HTML sin formulario, un iframe de mapa, 3 selectores accesibles, 3 enlaces a mapas, destinos en footer, IDs/anclas sin duplicados ni referencias rotas, JavaScript sintácticamente válido, CSS balanceado y versión noindex conservada. Foto existente y dimensiones verificadas en repositorio.
- **Informe:** [docs/QA-MAPA-Y-CIERRE-HOME-2026-10-29.md](docs/QA-MAPA-Y-CIERRE-HOME-2026-10-29.md).
- **No se modificó:** Hero, Treatment Journey desktop/móvil, Our Approach, Signature, Gift ni sus datos comerciales; la nueva dirección para estas tres últimas secciones es un trabajo distinto aún pendiente según auditoría previa.
- **NO VALIDADO:** despliegue en navegador, visual/scroll a 375/768/1024/1440, Google iframe, reserva externa, recortes fotográficos en dispositivos y contraste real. Usuario realizará validación tras estas implementaciones; no declarar cierre hasta evidencia.
- **ESTADO:** Map + Closing **IMPLEMENTADO / EN VALIDACIÓN**. Producción no autorizada.
- **SIGUIENTE ACCIÓN ÚNICA:** comprobar carga del mapa y navegación por sedes y revisar cierre fotográfico a 375, 768, 1024 y 1440 px; corregir defectos evidenciados.

## Integración editorial HOME v2 — cambios solicitados tras auditoría móvil (29/10/2026)
- **Mandato:** elevar Locations, Our Approach, Signature, corregir el mapa invisible debajo de las sedes en móvil y eliminar la separación visual entre «Make Room for Yourself» y el footer. Mantener intactos Hero y Treatment Journey y dejar las pruebas visuales globales para después.
- **IMPLEMENTADO `main`:** (1) Locations transformada en filas editoriales con reservas/mapas individuales; (2) Our Approach recompuesta con materialidad/florales e intervención tipográfica; (3) Signature con Chiang Mai como pieza principal y Bangkok/Phuket laterales y mobile adaptado; (4) mapa móvil **reubicado físicamente** bajo la sede abierta, con estado expandido y navegación por hash desde Locations y footer; (5) CTA final + footer agrupados bajo `site-outro` con **una sola fotografía** compartida y capa de color uniforme, sin degradado de transición.
- **Archivos de código:** `index.html`, `assets/js/locations-map.js`, `assets/css/home-editorial-v2.css` (nuevo). No cambios en hero, tratamientos ni contenido comercial.
- **Fotografía:** imagen panorámica WebP existente `thaissage-thai-massage-ritual-wide.webp` y versión móvil específica; aparece también en Heritage. Se preparó fotografía original nueva localmente, pero no se integró en el repositorio mediante estas herramientas. No afirmar exclusividad fotográfica ni foto real de instalaciones.
- **Datos:** tres sedes, direcciones y enlaces Fresha existentes conservados; no se inventaron números de suite, tarifas ni claims.
- **QA estático:** sintaxis JS válida, 1 `main`, 1 `footer`, IDs únicos y todas las anclas internas válidas, 1 iframe Google, 3 botones sede, 6 tratamientos, 3 paquetes, `noindex` conservado, y @media/reduced-motion presente.
- **Informe:** [docs/QA-HOME-EDITORIAL-INTEGRATION-2026-10-29.md](docs/QA-HOME-EDITORIAL-INTEGRATION-2026-10-29.md).
- **NO REALIZADO:** pruebas visuales reales a 375, 768, 1024 y 1440px, carga real del mapa/foto en GitHub Pages, interacciones Safari/Chrome, evaluación de contraste, Lighthouse ni comprobación de reservas. Sitio todavía no autorizado para producción.
- **ESTADO:** Home editorial v2 **IMPLEMENTADO EN GITHUB / EN VALIDACIÓN VISUAL**. Esta entrada sustituye prioridades antiguas que decían que Locations/Approach/Signature no estaban desarrolladas.
- **SIGUIENTE ACCIÓN ÚNICA:** revisar la demo completa con el usuario en desktop y móvil, y corregir únicamente defectos visuales/funcionales comprobados.

## Ajuste visual puntual: fondo botánico del cierre + footer — 29/10/2026
- **Solicitud:** sustituir fotografía de masaje del cierre por el fondo elegante de luz y **sombras suaves de hojas/plantas**, manteniendo continuidad desde «Make Room for Yourself» hasta el footer.
- **Acceso GitHub:** autenticado, lectura y escritura en `atrezzostudiosv-spec/thaissage-center` confirmadas en la intervención.
- **IMPLEMENTADO EN `main`:** creado `assets/images/thaissage-outro-botanical-shadows.svg` (SVG original ~5 KB con pared cálida, luz y sombras vegetales difusas, sin representación ficticia de instalaciones). `assets/css/home-editorial-v2.css` usa esta única imagen de fondo compartida en desktop y móvil, con focal móvil independiente, sin imagen de masaje repetida, sin gradiente de unión y con capa oscura de color uniforme para la lectura. En `index.html`, versión CSS actualizada a `20261029-botanical-outro-2` para invalidar caché.
- **Cambios acotados:** ningún texto, CTA, enlace Fresha, menú, Treatments ni otras secciones modificadas.
- **VERIFICACIÓN ESTÁTICA:** archivo SVG disponible en GitHub, CSS vinculado a dicho archivo en desktop/móvil, referencia versionada desde el Home, estructura CTA+footer en un solo `site-outro`, sin gradiente en el cierre, `noindex` mantenido, seis tratamientos y tres sedes conservados.
- **POR VALIDAR:** el SVG es una composición gráfica y no fotografía. Contraste, apariencia de las sombras, nitidez, recortes de escritorio/móvil, despliegue real y scroll no han sido inspeccionados en navegador interactivo; no declarar cierre visual sin evidencia.
- **ESTADO:** cambio puntual implementado, **EN VALIDACIÓN VISUAL**. Siguiente acción: evaluar visualmente el enlace de la demo a 375 y 1440 px, junto con la integración del Home.

## Reversión solicitada del fondo botánico — 29/10/2026
- **Solicitud:** volver exactamente al cierre visual anterior al último cambio de sombras de plantas.
- **Restaurado:** `assets/css/home-editorial-v2.css` al contenido y SHA original `bcb703ebd015a6d242961a3f9009a675d9a8dca7` (foto panorámica `thaissage-thai-massage-ritual-wide.webp`, foto móvil `thaissage-thai-massage-ritual-mobile.webp` y capa uniforme previa). El CTA y footer siguen compartiendo una única fotografía.
- **Caché:** `index.html` usa `20261029-restored-photo-3` para servir CSS restaurado.
- **Limpieza:** eliminado el SVG botánico generado en la intervención revertida porque ya no se utiliza.
- **SIN CAMBIOS:** Locations, mapa móvil, Our Approach, Signature, Treatments, Hero, CTA, footer, información comercial ni flujos Fresha.
- **VERIFICADO EN CÓDIGO:** CSS restaurado y referencias originales; el despliegue visual en GitHub Pages sigue pendiente de validación en navegador.
- **ESTADO:** reversión de último cambio completada en GitHub; vuelve a estar activa la fotografía anterior a las sombras botánicas.

## Nueva decisión aprobada: cierre contenido + footer verde sólido — 29/10/2026
- **Contexto:** tras explorar la foto integrada hasta el footer y revertir las sombras botánicas, el usuario decidió evitar una escena final demasiado larga o confusa. Quiere una separación limpia entre fotografía y footer con coherencia cromática, sin degradado evidente.
- **Implementación realizada en `main`:** capas `.site-outro-photo` y `.site-outro-tonal` reubicadas **dentro** de la sección `.cinematic-ending` en `index.html`; footer separado con fondo sólido **`#344A40`**. `assets/css/home-editorial-v2.css` limita el cierre a aproximadamente **70svh** en desktop, con altura responsive mínima para contenido y CTA, y 72svh móvil con mínimo 580 px. Footer con tipografía clara, divisores interiores suaves y separación visual intencional, sin foto por detrás ni degradado de unión.
- **Fotografía conservada:** `thaissage-thai-massage-ritual-wide.webp` y `thaissage-thai-massage-ritual-mobile.webp`; no se añadió otra imagen ni se restauró el SVG botánico revertido.
- **Caché:** nueva referencia de estilo `home-editorial-v2.css?v=20261029-green-footer-4`.
- **QA estático:** capas dentro de CTA; CSS balanceado; mapa, tres ubicaciones, seis tratamientos, reservas y `noindex` conservados. [Informe](docs/QA-OUTRO-FOOTER-SEPARACION-2026-10-29.md).
- **No modificado:** Hero, Treatments, Locations, mapa, Our Approach, Signature, Gift, precios ni horarios. **Sin prueba visual de navegador** ni confirmación de despliegue Pages, a realizar con el usuario.
- **ESTADO:** ajuste puntual **IMPLEMENTADO EN REPOSITORIO / EN VALIDACIÓN VISUAL**. Próxima acción: evaluar fotografía→footer a 375/768/1024/1440 px y corregir solo defectos comprobados.

## Nuevo rediseño editorial de Locations + Signature Experiences — 29/10/2026
- **Solicitud confirmada:** el usuario rechazó el aspecto administrativo de `CHOOSE YOUR CENTER / Your Moment, Closer to Home.` y la composición mal equilibrada de `TAKE A LITTLE LONGER / Three Signature Experiences.`, y autorizó aplicar el rediseño recomendado tras revisar grabación del Home.
- **IMPLEMENTADO en `main` — Locations:** `index.html` reemplaza tres filas tipográficas por una escena editorial de dos planos en desktop: imagen ilustrativa de masaje (asset WebP existente, no atribuida a ninguna sede) y selector nativo de tres ciudades `<details name="thaissage-centers">`. El contenido de la sede se abre inmediatamente debajo de su nombre, con dirección, teléfono, acceso a Fresha y enlace al mapa inferior. Frisco abierto inicialmente. En móvil el selector aparece antes que la imagen, para priorizar su utilidad. Solo un desplegable abierto mediante native details y fallback `assets/js/center-selector.js`.
- **IMPLEMENTADO en `main` — Signature:** `index.html` sustituye las tres tarjetas asimétricas anteriores por tres **capítulos alternados de fotografía+texto**; Chiang Mai imagen izquierda, Bangkok imagen derecha, Phuket imagen izquierda. Sin sticky, autoplay ni secuestro del scroll. CTA `Check Availability` conserva el `data-book-dialog` original. Los textos, tres duraciones, tres precios históricos y nota de verificación en Fresha se mantienen.
- **Fotografías:** se reutilizan WebP del repositorio con atributos alt que identifican fotografía ilustrativa; no se crearon fotos falsas de sedes. La imagen floral de Phuket sigue apareciendo en Our Approach: posible mejora editorial posterior, NO resuelta mediante generación nueva.
- **Archivos:** `index.html`, nueva hoja `assets/css/home-cinematic-sections-v3.css` (cargada al final), nuevo JS `assets/js/center-selector.js` (defer). Se añadió `data-reveal` a imagen/panel de Locations para una entrada discreta bajo el sistema existente.
- **QA estático:** tres sedes y tres reservas Fresha individuales, tres enlaces al mapa y tres CTA de Signature mediante el dialog original; sin IDs duplicados ni anclas rotas, etiquetas principales balanceadas, CSS con llaves equilibradas, JS sintácticamente válido, 6 tratamientos/Google Maps/cierre footer conservados y noindex intacto.
- **Informe:** [docs/QA-HOME-LOCATIONS-SIGNATURE-CINEMATIC-V3-2026-10-29.md](docs/QA-HOME-LOCATIONS-SIGNATURE-CINEMATIC-V3-2026-10-29.md).
- **ESTADO:** dos secciones **IMPLEMENTADAS EN GITHUB / EN VALIDACIÓN VISUAL**. No se ha efectuado una prueba real de navegador a 375/768/1024/1440, ni se declara Home terminado.
- **SIGUIENTE ACCIÓN ÚNICA:** revisar visualmente estas dos secciones con el usuario en desktop y móvil, probar apertura de Frisco/Flower Mound/Southlake y los tres CTA, y corregir defectos comprobados antes de cierre de fase.

## Home Scroll Ritual v4: Locations + intro Treatments + Treatments móvil + Signature desktop/móvil — 29/10/2026
- **Instrucción aprobada por el usuario:** aplicar fondo a toda la sección «CHOOSE YOUR CENTER» desktop conservando la foto lateral y contenido; iniciar los tres acordeones cerrados en móvil; recuperar el texto de presentación de masajes como transición cromática entre secciones y corregir hueco vertical; hacer los seis tratamientos en móvil de pantalla completa, zoom durante el scroll y siguientes capítulos entrando suavemente desde la **derecha**; transformar Signature en tres escenas full-screen con zoom scroll, y en móvil siguiente escena entrando **desde abajo**. Mantener intactos datos y enlaces; validar el resultado después de la ejecución.
- **IMPLEMENTADO:** `index.html` mueve la cabecera existente de Treatments a `.treatments-intro-bridge` anterior a `#treatments` — una sola ID, mismo texto y CTA, sin crear un segundo encabezado. No se altera el script desktop Ranchman existente. `assets/css/home-scroll-ritual-v4.css` añade fondo ambiental suave a Locations, puente verde y los diseños cinematográficos. `assets/js/center-selector.js` hace que mobile <=720 tenga todos los acordeones cerrados; desktop abre Frisco. `assets/js/home-scroll-ritual-v4.js` genera seis paneles móviles de Treatments y tres paneles Signature desktop/móvil a partir de los datos originales del DOM. Scroll 100 % nativo, marco sticky por escena, zoom fotográfico progresivo y transiciones direccionales diferenciadas. CTA delegado al selector existente para reservas Fresha.
- **Fallback de seguridad y accesibilidad:** sin JavaScript o con `prefers-reduced-motion` hay contenido estático original; bajo 560 px de altura no se activa la escena sticky, evitando trampas en pantallas de poca altura. No captura rueda táctil ni ejecuta scroll imperativo.
- **QA estático realizado:** HTML tiene un solo H2 de tratamientos, tres `details` sin `open` inicial, seis fuentes de tratamientos y tres experiencias, JS válido, CSS equilibrado, anclas/ID válidas, Google Maps/footer/hero conservados, versión `noindex` intacta. Informe [docs/QA-HOME-SCROLL-RITUAL-V4-2026-10-29.md](docs/QA-HOME-SCROLL-RITUAL-V4-2026-10-29.md).
- **Riesgo fotográfico identificado:** imágenes Signature de 840×1050 fuente ampliadas a panorámica full-screen; nitidez/recorte a 1440 y en pantallas retina aún requieren inspección y posible adaptación de assets.
- **NO COMPROBADO:** deploy real de GitHub Pages, scroll/touch en Safari/Chrome, rendimiento, posición de CTA y contraste real a 375/768/1024/1440; la URL no fue accesible por el lector web. No afirmar Home finalizado.
- **ESTADO:** v4 **IMPLEMENTADA EN REPOSITORIO / EN VALIDACIÓN VISUAL**. Fases documentales previas se mantienen cerradas. La siguiente tarea es obtener feedback del usuario sobre scroll de Treatments y Signature a 375/1440 y corregir solo defectos comprobados.
