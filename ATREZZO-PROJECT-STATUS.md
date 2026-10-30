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

## Ajustes solicitados de Home v5: Treatments blanco, Heritage full-screen, Signature→Gift y zoom — 29/10/2026
- **Decisión aprobada:** fondo blanco para intro «OUR TREATMENTS», fotografía Heritage a alto/ancho completo de pantalla, eliminar franja blanca entre última Signature (Phuket) y «A THOUGHTFUL GESTURE», y Gift Cards full-screen con pausa de zoom activada por scroll nativo.
- **Aplicado en main:** `index.html` conserva un único título de intro y mueve nota de precios Signature ANTES de las escenas; envuelve Gift en `.gift-scroll-journey`, carga CSS/JS nuevos. `assets/js/home-scroll-ritual-v4.js` inserta ahora la escena Signature tras esa nota, evitando franja después de Phuket. `assets/css/home-finale-polish-v5.css` ajusta intro #FFFFFF, Heritage >=100svh cover y Gift 100svh full-bleed. `assets/js/gift-scroll-zoom-v5.js` activa scroll track 205svh y sticky stage 100svh; amplía suavemente solo la foto hasta ~1.105 sin bloquear scroll; estado se destruye con reduced-motion o viewport bajo.
- **Datos / identidad:** sin modificaciones a los seis tratamientos, tres paquetes, CTA Square, Fresha, mapa, footer ni encabezados comerciales. WebP originales responsive conservados, no inventar fotos reales de sedes.
- **QA:** HTML 9 sections/1 footer, IDs únicos, anclas válidas; 1 disclaimer antes de Signature, JS sintácticamente válido, CSS equilibrado, noindex preservado. Informe: [QA Home v5](docs/QA-HOME-HERITAGE-GIFT-CONTINUITY-V5-2026-10-29.md).
- **Limitación real:** no se pudo acceder al deployment de GitHub Pages mediante lector web; falta validación real en navegador a 375/768/1024/1440, Safari/Chrome, encuadre, duración del zoom y continuidad visual de Phuket a Gift.
- **ESTADO:** v5 **IMPLEMENTADA EN GITHUB / EN VALIDACIÓN VISUAL**. NO afirmar Home terminado ni sitio listo para producción. Siguiente acción única: verificación visual del usuario de esas cuatro intervenciones y correcciones focalizadas.

## Fase Home v6 — Heritage scroll, horarios/teléfonos y página Bitcoin — 29/10/2026
- **Instrucciones aprobadas:** «THAILAND TO TEXAS / An invitation to slow down.» debe hacer una pausa de zoom como Gift; completar los horarios y teléfonos claramente en tres centros y sección del mapa; corregir **Southlake Suite 110**; crear la página faltante de Cryptocurrency según fuente oficial y enlazarla desde footer.
- **IMPLEMENTADO en main / Heritage:** `.heritage-scroll-journey` añadido en `index.html`; CSS `assets/css/home-heritage-locations-v6.css`; controlador `assets/js/heritage-scroll-zoom-v6.js` de scroll nativo con altura 195svh y zoom suave ~1.018–1.108, sin scroll hijacking; fallback 100svh estático para reduced motion/pantallas bajas/sin JS. Eliminado el controlador Heritage antiguo de `assets/js/app.js` para evitar competir por la fotografía.
- **IMPLEMENTADO / Centros:** la sección Choose Your Center conserva acordeón, foto, CTA Fresha y recibe teléfono y horarios compactos etiquetados. El directorio de Google Maps muestra también llamada directa y horarios. Southlake actualizado con Suite 110 tanto en HTML como en búsqueda dinámica `assets/js/locations-map.js`. Horario común publicado: **Monday–Saturday 10 AM–9 PM; Sunday 10 AM–8 PM**. Teléfonos: Southlake/Flower Mound (972) 800-1978; Frisco (469) 352-1970. No se afirma estado abierto ahora.
- **IMPLEMENTADO / Página:** `cryptocurrency/index.html` y `assets/css/cryptocurrency.css` diseñados desde cero como página independiente editorial premium, responsive, SEO singular con `noindex`. Contenido verificado con `https://thaissagecenter.com/cryptocurrency`: el negocio anuncia **Bitcoin**, con enlace informativo a **BitPay**. No se añade pasarela ni wallet falsa ni aceptación de monedas no anunciadas; se indica confirmar por teléfono el procedimiento. Teléfonos/horarios por sede y enlaces Fresha incluidos. Footer Home enlaza ahora internamente a `cryptocurrency/` («Bitcoin Payments»), no a la web original externa.
- **Archivos modificados:** `index.html`, `assets/js/app.js`, `assets/js/locations-map.js`, nuevo `assets/css/home-heritage-locations-v6.css`, nuevo `assets/js/heritage-scroll-zoom-v6.js`, nuevos `cryptocurrency/index.html` y `assets/css/cryptocurrency.css`.
- **Auditoría:** [QA v6](docs/QA-HOME-HERITAGE-LOCATIONS-CRYPTO-V6-2026-10-29.md). Sintaxis JS y balance CSS revisados; IDs/anclas válidos, Home seis tratamientos/tres Signature, mapa, Square Gift Cards y footer intactos. Ambas páginas mantienen `noindex,nofollow,noarchive`.
- **Pendiente:** prueba real en navegador 375/768/1024/1440, validación de tiempos/zoom de Heritage y recorte de imagen, dirección/mapa/hours click, comprobar GitHub Pages `/cryptocurrency/` desplegado y enlace de BitPay. Confirmación comercial de aceptación vigente de Bitcoin y pasos de pago antes de producción. **La herramienta web no pudo acceder a GitHub Pages para inspección visual.**
- **ESTADO:** Home v6 y página Bitcoin **IMPLEMENTADOS EN GITHUB / EN VALIDACIÓN VISUAL**. No marcar sitio listo para publicar.

