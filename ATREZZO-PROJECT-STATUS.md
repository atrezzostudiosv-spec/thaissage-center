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
| 4. Dirección artística / partitura visual | EN VALIDACIÓN | Propuesta integral de identidad, movimiento y 92 escenas en 18 rutas, con fuentes, fotografías requeridas y CTA. Archivo: `FASE-04-DIRECCION-ARTISTICA-Y-SCROLL-18-PAGINAS.md`. Partitura documentada; ya existe Home v1 de desarrollo. La aceptación visual sigue pendiente. |
| 4B. Desarrollo visual / prototipo | EN VALIDACIÓN | Home v1 implementado en `work/home-v1` con HTML/CSS/JS; controles y responsive comprobados localmente con fotografías de sustitución. Pendiente revisión visual con fotos remotas. |
| 5. Validación | EN PROCESO (solo Home) | QA de Home registrada en `docs/QA-HOME-V1.md`: 375/768/1024/1440 px, menú, selector, anclas, reduced motion. Auditoría visual y demás 17 páginas pendientes. |
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
- **El website aún NO está implementado; no hay hosting, demo ni validación en navegador.**
- **Repositorio y estructura: CERRADO (verificados 11 archivos en `main` y lectura de `README.md` en `work/home-v1`).**
- Siguiente fase: prototipo de Home en `work/home-v1`; diseño de Fase 04 sigue EN VALIDACIÓN hasta revisión renderizada.
- Nunca incorporar fuentes originales de terceros o fotografías de las instalaciones a este repositorio público sin derechos comprobados.

## Desarrollo Home v1 — 28 octubre 2026

- **REALIZADO:** código del Home en `web/index.html`, `web/assets/css/styles.css` y `web/assets/js/app.js`, en rama `work/home-v1`. 7 escenas editoriales principales con selector de las tres sedes y reserva externa.
- **VERIFICADO (local):** sin overflow a 375/768/1024/1440 px; menú responsive y selector con Escape; enlaces de ancla; reduced motion; visibilidad sin JS; presencia de noindex.
- **NO COMPROBADO:** encuadres de fotografías remotas reales, Lighthouse, lector de pantalla, flujo final de reservas/compras. Fotografías ilustrativas con fuentes registradas en `docs/IMAGE-SOURCES-HOME-V1.md`.
- **ESTADO:** Home implementado, **EN VALIDACIÓN VISUAL**. No publicado ni aprobado para producción. Restantes 17 páginas **pendientes**, sin omisión de la Fase 3.
- **SIGUIENTE PASO:** revisión visual del Home ya desarrollado y corrección limitada a defectos observados antes de comenzar las páginas internas.


## Actualización — autorización del cliente y formulario (2026-10-28)

- **AUTORIZADO:** libertad de dirección visual; imágenes ilustrativas cinematográficas generadas para Thaissage Center; enriquecer explicaciones sin inventar servicios o resultados; documentación comercial aportada validada por el cliente para avanzar.
- **IMPLEMENTADO en `work/home-v1`:** sección Contact editorial, navegación a Contact, formulario con validación HTML y envío AJAX de prueba a FormSubmit para `atrezzostudiosv@gmail.com`. El correo es de Atrezzo, **no de Thaissage Center**; hay aviso y consentimiento explícito. Enlaces originales Fresha de las tres sedes conservados.
- **VERIFICADO EN CÓDIGO:** presencia del formulario, endpoint definido, menús de Contact, enlaces Fresha originales y metadato noindex.
- **NO COMPROBADO:** recepción efectiva en el correo, activación de FormSubmit, recorrido de envío en servicio real, QA completo del nuevo bloque en los cuatro breakpoints y sustitución de las fotografías ilustrativas externas por nuevos assets propios.
- **ESTADO:** formulario implementado, EN VALIDACIÓN. Sitio de 18 páginas aún en desarrollo, no publicado.
- **Referencia:** `docs/DECISIONES-DE-CLIENTE-Y-FORMULARIOS.md`.


## Integración fotográfica propia — 28 octubre 2026

