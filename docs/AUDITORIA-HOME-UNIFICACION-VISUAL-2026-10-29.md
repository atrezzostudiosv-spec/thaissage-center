# ATREZZO · THAISSAGE CENTER
## Auditoría de integración del Home con lenguaje editorial cinematográfico
**Fecha:** 29 de octubre de 2026
**Fase activa:** validación y unificación del Home ya desarrollado
**Criterio rector:** integrar la elegancia visual aprendida de Ranchman **sin copiar su identidad ni repetir el efecto sticky**.
**Fuentes:** lectura de `index.html`, cuatro CSS y dos JS de `main`, dirección artística Fase 04, registro maestro, captura de la sección Treatments que compartió el usuario (29/10), y referencias oficiales Thaissage/Fresha. No se realizó exploración gráfica integral ni QA interactivo de la demo en navegadores.

## Diagnóstico ejecutivo
El Home **ya tiene una arquitectura sensata de nueve secciones** y una firma visual nueva especialmente potente en Treatments. Su reto es la **coherencia de ritmo, fotografía, jerarquía y conversión** entre secciones, no la falta de efectos. La secuencia actual alterna correctamente escenas fotográficas oscuras y bloques editoriales claros, pero Locations, Signature y algunos cierres no alcanzan todavía la singularidad compositiva de Treatments.

**Decisión:** conservar Hero y el Treatment Journey aprobados. No hacer que Locations, Our Approach, Signature y Gift Cards repitan el mismo sticky de 730svh. Usar una sola secuencia larga M3 en Home, el resto M0–M2.

## Auditoría de las nueve secciones
| # | Sección | Situación comprobable | Decisión de integración |
|---|---|---|---|
| 01 | Hero | Foto de fondo full-bleed, H1, CTA a Book, Explore, promoción eGift y prueba social 4.8/5 de Frisco. Hero de altura amplia con overlay oscuro y header translúcido. | **CONSERVAR** composición y CTA. Validar saturación de elementos, lectura sobre fotografía y visibilidad móvil. La puntuación debe verificarse en su fuente exacta; no sustituirla por la calificación de otra plataforma. |
| 02 | Locations | Tres columnas tipográficas Frisco / Flower Mound / Southlake, direcciones, teléfono y enlace Fresha individual; sin fotografía por sede. | **AJUSTAR** a directorio editorial de destinos, tipografía generosa, selector activo y acceso diferencial a cada centro. Mantener bloque blanco para respirar después del hero. No usar fotos ilustrativas como si fueran de esas sedes. |
| 03 | Treatments | Escena full-viewport sticky en desktop, seis fotos, títulos, precios, CTA a selector y nombres inferiores clicables. Móvil: seis capítulos fotográficos apilados <=720px. | **CONSERVAR** como clímax visual M3 aprobado. Validar los clics, fundidos, recortes y scroll inverso. Mejorar suavidad del salto directo: en código actual `goTo()` usa `behavior:'instant'`, no desplazamiento suave. |
| 04 | Our Approach | Composición clara 2 columnas: imagen ilustrativa de manos/masaje y copy «Self Love Begins Here». | **PRESERVAR COMPOSICIÓN, CAMBIAR FUNCIÓN VISUAL** a pausa editorial auténtica (texturas, detalles tradicionales, ritual sin simular instalaciones). Evitar otra foto prácticamente igual que los seis tratamientos. Revelado breve M1. |
| 05 | Thailand to Texas / Heritage | Fotografía panorámica con overlay y zoom vinculado al scroll; texto y enlace de ubicación. | **CONSERVAR** como interludio de identidad, no como segundo sticky. Reducir su duración aparente frente al Treatment Journey; verificar que no duplica la promesa de Our Approach. |
| 06 | Signature Experiences | Tres paquetes reales: Chiang Mai, Bangkok y Phuket, fotografías, copy, duración/precio histórico y CTA. Disposición en tres columnas con escalonamiento vertical. | **AJUSTAR** ritmo editorial: una pieza dominante y dos acompañantes, alturas y entrada deliberadas; no un segundo grid de tarjetas. M1/M2, sin scroll fijado. Mantener todo el contenido comercial y notas de precio. |
| 07 | Gift Cards | Gran fotografía full-bleed y compra por Square. Hero también usa como miniatura `thaissage-gift-experience-cinematic.webp`. | **CONSERVAR** CTA panorámico y flujo Square; **EVITAR FOTO REPETIDA** cambiando la imagen de una de las apariciones o el tratamiento compositivo. No convertirlo en otro hero de duración larga. |
| 08 | Contact | Sección clara con datos de atención y formulario de prueba dirigido a Atrezzo por FormSubmit, con advertencia explícita. | **CONSERVAR** estilo utilitario M0. Es un formulario de prueba, no de contacto real con Thaissage; para entrega final necesita destinatario autorizado y validación real de recepción. |
| 09 | Final CTA + footer | Cierre claro «Make Room for Yourself», selector de sede y footer de cuatro columnas. Las tres sedes del footer enlazan al mismo `#locations`. | **REFINAR** como cierre tipográfico compacto, sin otro efecto inmersivo. Hacer destinos del footer específicos (anclas por sede o Fresha respectivo), previa QA. |

## Secuencia visual unificada
1. **IMPACTO / Hero:** full-bleed y propuesta de valor; reservar de inmediato.
2. **ORIENTACIÓN / Locations:** porcelana blanca, navegación por tres centros sin falsas fotos locales.
3. **INMERSIÓN / Treatments:** único episodio largo M3 del Home: seis capítulos de servicio.
4. **RESPIRO / Our Approach:** composición editorial tipográfica y un detalle auténtico ilustrativo, sin sticky.
5. **ORIGEN / Thailand to Texas:** interludio panorámico con zoom breve existente.
6. **ELECCIÓN / Signature:** capítulo editorial asimétrico para tres paquetes; no tarjetas repetidas ni segundo sticky.
7. **REGALO / Gift:** panorámica y CTA Square.
8. **CONFIANZA Y CONSULTA / Contact:** formularios e información funcional, sin animación invasiva.
9. **CIERRE / CTA + Footer:** resumen corto y reserva; no duplicar la coreografía de Treatments.