## Desarrollo multipágina y corrección Cryptocurrency v7/v8 — 29/10/2026
- **Orden del usuario:** a partir de capturas de Cryptocurrency, corregir overlays verdes prohibidos (solo degradados negros), header mal integrado y CTA solapados. Construir todas las páginas pendientes con la experiencia editorial/cinematográfica de Home, conectar enlaces internos de todas las páginas e incluir en el header el enlace **CRYPTOCURRENCY** con ese texto.
- **ENTREGADO EN GITHUB:** arquitectura completa de **18/18 rutas**: Home conservado; 16 nuevas páginas `massage-services/`, cinco masajes individuales, `specialty-massages/`, `spa-treatments/`, `signature-packages/`, `our-story/`, `locations/`, tres sedes, `gift-cards/` y `contact/`; Cryptocurrency reconstruida desde la base de diseño compartida. Todas con HTML propio, texto de `docs/FASE-03-CONTENIDO-COMPLETO-18-PAGINAS.md`, título/description y Open Graph individuales, fotografía WebP, CTA y rutas de conversión.
- **Dirección visual:** nuevo `assets/css/interior-pages-v1.css` + `assets/js/interior-pages-v1.js`: header común con identidad Home, mobile nav, hero full screen, fotos cinematográficas ilustrativas, **gradientes fotográficos negros exclusivamente**, capas de contenido con contraste, capítulos alternados, breve pausa panorámica, FAQs en acordeón, bloque de reserva y footer forest verde sólido. `assets/css/cryptocurrency.css` anterior retirado, sin reglas verdes activas. Nueve héroes incorporan `picture` con WebP vertical real existente.
- **Navegación:** `index.html` ahora enlaza las secciones del catálogo con rutas internas de servicios, ubicaciones, historia, regalos y CRYPTOCURRENCY; footer aporta navegación a servicios adicionales, páginas de sede y contacto. Nuevo `assets/css/home-navigation-v8.css` adapta header a seis enlaces y Book Now sin compresión, con menú móvil bajo 1300 px. Páginas interiores enlazan a catálogo, ubicaciones, Gift Cards, Cryptocurrency y Home con paths relativos compatibles con GitHub Pages.
- **QA estático:** 18 HTML disponibles; 18 páginas **alcanzables desde Home** mediante vínculos internos; cero páginas huérfanas; cero enlaces de navegación internos inválidos. H1 único, etiquetas estructurales balanceadas, `noindex,nofollow,noarchive` en todas las 18. Se corrigieron vínculos de ancla `#office-syndrome/` y se añadieron IDs a subservicios de Specialty Massage. Sin datos de terapeutas o fotos reales falsamente identificados.
- **Control comercial:** Fresha por sede, Square y BitPay informativo; Cryptocurrency indica Bitcoin como moneda anunciada, sin inventar wallet ni checkout. Southlake Suite 110 y horarios acordados en este chat se conservan, aunque contraste con fuentes antes de producción sigue pendiente.
- **Informe:** [QA multipágina / 18 rutas](docs/QA-MULTIPAGINA-18-ROUTES-NAV-CRYPTO-2026-10-29.md).
- **LÍMITE HONESTO:** no se pudieron abrir renders de GitHub Pages en web durante esta intervención y no se ejecutó QA visual interactivo a 375/768/1024/1440 ni compras externas; la subida a GitHub no constituye validación visual/operativa ni publicación autorizada.
- **ESTADO ÚNICO ACTIVO:** FASE 4B DESARROLLO MULTIPÁGINA **IMPLEMENTADO EN MAIN / VALIDACIÓN VISUAL Y FUNCIONAL ABIERTA**. Las fases estratégicas previas permanecen cerradas para continuidad. Siguiente acción única: verificar Cryptocurrency desktop/móvil como referencia del sistema, después páginas interiores y regresión final Home; corregir defectos probados antes de aprobar.

