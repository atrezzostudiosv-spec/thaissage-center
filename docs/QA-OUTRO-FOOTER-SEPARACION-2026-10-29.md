# Thaissage Center · Cierre fotográfico + footer verde — QA de continuidad
**Fecha:** 29 de octubre de 2026
**Fase:** Home / validación visual en curso
**Cambio solicitado:** cierre fotográfico moderado y footer diferenciado en verde bosque, unidos por una relación cromática y un límite limpio. No prolongar fotografía bajo el footer ni utilizar degradado negro de transición.

## Implementación
- El cierre **YOUR TIME TO RESET / Make Room for Yourself.** conserva su contenido y el selector de reservas Fresha.
- Las capas `.site-outro-photo` y `.site-outro-tonal` se trasladaron dentro de la sección `.cinematic-ending` de `index.html`. **El footer ya no comparte la fotografía como fondo**.
- La fotografía de cierre es la imagen panorámica existente `assets/images/thaissage-thai-massage-ritual-wide.webp`, con versión vertical `thaissage-thai-massage-ritual-mobile.webp`; no se reutiliza ni reintroduce el SVG botánico revertido previamente.
- `assets/css/home-editorial-v2.css` establece una altura aproximada del **70svh** en desktop (mínimo 530 px / máximo 720 px) y 72svh con altura mínima 580 px en móviles hasta 720 px, para asegurar legibilidad del titular, texto y CTA.
- El footer tiene fondo **verde sólido `#344A40`**, texto marfil y líneas internas tenues. No existe un fondo fotográfico compartido ni degradado de unión. La foto termina donde empieza el footer, intencionalmente.
- `index.html` carga `home-editorial-v2.css?v=20261029-green-footer-4` para invalidar caché.

## Verificado en código
- Las dos capas fotográficas están dentro del cierre y no sobre el footer.
- Reglas scoped para foto, overlay, footer y diseño móvil.
- 143 pares de llaves CSS balanceadas.
- 1 footer, IDs únicos, anclas del Home válidas; selector de reservas original conservado.
- Seis tratamientos, tres sedes, mapa, enlaces y meta robots `noindex` intactos.
- No se tocaron Hero, Treatments, Locations, mapa, Our Approach, Signature, Gift ni el contenido del cliente.

## Pendiente
- Verificación de despliegue de GitHub Pages, capturas 375/768/1024/1440 y tamaños intermedios, contraste real, recorte fotográfico, lectura del CTA y transición visual entre foto y color sólido.
- No se ha validado la experiencia real de scroll ni los enlaces externos en navegador interactivo.
- El cierre permanece **EN VALIDACIÓN VISUAL**, no aprobado para producción.
