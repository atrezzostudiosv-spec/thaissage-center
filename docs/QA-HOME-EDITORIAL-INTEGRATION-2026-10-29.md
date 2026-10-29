# THAISSAGE CENTER — QA E INTEGRACIÓN EDITORIAL DEL HOME
**Fecha:** 29 de octubre de 2026
**Estado:** INTERVENCIÓN IMPLEMENTADA EN `main` · VALIDACIÓN VISUAL AÚN ABIERTA
**Solicitud:** corregir mapa en móvil, elevar el diseño del directorio Locations, refinar Our Approach y Signature Experiences, y crear continuidad fotográfica real entre el CTA final y el footer, sin degradado de unión ni modificar Treatments.

## Decisiones aplicadas
### 1. Mapa — corrección funcional responsive
- Se mantiene **UN SOLO iframe de Google Maps**; no se inventa una vista multipin que requiera API key.
- Desktop (>720 px): el mapa permanece en su columna al lado del selector.
- Móvil (<=720 px): al seleccionar Frisco, Flower Mound o Southlake, el **mismo mapa se mueve bajo el artículo seleccionado**, y la página lleva ese artículo al viewport. Solo hay un mapa visible; pulsar la sede abierta la pliega.
- Los atributos `aria-expanded`, `aria-pressed`, `aria-controls` y los enlaces `#map-*` reflejan la navegación. Al volver a desktop el mapa retorna a la columna original.
- Los enlaces superiores «View on Map» y los del footer abren la sede correspondiente mediante hash; los tres CTA Fresha siguen intactos.

### 2. Locations
- La sección inicial pasa a un **índice editorial por filas horizontales** con gran tipografía, líneas delgadas y reservas individuales, en lugar de tres tarjetas visualmente equivalentes.
- Layout de 4 columnas en desktop y simplificación en tablet/móvil, sin eliminar dirección, teléfono, reserva ni link al mapa.

### 3. Our Approach
- Se conserva el texto original y la composición de pausa, pero la fotografía cambia de un close-up de masaje repetido a un recurso ilustrativo de **ritual floral y materialidad** ya presente en el repositorio.
- La disposición tipográfica tiene mayor jerarquía, cita editorial y espacio negativo. **Limitación:** es una fotografía compartida con la imagen del paquete Phuket; requerirá reemplazo específico si se detecta repetición visual en la validación de la demo.

### 4. Signature Experiences
- Los tres paquetes reales Chiang Mai, Bangkok y Phuket conservan 100% de los textos, duración y tarifas históricas originales.
- En desktop, Chiang Mai ocupa una pieza editorial principal y Bangkok / Phuket se presentan como dos capítulos laterales de menor altura. Tablet y móvil utilizan una composición vertical sin tarjetas repetitivas ni sticky.
- No se han cambiado los flujos Fresha ni afirmaciones de servicios.

### 5. CTA + Footer — continuidad fotográfica
- `index.html` integra el CTA final y el footer dentro del mismo contenedor `site-outro`; el `main` cierra antes de la sección de CTA y el footer mantiene su semántica de pie de página global.
- Una **única imagen fotográfica** `thaissage-thai-massage-ritual-wide.webp` alimenta ambas secciones, y en móvil `thaissage-thai-massage-ritual-mobile.webp`.
- No hay corte de imagen entre CTA y footer ni degradado de unión. Para contraste se emplean ajustes fotográficos uniformes y una capa de color **uniforme**, no un gradiente.
- Se conserva «YOUR TIME TO RESET / Make Room for Yourself.» y el selector de reserva.
- Nota de dirección artística: esta es una imagen panorámica ilustrativa que aparece también en el interludio Heritage, no una nueva sesión fotográfica de las instalaciones; habrá que comprobar en la revisión final si esa repetición resulta perceptible.

## Archivos intervenidos
- `index.html`: wrapper del CTA/footer, ajustes de metadatos de fotografía en Our Approach, `aria-expanded`, referencias versionadas a los dos nuevos assets.
- `assets/css/home-editorial-v2.css`: nuevo CSS limitado a Locations, Our Approach, Signature, mapa inline móvil y footer común.
- `assets/js/locations-map.js`: sustituido para reparentar el mismo iframe y actualizar estado y hash de la sede.
- **Sin cambios:** Home Hero, Treatment Journey desktop y móvil, siete bloques no implicados y contenido comercial de tratamientos/paquetes.

## Comprobaciones estáticas realizadas
- JS sintácticamente válido con `new Function`.
- Un `main` y un `footer` en HTML; identificadores `id` únicos.
- Cero anclas internas inexistentes.
- Seis tratamientos, tres mapas de sede (un único iframe), tres paquetes y nueve referencias Fresha conservados.
- CSS balanceado; `@media` a 1080/800/720 y reduced-motion.
- `noindex,nofollow,noarchive` preservado; el formulario de pruebas continúa eliminado.
- Comparación con base `d9862d0`: únicamente `index.html`, `assets/js/locations-map.js` y nuevo CSS editorial.

## Pendiente explícito
- Verificación visual interactiva y en dispositivos reales a **375, 768, 1024 y 1440 px**, además de orientación horizontal / pantallas cortas.
- Revisar mapa de tres sedes, scroll/retorno, apertura/cierre del acordeón, carga del iframe y navegación de ubicación desde la parte superior y desde el footer.
- Valorar encuadre del nuevo fondo a lo largo de CTA + footer, contraste real, duplicación de imágenes en Approach/Signature y Heritage/Outro y rendimiento WebP.
- Probar botones reales hacia Fresha (sin realizar reservas) y GitHub Pages desplegado; estos pasos NO están declarados como completados.
- Datos comerciales previamente identificados de Southlake, horarios, tarifas y claims siguen pendientes antes de producción.

**Siguiente acción única:** validación visual completa del Home en desktop, tablet y móvil, corrigiendo solamente defectos observados y respetando Hero/Treatments aprobados.