## Favicon + Open Graph / Social Card 1200×630 — 29/10/2026
- **Pedido:** agregar favicon e imagen para previsualización al compartir enlaces en redes, respetando diseño aprobado y protocolo SEO adjunto.
- **IMPLEMENTADO EN `main`:** favicon `assets/icons/thaissage-favicon.svg` con símbolo floral de Thaissage, verde bosque sólido y marfil; tarjeta editorial `assets/images/thaissage-social-share-1200x630.png`, PNG 1200×630 de marca con título «THAISSAGE», «CENTER», lema «THAILAND TO TEXAS» y símbolo floral. Archivo fuente editable `assets/images/thaissage-social-share-artwork.svg` almacenado aparte.
- **18/18 PÁGINAS:** referencia `rel=icon` con rutas relativas correctas según niveles de carpeta; `og:image` absoluta con PNG común, `og:image:type`, tamaño 1200/630, alt, `og:site_name`, `og:locale`, `og:url` demo; tags Twitter Cards `summary_large_image`, title/description/imagen/alt. Cada página conserva title/description personalizados.
- **QA realizado:** los 18 HTML fueron releídos; 18/18 pasan las comprobaciones de favicon, OG, Twitter, dimensiones y `noindex`. Imagen binaria reobtenida desde GitHub: 1200×630, firma PNG, bloques y CRC validados; 0 errores de codificación.
- **Conservado:** diseño aprobado, navegación, formularios/CTA, reservas, tarifas, animaciones y `noindex,nofollow,noarchive`. Ninguna página se consideró publicada en producción.
- **Documento:** [QA favicon + social share](docs/QA-FAVICON-SOCIAL-OPEN-GRAPH-18-PAGINAS-2026-10-29.md).
- **Pendiente:** comprobar visualización y caché reales en WhatsApp/Facebook/LinkedIn/X y despliegue GitHub Pages; no afirmar test social externo completado. Siguiente prioridad: validación de link preview Home y al menos una interior en dispositivo real.

## Ajuste EXCLUSIVO móvil Home v9 — Hero + Locations, 30/10/2026
- **Instrucción aprobada:** en móvil eliminar visualmente el párrafo introductorio bajo «Thai Massage & Wellness, With Time for You.», bajar ligeramente el H1 y subir los CTA sin saturar el Hero; extender a Locations móvil el fondo fotográfico ambiental ya usado en desktop, manteniendo cada sede como acordeón blanco; al abrir una sede, replicar el orden del directorio del mapa inferior con dirección, llamada, separador y horas en dos columnas; convertir el gran CTA verde en «Book [City]» como enlace editorial subrayado con texto mayor. **No tocar desktop ni ninguna otra sección/página.**
- **IMPLEMENTADO:** nuevo `assets/css/home-mobile-art-direction-v9.css` con reglas limitadas a `max-width:720px` (y ajustes <=390px), cargado al final de `index.html` bajo `?v=20261030-mobile-hero-locations-v9-1`. No se modificó ningún otro HTML, JS, estilos desktop ni rutas interiores. El párrafo del Hero se conserva en DOM y desktop. Gift Card, reseñas, todos los horarios/teléfonos y enlaces Fresha/mapa se conservan.
- **Fondo editorial móvil:** `thaissage-hero-spa-interior-mobile.webp` de los assets originales, sobre fondo salvia suave y con baja opacidad; 3 bloques `details` con fondo blanco de alto contraste y orden compacto.
- **QA estático:** estilos v9 bien cargados, media queries exclusivas móvil, CSS equilibrado, Hero H1/CTAs/Review/Gift presentes, 3 acordeones cerrados por defecto, enlaces Fresha intactos, IDs y anclas correctos, `noindex` intacto. Informe: [QA mobile Hero/Locations v9](docs/QA-HOME-MOBILE-HERO-LOCATIONS-V9-2026-10-30.md).
- **PENDIENTE:** validar visualmente a 375/390 px, abrir y cerrar sedes en iOS/Android, revisar proporciones de foto, overflow de horarios y legibilidad; comprobar a 768/1024/1440 que no hay regresión desktop/tablet. No se ha probado GitHub Pages interactivo desde esta sesión.
- **ESTADO:** v9 **IMPLEMENTADO EN GITHUB / PENDIENTE VALIDACIÓN VISUAL DEL USUARIO**. No reabrir fases ni declarar listo para producción.