- **REALIZADO:** biblioteca de 11 archivos WebP generados/recompuestos de imágenes originales del proyecto, para 7 escenas y 4 variantes móviles.
- **IMPLEMENTADO:** todas las 14 referencias CSS a fotografías de Unsplash sustituidas por recursos locales; preload del hero por dispositivo; overlays, CTA, reservas y movimiento conservados.
- **PROCEDENCIA:** imágenes ilustrativas, no muestran sedes, trabajadores ni clientela reales de Thaissage Center.
- **ESTADO:** integración fotográfica desarrollada, **EN VALIDACIÓN VISUAL**; faltan pruebas renderizadas a 375/768/1024/1440 y rendimiento en red.


### QA puntual de imágenes — 28 octubre 2026
- **VERIFICADO LOCALMENTE EN CHROMIUM (fixture de fotografía):** 375, 768, 1024, 1440 px; 7/7 fondos resueltos como WebP; ausencia de overflow horizontal; hero observado a 375 y 1440 px.
- **VERIFICADO EN GITHUB:** 11 blobs WebP en commit `c9b24bd805167361004f80cb41db576e7b68bc57`, 11 nombres referenciados por CSS, 3 destinos Fresha, noindex.
- **PENDIENTE:** browser QA del Home final completo cargado sobre HTTP real y sin inyección de datos; FormSubmit y recepción; SEO final; otras 17 páginas.


## Refinamiento aprobado — Header y Hero (2026-10-28)

- **TRABAJO REALIZADO:** header flotante glassmorphism en cacao translúcido, hero fotográfico más cálido, CTA cápsula con flecha que se desplaza de izquierda a derecha en hover/focus/active, bloque de reseñas Frisco basado en valoración agregada 4.8/5, y pequeña llamada eGift Card a Square en el extremo inferior derecho.
- **CONSERVADO:** H1 y descripción originales, resto del Home, las 3 URL Fresha, consentimiento del formulario y `noindex`.
- **VERIFICADO EN CÓDIGO:** 17/17 controles estáticos sobre los ficheros de la rama `work/home-v1`.
- **NO COMPROBADO:** pruebas de interacción y layout renderizado de esta versión a 375/768/1024/1440 px. La valoración exacta de Google no se ha leído directamente; fuente agregadora documentada.
- **ESTADO:** implementación en revisión visual. Véase `docs/HOME-HEADER-HERO-REFINEMENT-2026-10-28.md`.


### Preview — refinamiento de Header y Hero publicado (2026-10-28)
- **VERIFICADO EN GITHUB:** preview en `https://atrezzostudiosv-spec.github.io/thaissage-center/`; Pages build y deploy **success** para commit `ce6e9b41ecc033cdca8b183c6efdd4cbee8ce654` (ejecución `40750701761`).
- **VERIFICADO EN SOURCE `main`:** `index.html` y `assets/css/styles.css` corresponden exactamente con los blobs de `work/home-v1` aprobados para vista previa.
- **PENDIENTE:** inspección visual/navegación manual del resultado nuevo a 375/768/1024/1440 px; valoración directa de Google y formulario de contacto real.
- **ESTADO:** preview desplegada correctamente, Home en validación visual.


## Ajuste aprobado de header, botones y eGift — 28 octubre 2026
- **REALIZADO:** menú translúcido integrado a todo el ancho superior con línea inferior fina (sin isla flotante); tipografías originales conservadas.
- **REALIZADO:** botones en cápsula con contorno fino, flecha simple y hover discreto; retirados el círculo y el desplazamiento interno de izquierda a derecha.
- **REALIZADO:** tarjeta de eGift con texto “Give the Gift of Relaxation”; en móvil entra justo después de los botones principales, en flujo normal y no pegada al final del hero. En desktop se adelanta dentro del hero.
- **CONSERVADO:** H1, párrafo, fotografías, resto de secciones, 3 enlaces Fresha, gift cards Square, reseñas Frisco y formulario de prueba.
- **VERIFICADO EN CÓDIGO:** 21/21 comprobaciones estáticas incluyendo anchors, elementos duplicados, flujos de navegación, media query, noindex, balance de CSS y prefers-reduced-motion.
- **PENDIENTE:** inspección visual real en navegador a 375/768/1024/1440 px, tap/hover y recepción del formulario. Fase Home sigue EN VALIDACIÓN.