## Dirección fotográfica
- **Conservar** las fotos que ya funcionan en el Home, en especial el Treatment Journey mientras se verifica la imagen final por capítulo.
- **Auditar calidad real** de las seis fotografías de Treatments: HTML declara fuentes con 1100×760 como dimensiones; la escena desktop las amplía a todo el viewport. El tamaño visual real de los WebP y su nitidez a 1440 / pantallas retina no están medidos.
- **Crear versiones y encuadres específicos de móvil** si el recorte `object-fit:cover` sacrifica manos/rostros: seis escenas verticales de 82svh sin `srcset` actualmente. No basta centrar todas las fotos.
- **Evitar duplicación de familias visuales:** Treatments ya contiene varios close-ups de masaje, por lo que Our Approach debe aportar materialidad, oficio o historia.
- **El mismo recurso Gift se repite** en el thumbnail promocional del hero y en el capítulo Gift; decidir una versión distinta.
- **Ubicaciones reales:** fotografías de Fresha no se incorporarán sin licencia/permiso; no simular interior de Frisco, Flower Mound o Southlake.
- **SEO:** WebP descriptivos, `alt` pertinente, tamaños realistas, carga diferida y responsive individual, sin atribuir imágenes ilustrativas a empleados o instalaciones reales.

## Riesgos técnicos identificados en código
1. **Capas de CSS acumuladas:** `styles.css` (48.916 bytes), `home-light-ritual.css` (25.822), `treatments-chapters.css` (9.062), `treatments-mobile.css` (10.647). Aproximadamente **94,4 KB de CSS fuente y 230 declaraciones `!important`**. Esto aumenta riesgo de regresión; modularizar/depurar de forma focalizada **después** de aprobar integración, no rehacer diseño.
2. **Navegación inferior Treatments:** la captura del usuario muestra elegancia del episodio; la versión actual de CSS contiene fix de contornos morados. Pendiente validar versión servida por GitHub Pages y foco visible con teclado.
3. **Salto entre capítulos:** `goTo()` tiene `behavior:'instant'`. Reproducir prueba visual y revisar transición al pulsar un nombre distante.
4. **Móvil:** la misma fotografía apaisada se estira/recorta en capítulos verticales; hay barra fija de reserva adicional. Verificar superposición, texto y CTA a 375×667, 390×844 y 430×932.
5. **Performance:** falta medir LCP, CLS, peso real de fotografías y fluidez de scroll. El código incluye assets WebP y lazy loading, pero eso **no equivale** a métricas aprobadas.
6. **SEO técnico:** un H1, título, description, `og:title`, `noindex,nofollow,noarchive` correctos para demo. No se declara `og:image`; canonical no presente (sin fijar dominio final). Resolver en fase de publicación, sin indexar prototipo.
7. **Confianza/comercio:** el Home presenta una puntuación «4.8/5» de Google/Frisco sin verificación actual aquí, precios «From $80» y precios históricos de paquetes. Deben reconciliarse con el menú vigente antes de producción; no inferir que calificación Fresha y Google son equivalentes.
8. **Enlaces:** las tres sedes de footer apuntan a `#locations`, no directamente a cada sede. Los tres CTA Fresha de Locations sí son individuales; compras Square no probadas. Contact FormSubmit va a Atrezzo por diseño de prueba.
9. **Documentación**: hay contenido editorial de 18 rutas, pero el Home es el único desarrollado. Esta auditoría no reabre ni reconstruye las fases 01–03.

## Objetivo de integración y aceptación
- **Una sola firma cinematográfica larga:** Treatments; el resto de interludios no debe competir.
- **Fotografía con intención:** no repetir genéricos ni falsear sedes.
- **Conservar CTA comerciales en todo el recorrido**, visibles antes, durante y después de Treatments.
- **Ritmo de contraste:** Full-bleed / blanco editorial / full-bleed / blanco / panorámica breve / editorial / CTA panorámico / información / cierre.
- **Responsive:** 375, 768, 1024 y 1440 px, intermedios y baja altura; comprobar scroll hacia arriba, recarga en capítulo, saltos y menú.
- **Movimiento accesible:** reduced-motion y sin JavaScript muestran contenidos útiles; no bloquear wheel, foco ni salida.
- **No modificar secciones previamente aprobadas** sin defecto verificable o petición explícita.

## Resultado y siguiente acción
**REALIZADO:** auditoría documental de Home completo, con siete componentes visuales principales y riesgos técnicos localizados. No se modificó el HTML/CSS/JS en esta intervención.
**VERIFICADO:** estructura, fuentes, clases, enlaces declarados, CSS, comportamiento previsto por JS y captura de Treatments aportada por el usuario.
**NO VERIFICADO:** render final de todo el Home, pruebas de interacción/dispositivos, carga real, métricas Lighthouse, compras y correo.
**ESTADO:** INTEGRACIÓN GLOBAL DEL HOME · **EN VALIDACIÓN DE DIRECCIÓN ARTÍSTICA**.
**SIGUIENTE ACCIÓN ÚNICA:** preparar y ejecutar una intervención focalizada sobre **Locations, Our Approach y Signature Experiences**, conservando Hero/Treatments/Gift y el resto, seguida de revisión responsive y de scroll.