## Home móvil v10 — Hero/menú/Locations limpio, 30/10/2026
- **Petición validada por capturas:** al reducir el texto del Hero v9 todo quedó apretado: disminuir H1, añadir aire antes de los botones; quitar los dos aros blancos/púrpura del menú hamburguesa; sustituir el fondo verdoso y turbio de Choose Your Center por fondo blanco con fotografía clara similar a la referencia de piedras/flores; eliminar solo en móvil la foto editorial inferior con «Find your moment.» y los textos «A quieter moment is closer than you think. Appointments and availability are confirmed on Fresha.» y «Services and booking times may vary by location. Booking opens on Fresha.»
- **IMPLEMENTADO EN GITHUB (mobile only):** `assets/css/home-mobile-art-direction-v10.css` con media queries `max-width:720px` y `max-width:390px`, cargada al final de CSS mediante `index.html` (`?v=20261030-mobile-white-floral-v10-1`). H1 `clamp(37px,9.5vw,47px)`, mayor espacio entre título y CTA, respiración antes de Gift Cards/reseñas. Hamburguesa dos líneas blancas sin bordes ni fondo, con foco cuadrado accesible de teclado.
- **Fondo claro:** nuevo recurso WebP original `assets/images/thaissage-locations-white-marble-flowers-mobile.webp` (piedras, plumeria blanca/rosa y fondo mármol blanco con espacio negativo), generado para el sitio; NO se usó la captura con marca de agua. SHA GitHub confirmado igual al binario local. Locations móvil usa fondo blanco, WebP visible sin overlay verde y 3 acordeones blancos.
- **Visibilidad móvil:** ocultas `.locations-story-visual`, `.locations-story-footer`, `.locations-footnote` SOLO en <=720px; esas fotografías/textos permanecen en DOM para desktop, de modo que no se altera el diseño ya aprobado fuera de móvil.
- **QA estático:** enlace CSS posterior a v9, reglas confinadas a móvil y llaves correctas; 3 acordeones cerrados de inicio y 3 URLs Fresha preservadas; IDs/anclas válidos, imagen subida y comprobada, noindex intacto. [Informe v10](docs/QA-HOME-MOBILE-HERO-LOCATIONS-V10-2026-10-30.md).
- **PENDIENTE:** pruebas reales de navegador a 375/390/430 px y regresión 768/1024/1440, interacción del icono después de foco/clic, proporción de Hero y fotografía, que los CTA no se solapen. No afirmar verificación visual ni Home aprobado hasta revisión.
- **ESTADO:** v10 IMPLEMENTADO EN MAIN, FASE MÓVIL ABIERTA A VALIDACIÓN VISUAL. No tocar versiones desktop ni secciones terminadas sin motivo.

