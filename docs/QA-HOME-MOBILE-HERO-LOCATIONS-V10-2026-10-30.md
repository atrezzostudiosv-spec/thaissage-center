# Thaissage Center — QA Home móvil v10: espacio, menú y fotografía blanca

**Fecha:** 30 octubre 2026  
**Alcance autorizado:** EXCLUSIVAMENTE Home móvil (<=720 px). No alterar desktop, contenido real, tratamientos, mapas, Signature, Gift Cards, footer ni páginas interiores.

## Incidencias comprobadas en capturas
1. Hero: texto introductorio previamente oculto, pero H1 grande y demasiado cerca de los botones; Gift Cards y rating congestionados.
2. Hamburger: doble aro de borde/foco blanco y púrpura, contrario a los controles minimalistas aprobados.
3. Locations: fotografía anterior sobre verde difuso produce efecto sucio; se exige fondo blanco y referencia de piedras blancas y flores rosas. La referencia adjunta tiene una marca de agua: no se incrusta ni se borra.
4. Locations: fotografía editorial inferior con texto «Find your moment.» y dos mensajes «A quieter moment…» y «Services and booking times…» deben desaparecer SOLO en móvil.

## Entrega implementada
- **Nuevo recurso original:** `assets/images/thaissage-locations-white-marble-flowers-mobile.webp`: escena generada para este proyecto (bandejas de piedra, flores blancas/rosas, mármol claro, luz suave, espacio negativo). WebP responsive pequeño y SEO descriptivo. No contiene marca de agua. Se verificó que el SHA de GitHub corresponde exactamente al binario subido.
- **Nuevo CSS:** `assets/css/home-mobile-art-direction-v10.css`, cargado tras v9 con versión de caché exclusiva de teléfono. El tamaño de H1 baja a `clamp(37px,9.5vw,47px)` y gana separación `clamp(37px,5svh,47px)` respecto a los CTA; más aire antes de eGift y reseñas; una regla adicional se aplica a <=390px.
- **Hamburguesa:** sin círculo, borde, fondo, sombra o desenfoque; solo dos líneas blancas. Sigue disponible el foco de teclado mediante borde cuadrado discreto `:focus-visible`.
- **Locations:** fondo `#FFF` y fotografía original de mármol/flor sobre la sección móvil, sin overlay verde y con acordeones blancos. CSS oculta solamente en móvil `.locations-story-visual`, `.locations-story-footer`, `.locations-footnote`. Ningún texto se destruyó en desktop.
- **HTML:** `index.html` solo añade referencia versionada a nueva hoja al final de estilos. No se alteran HTML de páginas interiores ni JS del acordeón.
- **Reservas:** enlaces a Fresha de Frisco, Flower Mound y Southlake preservados; sus horas, teléfonos y mapas se conservan.

## QA técnico efectuado
- Nueva hoja presente y cargada después de v9; todos los selectores correctivos dentro de consultas `max-width:720px` o `max-width:390px`.
- Archivo WebP localizado en GitHub, SHA verificado y recurso utilizado por CSS.
- H1, CTA, Gift Cards, reseñas y barra móvil preservados.
- 3 elementos `details` originalmente cerrados, 3 enlaces Fresha intactos; IDs y anclas HTML válidas; CSS sin llaves faltantes; `noindex,nofollow,noarchive` intacto.

## PENDIENTE, NO DECLARAR APROBADO
- Prueba visual e interacción en iOS/Android a 375/390/430 px para confirmar tamaño de titular, espacio antes de CTAs y eGift/rating; icono de menú sin aro después de tocarlo; fondo de fotografía claro con legibilidad; acordeones cerrados/abiertos.
- Comprobar que desktop/tablet a 768/1024/1440 px permanezca intacto. Estas medidas NO se verificaron con navegador gráfico en esta sesión.
- Aprobación de usuario antes de cerrar Home móvil.

**Estado:** v10 IMPLEMENTADA EN GITHUB; revisión visual pendiente. Demos mantienen `noindex`.
