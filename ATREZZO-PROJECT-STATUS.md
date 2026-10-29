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