## Home móvil v11 — Aire del Hero y fotografía Locations continua, 30/10/2026
- **Aprobación del usuario:** ampliar visiblemente el espacio entre título del Hero y CTA hasta aproximarse a la zona roja de referencia; extender fotografía clara de fondo a toda la sección Locations al desplegar acordeones; aplicar velo/degradado exclusivamente blanco y muy suave sobre el área superior del texto. No tocar desktop ni otros bloques.
- **Escritura GitHub CONFIRMADA:** creado `assets/css/home-mobile-art-direction-v11.css` (commit `20eb04b`) y enlazado tras v10 en `index.html` (commit `15f3090`), con caché `20261030-mobile-spacing-bg-v11-1`.
- **Ejecución v11:** encabezado móvil conserva tamaño v10 pero obtiene margen inferior entre 88–132px según viewport; Locations emplea imagen original `thaissage-locations-white-marble-flowers-mobile.webp` con `background-size:cover` para cubrir altura variable abierta/cerrada, y encima un único degradado **blanco** superior de transparencia progresiva. Ningún degradado verde. Estilos confinados a <=720px.
- **QA estático:** archivos reconsultados tras commit, CSS balanceado, carga en orden v10→v11, referencias intactas, Home mantiene `noindex`, IDs únicos. No se han cambiado reservas, horarios, HTML de contenidos ni desktop.
- **ESTADO:** aplicado y verificado EN REPOSITORIO. Pendiente comprobar visualmente la demo real a 375/390px, abrir acordeones y revisar recorte de imagen y altura del Hero. No declarar producción ni aprobación visual sin prueba real.

## Home móvil v12 — Tratamientos en dos columnas, iconos SVG y Details — 30/10/2026
- **Aprobación del usuario:** rediseñar únicamente `OUR TREATMENTS` en teléfono siguiendo la captura de referencia: seis nombres en navegación 2 columnas, persistencia durante scroll y selección directa; reservar espacio entre título/descripción, datos, CTA y navegación; Book Now con acabado oscuro translúcido de borde claro; `+ Details` enlaza a la página individual; sustituir flechas tipo emoji por SVG (normalización móvil, sin cambios de layout desktop).
- **IMPLEMENTADO EN GITHUB:** `assets/js/home-scroll-ritual-v4.js` extendido solo para Treatments `config.detailsRoutes`, seis rutas verdaderas: thai-massage, thai-combination-massage, deep-tissue-massage, swedish-massage, couples-massage y specialty-massages. Selector de reserva Fresha original preservado. Menú 2×3 en orden editorial `0,1,3,2,4,5`, `aria-current`, indicador de progreso, teclado y saltos de capítulo únicamente por interacción. Scroll natural, zoom y entrada desde la derecha se conservan; mayor longitud de pista (`990svh`) para contar la historia sin apresuramiento.
- **NUEVO CSS:** `assets/css/home-treatments-mobile-v12.css`, exclusivo para <=720 px, min-height 660, con fallback original para altura inferior o movimiento reducido. Texto y CTA se posicionan encima de la navegación, CTA oscuro de borde marfil con icono SVG y `+ Details` editorial.
- **ICONOS:** nuevo `assets/js/home-mobile-icons-v12.js`: sustituye en dispositivos <=720 px spans decorativos con flechas Unicode `↗` por SVG, incluyendo el botón sobre fotografía de Signature y enlaces del Home; al salir a desktop restituye textos originales. No añade emoji.
- **Integración:** `index.html` actualiza caché `home-scroll-ritual-v4.js?v=20261030-treatments-mobile-v12-1` y carga CSS/normalizador SVG posterior. HTML de seis tarjetas, datos de servicios, enlaces Fresha, sección Locations, Hero, Gift, Footer y páginas internas no fueron modificados.
- **QA estático:** archivos releídos GitHub; Javascript válido, CSS balanceado, seis rutas `+ Details` comprobadas contra páginas existentes, 6 tarjetas fuente, scroll sin wheel/touch hijacking, desktop tratamientos con sistema `treatments-chapters.js` no tocado, `noindex` conservado. [QA mobile v12](docs/QA-HOME-MOBILE-TREATMENTS-V12-2026-10-30.md).
- **PENDIENTE:** comprobar en navegador real iPhone 375/390/430 alturas variables el no-solapamiento con barra Book Now, botones y nav; zoom y 6 transiciones, salto de capítulo y 6 `+ Details`; SVG sin emoji en Safari; reduced motion/VoiceOver; regresión 768/1024/1440. **No afirmar validación gráfica ni cierre final.**
- **ESTADO ÚNICO:** Home móvil tratamientos v12 IMPLEMENTADO / EN VALIDACIÓN VISUAL. Home móvil Hero/Locations v11 estaba aprobado y se conserva sin alteraciones. Mantener esta fase abierta hasta pruebas del usuario.

