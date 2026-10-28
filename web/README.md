# Thaissage Center — Home v1
**Fase 4B · Implementación del Home en revisión visual**

Home completo de primera iteración, con HTML, CSS y JavaScript sin dependencias de ejecución. **No representa todavía el website de 18 páginas terminado ni un sitio autorizado para producción.**

## Cómo verlo
Desde la carpeta `web/`: `python3 -m http.server 4173`, luego abrir `http://localhost:4173/`. También se puede abrir `index.html` localmente, pero se recomienda un servidor local.

## Implementado
- Hero full-bleed, composición editorial, narrativa de scroll suave y foto con zoom 1.025–1.05 sin bloquear la navegación.
- Filosofía, seis grupos de tratamientos, paquetes Chiang Mai / Bangkok / Phuket, tres ubicaciones, tarjetas regalo y CTA de cierre.
- Selección de sede con cuadro de diálogo accesible y tres enlaces Fresha verificados como páginas públicas.
- Menú responsive, anclas válidas, accesibilidad por teclado, estilos de focus, texto visible sin JS, `prefers-reduced-motion`.
- SEO descriptivo de Home, Open Graph básico, `noindex,nofollow` y `robots.txt` que bloquea rastreo de esta demo.

## Estado de la auditoría
Consultar [QA de Home](../docs/QA-HOME-V1.md) y [fuentes de fotografía](../docs/IMAGE-SOURCES-HOME-V1.md). El render en navegador de desarrollo se probó a 375, 768, 1024 y 1440 px con fotografías locales ilustrativas de sustitución. **Las fotografías externas reales de Unsplash no se pudieron descargar en ese entorno, por lo que sus encuadres exactos siguen sin verificar.**

## Limitaciones reales
- Este commit implementa **solo el Home**. El menú conduce a secciones operativas de esta página, no a rutas internas ficticias; quedan por implementar las otras 17 rutas de las Fases 2–4.
- Fotografías de Unsplash son ilustrativas y no muestran empleados o instalaciones de Thaissage Center. Su uso y autores están documentados, pero faltan fotografías reales autorizadas para cada sede.
- Confirmar suite de Southlake, precios, duraciones, horarios, tratamientos y políticas antes de producción.
- No se ha comprobado la finalización de una reserva en Fresha ni el pago en Square.
- No se ha publicado una demo externa. No generar URLs de despliegue ni afirmar que el proyecto está listo para producción.
