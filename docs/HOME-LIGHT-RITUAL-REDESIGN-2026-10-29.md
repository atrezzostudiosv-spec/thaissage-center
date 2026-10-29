# Thaissage Center — LIGHT RITUAL / Home v2
**Fecha:** 29 octubre 2026
**Estado:** implementación en rama de trabajo, revisión visual pendiente.
**Aprobación:** el cliente autorizó rediseñar el Home completo manteniendo el hero, Google Reviews, vidrio ahumado y eGift Card visible.

## Dirección artística
Concepto: **Light Ritual — The Art of Feeling Restored**.
Paleta: blanco cálido `#FCFAF7`, marfil `#F3EEE8`, arena `#E7D8CC`, rosa té `#B69191` y cacao suave `#51423D`.
Tipografía: **Playfair Display** + **Open Sans** (conservadas).
Fotografía: 100% recursos ilustrativos originales WebP ya alojados en el repositorio; no se atribuyen como interiores o empleados reales del negocio.

## Nuevo flujo comercial del Home
1. Hero visual aprobado: copy original, estrellas/reseñas de Frisco, CTA de reserva y promoción eGift Card enlazada a Square.
2. **Choose Your Center**: Frisco, Flower Mound, Southlake con datos y Fresha directo inmediatamente después del hero.
3. **Treatments**: 6 servicios con fotos originales, precios y duración ya documentados; composición editorial visible (mosaico) en vez de scroll sticky que obliga a completar una secuencia.
4. **Our Approach**: contenido existente con una fotografía editorial propia, composición luminosa.
5. **Thailand to Texas**: único interludio fotográfico con scroll leve.
6. **Signature Experiences**: Chiang Mai, Bangkok, Phuket, se muestran duración/precios del menú original (sujetos a confirmación actual en Fresha).
7. **eGift Cards**: capítulo comercial visible, además de su promoción en hero.
8. **Contact**: formulario de prueba Atrezzo segregado del booking real.
9. **Final booking CTA**: abre selección de sede → Fresha.

## Calidad funcional y técnica
- Botón de reserva en barra inferior móvil, abriendo exactamente el selector existente de 3 sedes.
- Eliminación de scroll controlado del carrusel en JS, sin bloqueo de rueda ni sección sticky.
- Reemplazo de caracteres decorativos flecha `↗` por SVG monocromáticos, evitando iconografía emoji en iPhone.
- Entrada de textos con revelado suave 14px/820ms y respeto `prefers-reduced-motion`; contenido visible sin JS.
- Menú superior glassmorphism y hide-on-down / show-on-up conservados.
- Metadatos originales y `noindex,nofollow,noarchive` conservados.
- **Video:** existe permiso para utilizar una demostración visual, pero *esta entrega de composición mantiene la foto hero original*. No se finge un video ni se introduce un fichero no verificado.

## Comprobación estática
22/22 verificaciones en archivos GitHub (rutas, precios, textos, iconos, SEO, sintaxis JS, balance CSS, enlaces y orden de secciones).

## No comprobado
- Render e interacción real a 375, 768, 1024, 1440 px.
- Emails efectivamente recibidos por Atrezzo (FormSubmit puede requerir activación).
- Video de producción o muestra de calidad validada.
- Páginas internas restantes y calidad de actualización de catálogos Fresha.

**Rama de trabajo:** `work/home-v1`.
**Publicación de demo:** root `main` en GitHub Pages; solo tras sincronizar y confirmar ejecución.

**Decisión de Atrezzo:** obtener aprobación visual de la composición completa antes de consolidar el CSS (actualmente la capa `home-light-ritual.css` está separada de la base para permitir reversión segura).