## Home móvil Treatments v13 — fotos específicas, texto arriba, scroll hint a la derecha — 30/10/2026
- **Instrucción del usuario:** según dos capturas con líneas verde/morada/roja, subir solo el bloque de título/descripción/duración/precio/+ Details hasta aproximadamente el 26 % del viewport; **no tocar la posición de Book Now**; eliminar la línea inferior de + Details; trasladar SCROLL TO EXPLORE a la derecha junto a la línea de progreso; escoger fotos distintas más legibles y adecuadas en móvil en lugar del recorte de seis imágenes desktop.
- **IMPLEMENTADO EN MAIN:** `assets/js/home-scroll-ritual-v4.js` separa `.scroll-ritual-information` de `.scroll-ritual-copy` en Treatments móvil; conserva el CTA y su bottom anterior; ambos elementos mantienen opacidad/entrada suave sincronizadas. `assets/css/home-treatments-mobile-v13.css` (móvil <=720px) posiciona la información a `26svh`, elimina el borde/subrayado de + Details, agrupa el indicador a la derecha y aplica sombreado fotográfico **negro** puntual para leer mejor.
- **Fotografía móvil:** seis fuentes WebP únicas verificadas en repositorio: Thai ritual vertical, Thai Combination con encuadre móvil específico desde fuente horizontal, Deep Tissue manos/masaje vertical, Swedish masaje suave vertical, Couples sala de tratamiento vertical (ilustrativa, no representa dos personas), Specialty ritual floral vertical. Desktop conserva exactamente sus fotos y controlador. No se han inventado fotografías de personal/centros reales. La fotografía específica de Couples y una nueva vertical Thai Combination quedan como oportunidades de dirección artística, no como completas por esta reasignación.
- **Caché/versiones:** `index.html` carga v13 tras v12 y `home-scroll-ritual-v4.js?v=20261030-treatments-mobile-v13-1`.
- **QA código:** JS sintaxis válida, CSS equilibrado, 6/6 WebP con firma válida y SHA, 6 fotografías distintas, seis + Details/selector Fresha preservados, sin wheel hijacking, `noindex` intacto. Ver [QA Treatments v13](docs/QA-HOME-MOBILE-TREATMENTS-V13-2026-10-30.md).
- **PENDIENTE REAL:** revisión visual Safari iPhone 375/390/430px con todos los textos y scroll; comprobar no solapamiento de CTA, nav y barra fija; confirmar el encuadre de cada imagen. Desktop 768/1024/1440 sin QA gráfico nuevo, aunque ningún controlador de desktop se modificó.
- **ESTADO:** V13 IMPLEMENTADO EN GITHUB / EN REVISIÓN VISUAL DEL USUARIO. Preservar aprobaciones v11 Hero/Locations y v12 navegación Treatments.


## Home mobile Treatments V14 — photographic completion (30 October 2026)

- **SCOPE:** exclusively six mobile portrait image sources and their alt text, no new design / CTA / desktop changes.
- **ASSETS:** six distinct 768×1024 optimized WebP portraits `thaissage-{traditional-thai,thai-combination,deep-tissue,swedish,couples,specialty}-mobile-exclusive.webp`.
- **IMPLEMENTATION:** `assets/js/home-scroll-ritual-v4.js` `mobileScenes` image map + `index.html` cache key. Six booking interactions, six Details routes, photo animations and mobile layout remain intact.
- **PROVENANCE:** illustrative creative works, not actual client photographs. Five portraits are derived from generated concept boards; they should be evaluated for source detail on physical mobile screens, especially at DPR 2x/3x, rather than labeled native high-resolution captures.
- **QA CODE:** six unique WebPs checked at 768×1024; website source now names each corresponding file. **VISUAL QA IN LIVE BROWSER:** not yet verified.
- **STATUS:** photo asset production and source integration completed, live photographic rendering still to inspect. Report: [docs/QA-HOME-MOBILE-TREATMENTS-IMAGES-V14-2026-10-30.md](docs/QA-HOME-MOBILE-TREATMENTS-IMAGES-V14-2026-10-30.md).


## Incidencia visual de fotografía Treatments móvil V14 — 30 octubre 2026

