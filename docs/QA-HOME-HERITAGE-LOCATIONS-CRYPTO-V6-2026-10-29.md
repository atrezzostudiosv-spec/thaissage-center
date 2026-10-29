# Thaissage Center — QA v6 / Heritage, sedes y Bitcoin Payments

**Fecha:** 29 octubre 2026
**Repositorios:** `atrezzostudiosv-spec/thaissage-center`, rama main
**Estado:** implementado en GitHub, sin cierre de validación gráfica ni autorización de producción.

## Fuente del negocio
- Página oficial de pagos: https://thaissagecenter.com/cryptocurrency — anuncia **Bitcoin** como forma adicional de pago, y contiene un enlace público a https://www.bitpay.com/.
- Website oficial general: https://thaissagecenter.com/ — anuncia los tres centros, teléfonos y horario regular lunes-sábado 10:00 a.m.–9:00 p.m.; domingo 10:00 a.m.–8:00 p.m.
- Datos explícitos del usuario: **Southlake Suite 110**, 101 River Oaks Drive; **Flower Mound Suite 404**, 1021 Long Prairie Road; **Frisco Suite 605**, 9300 John Hickman Pkwy. Sin horarios excepcionales por festivos, ni estado “Open now” inferido.
- El sitio original no publica un endpoint propio de cobro en Bitcoin ni instrucciones confirmadas de operación. **NO** se añade checkout, wallet, código QR, moneda alternativa ni garantía de transacción. Se pide confirmar instrucciones por teléfono con su sede.

## Cambios implementados

### 1. THAILAND TO TEXAS / Heritage
- `index.html` encierra la sección Heritage sin modificar titular ni CTA en `.heritage-scroll-journey`.
- Nueva hoja `assets/css/home-heritage-locations-v6.css` permite `height:195svh` del recorrido; escena sticky `100svh` en medios compatibles; imagen full-bleed con zoom progresivo cercano a **1.018 → 1.108**.
- Nuevo controlador `assets/js/heritage-scroll-zoom-v6.js`; scroll nativo, sin wheel interception ni `scrollTo`, fallback de escena completa en reduced-motion, sin JavaScript o en ventanas de menos de 640px de alto.
- Se retiró del `assets/js/app.js` el controlador Heritage antiguo para que no haya dobles escuchas del mismo efecto.
- En móviles se usa `thaissage-thai-massage-ritual-mobile.webp`, ya existente.

### 2. Ubicaciones y horarios
- En el selector superior se conservan las tres sedes originales y botones Fresha, ahora con presentación diferenciada para **CALL TO SCHEDULE**, teléfono clicable, **OPENING HOURS**, lunes a sábado y domingo.
- En el bloque inferior Google Maps se repiten horarios y teléfonos en cada centro con etiquetas discretas; no se agregaron tarjetas decorativas innecesarias.
- Southlake: 101 River Oaks Drive, **Suite 110**, Southlake TX; número (972) 800-1978.
- Flower Mound: 1021 Long Prairie Road, Suite 404, Flower Mound TX; número (972) 800-1978.
- Frisco: 9300 John Hickman Pkwy, Suite 605, Frisco TX 75035; número (469) 352-1970.
- Todos los centros: **Monday–Saturday 10:00 AM–9:00 PM; Sunday 10:00 AM–8:00 PM**.
- `assets/js/locations-map.js` actualiza la búsqueda Google Maps de Southlake con Suite 110.
- No usar “Open now”, “Open today” o una hora de cierre dinámica sin un dato fiable de ubicación y tiempo.

### 3. Página Cryptocurrency
- Se crea **`cryptocurrency/index.html`**, accesible desde `cryptocurrency/` en GitHub Pages, y CSS individual `assets/css/cryptocurrency.css`.
- Diseño editorial propio con fotografía existente de Thaissage, hero, contexto de aceptación de Bitcoin, instrucciones prudentes para confirmar proceso, información sobre BitPay, y directorio completo de tres sedes con teléfono, horario y enlace Fresha.
- Título SEO, descripción, Open Graph e idioma propio; `noindex,nofollow,noarchive` hasta autorización.
- El enlace del footer Home antes apuntaba a la web externa de Thaissage; ahora abre la **página interna** `cryptocurrency/` con el texto “Bitcoin Payments”.
- La página de Bitcoin enlaza de vuelta al Home mediante enlaces relativos `../index.html#...`.
- No se presenta BitPay como un enlace directo para realizar el pago a Thaissage: solo como recurso informativo.

## QA de repositorio realizado
- Archivos HTML, CSS y JS v6 presentes y enlazados con versión de caché.
- Todas las anclas internas Home y Cryptocurrency existen, IDs únicos en ambos.
- 3 horarios en selector Home, 3 en Google Maps, 3 en página Cryptocurrency; 3 números de llamada por contexto.
- Southlake Suite 110 también actualizado en Google Maps.
- Sintaxis de los tres JS revisados válida; CSS v6 y crypto CSS con bloques equilibrados.
- Seis tratamientos, tres Signature, Square Gift Cards, Google Maps, footer y `noindex` conservados.

## Pendiente antes del cierre
1. Pruebas reales a 375, 768, 1024 y 1440px; zoom Heritage descendente y ascendente, transición hacia Signature, fotografía recortada/contraste y efecto Safari/Android.
2. Comprobar interactuación de acordeones y selección de mapa, teléfono, horarios visibles sin colisiones y Suite 110 correctamente resuelta.
3. Abrir `/thaissage-center/cryptocurrency/` desde el footer y volver al Home, verificar foto, responsive, CTA Fresha y enlace externo BitPay.
4. Confirmar con el cliente vigente disponibilidad real de Bitcoin por sede y procedimiento antes de producción; no inferir pasarela o wallet.
5. GitHub Pages no se abrió desde el lector web de esta sesión. No se declara QA visual, funcional o del deploy como ejecutado.

**Siguiente acción:** revisión visual y técnica de usuario con incidencias focalizadas; no reabrir las secciones ya aprobadas sin justificación.
