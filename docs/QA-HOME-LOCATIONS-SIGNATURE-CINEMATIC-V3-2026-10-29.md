# Thaissage Center — QA / Locations + Signature Experiences, editorial v3

**Fecha:** 29 de octubre de 2026  
**Estado:** implementado en `main`; **pendiente de validación visual/interactiva en navegador**  
**Petición:** sustituir los dos diseños actuales por una composición fiel al lenguaje cinematográfico y editorial de Atrezzo, sin tocar Treatments ni inventar información.

## 1. Choose Your Center — nueva composición
- `index.html` incorpora `.locations-cinematic`: título y descripción original, una fotografía editorial lateral en desktop y un selector de **tres ciudades mediante `<details name="thaissage-centers">` nativos**. Se abre Frisco de inicio; al pulsar otra ciudad, dirección, teléfono, enlace Fresha y «View on Map» aparecen **inmediatamente debajo del nombre**, no en otra zona de la página.
- Fotografía: `thaissage-massage-hands-treatment-editorial.webp` ya existente, 1020×1275, ilustrativa con alt explícito. No se identifica como foto real de Frisco, Flower Mound o Southlake.
- Móvil: selector antes que la fotografía, para priorizar la acción, con imagen secundaria en bloque de altura contenida. Tablet: fotografía encima y selector abajo.
- Datos conservados de la web original en el proyecto:
  - Frisco: 9300 John Hickman Pkwy, Suite 605, Frisco TX 75035, (469) 352-1970
  - Flower Mound: 1021 Long Prairie Rd, Suite 404, Flower Mound TX 75022, (972) 800-1978
  - Southlake: 101 River Oaks Dr, Southlake TX, (972) 800-1978 (sin inventar suite/ZIP)
- Links Fresha individuales y anclas inferiores `#map-frisco`, `#map-flower-mound` y `#map-southlake` conservados. El mapa de Google de la zona inferior **no se modificó**.
- `assets/js/center-selector.js`: refuerzo progresivo para cerrar otros detalles al abrir uno; el contenido sigue siendo utilizable sin JS. No hay scroll hijack.

## 2. Three Signature Experiences — tres capítulos editoriales
- `index.html` incorpora `.signature-cinematic` con tres artículos de composición alterna: Chiang Mai (foto izquierda), Bangkok (foto derecha), Phuket (foto izquierda de menor altura), cada uno con foto, texto y CTA **en una columna propia** para evitar el recorte de textos de la versión anterior.
- Se mantienen íntegros los tres textos comerciales y los datos publicados históricos de paquete:
  - Chiang Mai: 120 min · $200*
  - Bangkok: 150 min · $230*
  - Phuket: 120 min · $200*
- CTA accesibles renombrados `Check Availability`, conservando `data-book-dialog` para usar el selector Fresha existente. Ninguna acción abre reservas inventadas.
- Fotografías existentes WebP: `thaissage-signature-chiang-mai-soft-linens.webp`, `thaissage-signature-bangkok-massage.webp`, `thaissage-signature-phuket-floral-ritual.webp`. Imágenes 840×1050, con `alt` que indica uso ilustrativo. **Phuket sigue compartiendo la misma imagen de base con Our Approach**; sustituirla requeriría crear y alojar otra fotografía aprobada, pendiente editorial, y no se afirma que se haya creado un recurso nuevo.
- Sin sticky, autoplay, scroll horizontal ni secciones que bloqueen avance; fotografía con zoom suave en hover y revelado progresivo `data-reveal` ya existente. `prefers-reduced-motion:reduce` desactiva movimiento.
- Responsive: fotografías horizontales en tablet, verticales en teléfono; texto siempre después de su fotografía en móvil.

## 3. Archivos tocados
- `index.html`: únicamente las dos secciones, referencia nueva a CSS y JS y revelado sutil.
- `assets/css/home-cinematic-sections-v3.css`: CSS nuevo, concentrado en dos secciones con variantes 1100/850/720/395px.
- `assets/js/center-selector.js`: gestión progresiva del acordeón; la presentación funciona sin JS.
- Se conservan las hojas anteriores que definen otras zonas del Home; la nueva hoja se carga al final sin reescribir estilos de Treatments, mapa, Hero, Our Approach, Gift ni footer.

## 4. QA estático realizado
- Un `main` y un `footer`; 9 secciones abiertas y cerradas; los `article`, `details`, `summary` y `a` balanceados.
- 3 sedes, 3 enlaces a Fresha, 3 enlaces al mapa; 3 experiencias y 3 CTA mediante `data-book-dialog`.
- Los 6 tratamientos del Home y el mapa inferior permanecen presentes.
- IDs sin duplicados; todas las anclas internas `href="#..."` tienen destino.
- Sintaxis JS válida; llaves CSS balanceadas; media queries 1100, 850, 720 y 395 px; reduced-motion.
- Demo sigue en `noindex,nofollow,noarchive`.

## 5. Riesgos y validación pendiente
- **No se pudo obtener una captura ni interactuar en GitHub Pages desde la sesión.** El QA es estático: no afirmar validación visual a 375, 768, 1024 o 1440 px.
- Verificar layout y tipografía a 375, 390, 768, 1024 y 1440 px, además de baja altura; probar desplegables con mouse/teclado/touch, cambio de sede y navegación a mapa.
- Verificar recortes de fotografía de las tres experiencias y claridad de texto y precio; verificar los tres CTA en el dialog Fresha.
- Valorar mejora fotográfica específica en una fase separada sin inventar sedes ni empleados; medidas de imagen actuales suficientes para la implementación, nitidez retina pendiente.
- No confundir prototipo con producción; revisar además precios/horarios y fuente vigente de cada paquete.

**SIGUIENTE ACCIÓN:** validación visual del usuario del Home, con foco en estas dos secciones, corrección solamente de defectos observados.