- **Feedback de usuario:** solo la fotografía n.º 1 (Traditional Thai) se ve correctamente. Las n.º 2 a 6 se ven excesivamente ampliadas/estiradas y sus encuadres fallan. La n.º 1 queda **PROTEGIDA, SIN MODIFICAR**.
- **Causa verificada en los archivos fuente V14:** las cinco problemáticas se elaboraron a partir de recortes fotográficos de mosaicos, algunos de aproximadamente 200–500 px de anchura y solo ~250–540 px de altura, que después se rellenaron a 768×1024 mediante `ImageOps.fit`. Ese proceso descarta aún más información lateral y puede ampliar el detalle a partir de pocos píxeles. El código de la etapa móvil usa `object-fit:cover` sobre una pantalla cuya relación ancho/alto es notablemente más estrecha, generando otro recorte; el zoom de JS ~1.015–1.081 agrava poco, pero no explica por sí solo el defecto.
- **Auditoría visual:** examinadas las seis imágenes originales y una simulación de recorte a 375×812. Reencuadres con bordes extendidos/desenfocados probados localmente y **DESCARTADOS** por calidad; no se añadieron a GitHub ni se modificaron CSS, JS, HTML, reservas, animaciones o fotografías desktop.
- **DECISIÓN:** V14 **REABIERTA exclusivamente en fotografías n.º 2–6**; ninguna otra fase se reabre. No declarar finalizadas las seis fotografías. Necesitamos cinco escenas de fotografía fuente independientes, nativas y con contexto amplio, compuestas para la relación real de teléfono (aprox. 9:19.5), no una extracción de tarjetas con texto ni ampliación artificial de un pequeño recorte. Diferenciar fielmente Thai Combination, Deep Tissue, Swedish, Couples y Specialty, con espacios de lectura sobre la imagen y sin afirmar que sean personal o centros reales.
- **ESTADO:** bloqueado el cierre de dirección fotográfica móvil hasta contar con cinco fuentes verdaderamente correctas y efectuar la prueba visual del encuadre en móvil. La primera fotografía permanece aprobada.


## Home Treatments móvil V15 — cinco fotografías aportadas por el usuario, 30 octubre 2026

- **SOLUCIÓN A INCIDENCIA V14:** recibidos originales de Thai Combination, Deep Tissue, Swedish, Couples y Specialty; cinco WebP individuales de 768×1664 (sin recortar caras ni estirar sujetos), conservando 01 Traditional Thai.
- **IMPLEMENTACIÓN:** únicamente referencias de cinco imágenes y alt, atributo de altura móvil por foto y versión de caché JS en Home. Sin cambios CSS, layout, CTA, textos, escritorio, ni otras páginas.
- **QA FUENTES:** cinco archivos WebP verificados en relación vertical de teléfono; simulación de recorte 375×812 al máximo zoom existente. **QA en navegador iPhone real pendiente de comprobar.**
- **ESTADO:** sustitución fotográfica realizada en repositorio, aprobación visual de usuario aún pendiente. Informe: [docs/QA-HOME-MOBILE-TREATMENTS-IMAGES-V15-2026-10-30.md](docs/QA-HOME-MOBILE-TREATMENTS-IMAGES-V15-2026-10-30.md).


## Home Philosophy mobile — background floral full-bleed (30 October 2026)

- **ORDER:** remove separate top image only on phone and replace with full-width / min-100svh photographic background behind the intact 'OUR PHILOSOPHY / Self Love Begins Here' content, with WHITE gradient.
- **IMPLEMENTED:** `assets/css/home-philosophy-mobile-v1.css` (rules restricted to <=720px) and `assets/images/thaissage-philosophy-white-floral-background-mobile.webp` (941×1672 optimized WebP). New CSS linked last in Home. Original photo block remains in DOM for approved desktop design, hidden exclusively in mobile; text and CTA unchanged.
- **STATUS:** implemented in repository / static validation; GitHub Pages deployment and responsive rendering require confirmation. No other sections reopened. QA: [docs/QA-HOME-PHILOSOPHY-MOBILE-BACKGROUND-2026-10-30.md](docs/QA-HOME-PHILOSOPHY-MOBILE-BACKGROUND-2026-10-30.md).


## Desktop Treatments + Details — 30 October 2026
- **Scope:** only desktop immersive OUR TREATMENTS, six chapters.
- **Implementation:** secondary `+ Details` beside `Book Now`, each linking to its matching internal service page (Thai, Combination, Deep Tissue, Swedish, Couples, Specialty). Existing booking click routing preserved.
- **Changes:** `assets/js/treatments-chapters.js`, `assets/css/treatments-chapters.css`, query-string cache busts in `index.html`. No edits to mobile, photography, pricing or scroll controls.
- **Status:** implemented in main with static code QA; desktop live-browser validation pending. [QA desktop Details](docs/QA-HOME-DESKTOP-TREATMENTS-DETAILS-2026-10-30.md).


