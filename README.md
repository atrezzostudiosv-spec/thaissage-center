# Thaissage Center — Website Redesign by Atrezzo Studios

**Proyecto:** rediseño del sitio [Thaissage Center](https://thaissagecenter.com/)  
**Estado (29/10/2026):** Home desarrollado y visible en **demo noindex** de GitHub Pages; 18 páginas con contenido redactado, 17 aún sin implementar. Home pendiente de validación visual, no autorizado para producción.  
**Cliente/proyecto independiente:** no mezclar assets, contenido o decisiones de otros repositorios.

## Objetivo
Construir un website multipágina con **18 rutas planificadas** y una experiencia editorial cálida y serena, adaptada a la marca real. La propuesta visual pendiente de validación es **«Thailand to Texas — The Art of Feeling Restored»**. Los tratamientos y las tres sedes (Frisco, Flower Mound, Southlake) deben mantener contenido y reservas propios verificables.

## Documentos de referencia
- [Estado y continuidad](ATREZZO-PROJECT-STATUS.md)
- [Fase 2 — Estrategia y arquitectura](docs/FASE-02-ESTRATEGIA-Y-ARQUITECTURA.md)
- [Fase 3 — Contenido de 18 páginas](docs/FASE-03-CONTENIDO-COMPLETO-18-PAGINAS.md)
- [Fase 4 — Dirección artística y partitura de 92 escenas](docs/FASE-04-DIRECCION-ARTISTICA-Y-SCROLL-18-PAGINAS.md)
- [Manual artístico y scroll v2.0](docs/standards/ATREZZO_WEBS_DIRECCION_ARTISTICA_Y_SCROLL_V2.md)
- [Regla de continuidad](docs/standards/REGLA_CONTINUIDAD_Y_CIERRE_FASES_1.0.md)

## Organización
- `docs/` — fuentes editoriales, arquitectura y decisiones visuales.
- `index.html` y `assets/css/`, `assets/js/` — prototipo Home implementado. Las páginas internas se desarrollarán después de validar el Home.
- `assets/images/` — recursos WebP ilustrativos incorporados al Home; su presencia en repositorio no acredita fotografías de locales reales.
- `ATREZZO-PROJECT-STATUS.md` — único registro maestro de avance y verificaciones.

## Próximo trabajo
**Validar el Home ya construido** a 375, 768, 1024 y 1440 px con pruebas reales de scroll, navegación y formulario. Solo corregir defectos comprobados. Después continuar con las 17 páginas internas.

## Requisitos
- No inventar precios, tratamientos, resultados, reseñas, personal, certificaciones ni afirmaciones sanitarias.
- Resolver antes de publicar las discrepancias de **suite de Southlake**, **horarios**, **tarifas** y **servicios disponibles por sede**.
- No usar fotos de instalaciones o empleados sin autorización y procedencia clara.
- Mantener demos en **noindex**, con navegación nativa, accesibilidad y respeto a `prefers-reduced-motion`.
- No declarar verificados formularios, reservas o responsive hasta probarlos realmente.

**Atención:** esta es una demo en validación, no una web de producción. Ver el [QA del Home del 29/10/2026](docs/QA-HOME-2026-10-29.md).