### Publicación de preview — ajuste 2026-10-28
- **VERIFICADO:** sincronización de HTML, CSS y JS desde `work/home-v1/web` a la raíz de `main` (mismos SHA de blob).
- **VERIFICADO:** GitHub Pages build y deploy correctos en ejecución `40753024528` para commit `a5954d1e61576924a8b88a5c57f105af7b1acc72`.
- **PREVIEW:** https://atrezzostudiosv-spec.github.io/thaissage-center/
- **NO COMPROBADO:** navegación renderizada del ajuste a 375/768/1024/1440 y comportamiento real del formulario.


## Nueva sección Treatments cinematográfica — 28 octubre 2026
- **REALIZADO:** sustitución del antiguo listado vertical por carrusel horizontal a ancho completo con 6 tarjetas editoriales y las seis descripciones y servicios originales.
- **IMÁGENES:** 6 WebP de 1100×760 px (317.066 bytes en total), ilustrativos y basados en material gráfico generado para Atrezzo; se encuentran en `web/assets/images/`. No representan empleados, clientes ni sedes reales.
- **SCROLL:** el scroll vertical nativo desplaza horizontalmente las tarjetas a 981 px de ancho o más y altura mínima 660 px, sin interceptar rueda; en móvil/tablet se usa swipe nativo, y para movimiento reducido no se fija la sección.
- **ACCESIBILIDAD:** botones anterior/siguiente, avance por teclado, foco en enlace fuera de pantalla, reducción de movimiento. Todos los CTA mantienen selector Fresha original.
- **VERIFICADO:** 6 imágenes subidas, 6 tarjetas, JS válido sintácticamente, ids sin duplicados, enlaces internos existentes, 3 Fresha sin cambios, Square intacto, noindex y sin valores comerciales inventados.
- **PREVIEW:** código y recursos sincronizados en `main`, commit `6c6f2fa76ef32c0f0150ccafed0016a05b82e7d0`. GitHub Pages desplegado desde main.
- **PENDIENTE DE QA:** animación renderizada real en 375 / 768 / 1024 / 1440 px, contraste, scroll reverso, taps, foco y rendimiento del navegador; la fase Home sigue EN VALIDACIÓN.
- **DOCUMENTACIÓN:** `docs/HOME-TREATMENTS-SCROLL-CINEMATICO.md`. Restantes 17 páginas sin alterar.


### Verificación del despliegue — tratamientos
- Ejecución GitHub Pages `40772453399` para commit `6c6f2fa76ef32c0f0150ccafed0016a05b82e7d0`: jobs **build, deploy y report-build-status = success**.
- Se confirma despliegue técnico; **no** equivale a comprobación visual del scroll horizontal en navegadores reales.


## Treatments — Carrusel fotográfico central v2 (2026-10-28)
- **DESARROLLADO:** nueva composición con fondo fotográfico desenfocado, cards a sangre, tipografía editorial y gradiente; 6 tratamientos y fotografías WebP originales conservados; card central ampliada y laterales visibles.
- **ELIMINADO:** comportamiento sticky y mapeo del scroll vertical a desplazamiento horizontal. Ahora carousel deslizante nativo (swipe/flechas/puntos/teclado), scroll normal de la página.
- **VERIFICADO EN SOURCE:** 20/20 checks estáticos incl. JS compilable, servicios/URLs Fresha y Square, cero precios ficticios, noindex y media query reduced-motion.
- **PENDIENTE:** QA visual en navegador a 375/768/1024/1440, foco y swipe reales; Chromium del entorno bloqueó acceso público.
- **ALCANCE:** solo sección Treatments, sin cambios a Home aprobado fuera de esta sección.

### Publicación Treatments Slider v2 — 2026-10-28
- **PUBLICADO EN PREVIEW:** GitHub Pages desde `main`, commit `0ae81abf3b8661365ff5ca5a7e54d4fcc91d0e37`.
- **CONFIRMADO POR GITHUB:** build, report-build-status y deploy = success, ejecución `40783643105`.
- **ESTADO DE VALIDACIÓN:** comprobaciones estructurales 20/20 superadas; permanece pendiente QA visual real de la versión desplegada y pruebas con gesto táctil.
- **NO PUBLICADO COMO PRODUCCIÓN:** demo sigue protegida por `noindex`.