## Home desktop Treatments — copy spacing refinement (30 October 2026)
- **Scope:** six desktop immersive chapters only; red screenshot requested a substantially wider gap between treatment information and Book Now / + Details.
- **Implementation:** `.cinema-meta` margin-bottom `clamp(70px,9svh,84px)` (~80px at 890px high); compact laptop <=720px `clamp(38px,6.8svh,48px)`. `.cinema-copy` anchor and CTA placement remain unchanged; text shifts upward.
- **Changes:** `assets/css/treatments-chapters.css` and its cache query in Home only. No JS, mobile, photos, routes or navigation changes.
- **Status:** code updated; desktop browser visual QA remains pending. Report: [docs/QA-HOME-DESKTOP-TREATMENTS-COPY-GAP-2026-10-30.md](docs/QA-HOME-DESKTOP-TREATMENTS-COPY-GAP-2026-10-30.md).


## Home Choose Your Center — desktop pale marble/floral backdrop (30 October 2026)
- **Direction:** match approved mobile's bright marble/plumeria photography; do not reuse its tiny 320×569 image on desktop.
- **Implemented:** new desktop 1672×941 WebP `assets/images/thaissage-locations-white-marble-flowers-desktop.webp` with 95deg ivory-white readability overlay; old green-tinted hero background removed for tablet/desktop only via `assets/css/home-locations-desktop-background-v1.css` loaded last in Home.
- **Protected:** mobile styling <=720px, Locations original editorial left photo, three center selectors / addresses / links, and all other Home sections unchanged.
- **QA:** repository source verified; live visual checks at 768/1024/1440px not yet independently executed. [QA Locations desktop background](docs/QA-HOME-LOCATIONS-DESKTOP-FLORALS-2026-10-30.md).


## Home Philosophy desktop — full-bleed background and nonblocking hover zoom (30 October 2026)
- **User-requested change:** photo left-column -> entire desktop section background; luminous white readability gradient; subtle zoom when cursor hovers, with native scroll uninterrupted.
- **Implementation:** existing `thaissage-signature-phuket-floral-ritual.webp` photograph reused; new `assets/css/home-philosophy-desktop-v1.css` loaded last; hide separate image only above 720px; desktop editorial two-column copy overlay (stack on tablets), min-height 100svh. Hover scale 1.012→1.07 in 2.8s, motion-reduced rule, no JS scrolling changes.
- **Protected:** mobile Philosophy previously approved (<=720px), all original copy/CTA, other Home sections, reservation controls and internal pages.
- **Known limitation:** desktop original photograph is only 840×1050; image sharpness at larger desktop monitors must be checked. Live responsive and hover visual QA not yet confirmed.
- **State:** source change implemented and registered; visual approval still in validation. [QA report](docs/QA-HOME-PHILOSOPHY-DESKTOP-FULLBLEED-2026-10-30.md).


## Philosophy desktop V2 — copy contrast (30 October 2026)
- **User screenshot:** right-column body small and washed out against bright full-bleed background.
- **Correction:** body text 16–18px at #202D27 with 500 weight and 1.76 line-height; secondary CTA increased to 13–15px with darker text/underline. All inside existing desktop-only CSS @media(min-width:721px).
- **Protected:** photo, white overlay, mouse zoom, entire left heading, tablet reading flow, mobile, other sections, content/links.
- **Validation:** source/CSS checks performed; live visual browser confirmation pending. [QA](docs/QA-HOME-PHILOSOPHY-DESKTOP-TEXT-V2-2026-10-30.md).


## Philosophy desktop V3 — Contact-line image and right-white gradient (30 October 2026)
- New landscape WebP 1672×941 `thaissage-philosophy-contact-line-desktop.webp`, replaces only desktop background of `#our-approach`.
- CSS gradient is white and runs from 18% opacity left to 94% right; matching Contact's bright botanical atmosphere. Hover zoom and native scroll remain; mobile <=720px and original content/CTAs protected.
- Source checks complete; live visual QA pending. [V3 QA](docs/QA-HOME-PHILOSOPHY-DESKTOP-PHOTO-V3-2026-10-30.md).
