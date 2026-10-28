# ATREZZO WEBS — THAISSAGE CENTER
## FASE 04 · Dirección artística y partitura de scroll de las 18 páginas
**Fecha:** 28 de octubre de 2026  
**Estado:** PROPUESTA VISUAL COMPLETA · EN VALIDACIÓN · SIN PROGRAMACIÓN  
**Cliente:** Thaissage Center · Frisco / Flower Mound / Southlake, Texas  
**Documentos base:** auditoría original, Fases 02 y 03, Manual ATREZZO WEBS Dirección Artística y Scroll v2.0 y Registro de Continuidad 1.0.

> **Alcance estricto.** Este entregable define el lenguaje de diseño, la fotografía por escena, el comportamiento de scroll, el orden del contenido y los CTA de las **18 rutas exactas** de la Fase 03. No sustituye ni reescribe el copy de esa fase, no genera nuevos servicios, no prueba funcionalidades ni crea un prototipo. La arquitectura de Fase 02 permanece cerrada. Esta es **una única** dirección artística para presentar y validar antes del desarrollo.

## 01 · Ficha de identidad del negocio (Manual v2.0 §1A)

| Campo | Decisión argumentada | Grado de certeza |
|---|---|---|
| Sector y subsegmento | Centro presencial de masaje tailandés, masaje clásico y experiencias de bienestar con tres sedes de Texas. | **Hecho de fuentes S1–S5** |
| Evidencia 1 | «Thailand to Texas», «Self Love Begins Here» y «Since 2017» aparecen en la comunicación de la empresa. | **Afirmación de marca** |
| Evidencia 2 | La oferta incluye Thai, Thai Combination, Swedish, Deep Tissue, parejas y numerosos tratamientos adicionales por sede. | **Catálogo S1–S5; oferta concreta variable** |
| Evidencia 3 | Hay tres destinos de reserva diferenciados en Fresha. | **Enlaces acreditados; transacción no ensayada** |
| Evidencia 4 | Las imágenes públicas de Fresha muestran espacios reales con textiles blancos, madera oscura, paredes cálidas y decoración sencilla. | **Referencia visual observada; autorización de uso pendiente** |
| Evidencia 5 | La versión original usa fotografía de piedras y orquídeas; el site incluye Playfair Display y Open Sans. | **Archivo aportado** |
| Posicionamiento | Bienestar próximo, centrado en elección de tratamiento, experiencia física auténtica y reserva fácil. **No** asumir luxury spa exclusivo. | **Hipótesis editorial sustentada en la oferta** |
| Sensación buscada | **Serena, acogedora, genuina.** Calma sin frialdad, cuidado sin afirmaciones terapéuticas no probadas. | **Propuesta** |
| Lo que no debe transmitir | **Lujo impostado, espiritualidad estereotipada, clínica médica.** | **Restricción creativa** |
| Concepto creativo central | **“Thailand to Texas · The Art of Feeling Restored”.** Contar la transición desde la técnica y el ambiente hacia la decisión de reservar, no desde un decorado exótico. | **Propuesta ya presentada en fases previas** |
| Arquetipo | **Sereno / boutique + humano / cercano**, sin asignación de precio o segmento alto no demostrado. | **Propuesta basada en identidad** |
| Dos momentos scroll memorables | Home: única transición fotográfica suave de la filosofía a los tratamientos. Signature: tres capítulos narrativos completos, **sin** secuencia sticky larga. | **Propuesta M2** |
| Conversión | Book Now → selector de sede; páginas locales → Fresha de esa sede; Gift Cards → Square. | **Estructura Fase 02–03** |

### Cinco ejes de marca, 1–5 (juicio creativo, no encuesta)

| Eje | Lectura | Razón |
|---|---|---|
| Relación | **2/5 — próxima** | Tratamiento presencial y elección personal; no hay evidencia de tono institucional. |
| Compra | **3/5 — deliberada pero simple** | El visitante compara tipos de masaje, duración y sede, pero debe poder reservar enseguida. |
| Promesa | **3/5 — experiencia sobre tarea** | El ambiente y los paquetes importan, sin convertirlo en lujo aspiracional no acreditado. |
| Autoridad | **2/5 — humana y tangible** | Prueba principal: catálogo, sedes e interiores; evitar títulos/credenciales inventados. |
| Energía | **1/5 — calmada** | El movimiento acompaña la lectura y no la interrumpe. |

### Decisión de fotografía

**Prioridad A:** pedir originales y permiso para imágenes reales de cada sede, con autor/fuente y permiso de exhibición. Las fichas públicas de Fresha contienen fotografías útiles de Frisco (entrada, sala individual, sala doble, pasillo), Flower Mound (salas dobles, recepción, ducha, pasillo) y Southlake (salas de tratamiento). Su presencia online **no equivale a una licencia de reutilización**.

**Prioridad B:** fotografía editorial ilustrativa, debidamente licenciada o generada, para explicar técnicas sin afirmar que las personas, terapeutas o espacios son de Thaissage Center. Mostrar manos, camilla, compresas y tejidos de forma respetuosa. No falsear uniformes, logos ni retratos de personal.

**Prioridad C:** originales de stock del website actual que tengan derechos acreditados y calidad suficiente; la fotografía de orquídeas y piedras es una referencia de color, **no el hero automático**. Si falta permiso o imagen adecuada, composición editorial tipográfica temporal sin inventar sedes.

### Dirección cromática y tipográfica — propuesta controlada

| Token de trabajo | Valor | Uso |
|---|---|---|
| `ivory` | `#F4EFE6` | Fondo principal cálido; lectura prolongada. |
| `cacao` | `#342A26` | Texto, header sólido y overlay profundo; no llenar toda la web de negro. |
| `sand` | `#BDA78E` | Divisiones, fondos de transición, detalles. |
| `orchid` | `#9D788F` | Acento muy dosificado, inspirado en la fotografía original; no para texto pequeño sin comprobar contraste. |
| `linen` | `#FCFAF6` | Pausas y paneles de contenido. |
| Serif editorial | Playfair Display, con fallback Georgia | H1/H2, títulos breves; peso sobrio, no ultra fino sobre fotos. |
| Sans funcional | Open Sans, con fallback system-ui | Navegación, texto, botones, FAQ, direcciones. |

**Contraste cromático preliminar calculado (solo fondos sólidos, no sustituye pruebas de navegador):** cacao sobre marfil **12,18:1** y cacao sobre lino **13,38:1**. Orquídea sobre marfil **3,32:1**: **NO utilizar para texto normal** que requiera 4,5:1. Arena sobre marfil **2,02:1**: usar como superficie o detalle no semántico, no texto. Los botones y los overlays fotográficos deben medirse por estado y zona de fotografía.

**Jerarquía sugerida:** H1 con `clamp(2.5rem, 5.3vw, 5.3rem)` excepto páginas utilitarias; H2 `clamp(1.9rem, 3.3vw, 3.6rem)`; cuerpo 16–18px, line-height 1.55–1.7; anchura de lectura de 60–72 caracteres. Ajustar tras ver en navegador. No prometer WCAG sin medir; comprobar contrastes reales sobre fotografía y estados de botones.

**Composición:** retícula desktop de 12 columnas con ancho de texto controlado; alternancia entre fotografías a pantalla completa, composición 60/40, grandes espacios editoriales y líneas de contenido. Header claro o cacao según contraste; no usar tarjetas repetidas como estructura primaria. Botones de alto contraste, bordes discretos, iconos lineales en lugar de emojis.

## 02 · Mapa de movimiento y reglas técnicas

| Tipo de página | Intensidad | Patrón permitido | Restricción |
|---|---|---|---|
| Home | **M2** | HC + RE selectivo + una EF/ZF acotada + PE/CP | Una sola secuencia visual destacada; CTA siempre temprano. |
| All Massage Services | **M1–M2 moderado** | RE + imagen editorial lateral + PE | No repetir cards idénticas para todos los tratamientos. |
| Cinco tratamientos principales | **M1** | Imagen principal única + RE en introducción + contenido estático | Cada página con un encuadre distinto; consulta siempre rápida. |
| Specialty / Spa & Body | **M1** | Navegación por anclas + RE leve + imagen de detalles | Listas largas legibles, sin sticky invasivo. |
| Signature Packages | **M2** | Tres capítulos visuales EF/RE; ZF hasta 1.04 aprox. | No sticky 300vh ni pausa obligatoria. |
| Our Story | **M2 ligero** | GP solo con imágenes auténticas; PE + RE | No inventar fundadores, años de experiencia, terapeutas. |
| All Locations / 3 locales | **M1** | Fotos reales y revelado corto | Reserva y dirección visibles antes de animar. |
| Gift Cards / Contact / Cryptocurrency | **M0–M1** | Estados funcionales, casi todo estático | Nada debe interferir con compra, llamada o información. |

**Rangos de referencia, sujetos a validación visual:** RE 18–24px y 700–900ms con ligeros escalonamientos; ZF 1.02→1.05 solo foto, nunca texto; en cualquier caso no aplicar a todos los párrafos. Encabezados y CTA no dependen de IntersectionObserver para ser visibles. Scroll vertical siempre nativo. `prefers-reduced-motion: reduce` elimina transiciones escénicas y revela todo. En móvil desactivar la fijación prolongada, el paralaje y el desplazamiento horizontal continuo.

### Navegación y conversión común

- **Menú desktop:** Treatments (submenu), Signature Packages, Locations (submenu), Our Story, Gift Cards y Book Now. Contact y Cryptocurrency se conservan en footer.
- **Menú móvil:** desplegable de acceso directo y controles expandibles accesibles; no menú que desaparezca al mover puntero. CTA `Book Now` permanece sencillo y táctil.
- **Book Now global:** abre selector explícito Frisco / Flower Mound / Southlake y luego el enlace Fresha real correspondiente. No asumir preselección de ciudad ni reservar sin elección.
- **Book Now local:** salida inmediata a Fresha de esa sede; indicador de que se abre el portal externo cuando sea útil.
- **Gift Cards:** Square real; no crear un checkout propio ficticio ni afirmar términos sin fuente.
- **Contacto:** teléfonos reales en enlaces `tel:` y direcciones seleccionables; no inventar formulario ni recoger datos sin backend.
- **Tratamientos:** el usuario debe poder saltar desde índice al servicio por ancla o página. Todas las transiciones deben dejar intacta la navegación por teclado.

### Criterios de diseño responsive (para ensayar, NO verificados)

| Ancho de prueba | Comportamiento exigido |
|---|---|
| **375 px** | Hero sin texto sobre manos/rostros; CTA visible; encabezados de 2–4 líneas legibles; galería apilada; foto superior o degradado integrado si overlay ilegible; no overflow lateral. |
| **768 px** | Navegación tablet sin colisiones, imágenes 50/50 cuando quepan, menús por botón accesible, capítulos sin sticky forzado. |
| **1024 px** | Comprobar alturas reducidas y textos largos; dos columnas donde haya ancho real, selector de sede claro, fotografía con focal protegido. |
| **1440 px** | Compaginación editorial completa; imágenes full-bleed nítidas, título sin estiramiento exagerado, CTA principal visible antes del primer scroll. |
| **Intermedios y altura baja** | Controlar cortes y solapes, `100dvh` solo cuando aporte, estados foco/hover, recarga a mitad del scroll y retorno hacia arriba. |

## 03 · Convenciones de las partituras

**Fuente:** `S1`=Home/HTML; `S2`=Our Locations; `S3`=Fresha Frisco; `S4`=Fresha Flower Mound; `S5`=Fresha Southlake; `S6`=Cryptocurrency; `S7`=Square; `F3`=texto literal de Fase 03 basado en esas fuentes. `F3` nunca acredita por sí sola una nueva afirmación comercial.

**Escenas:** HC=hero cinematográfico; EF=full-bleed; RE=revelado editorial; ZF=zoom foto; GP=galería progresiva; PE=pausa editorial; CP=CTA panorámico. CF/TL solo se usarían si aportaran una secuencia acreditada; aquí **no** se fuerzan. **Móvil:** se describe la adaptación particular; regla global siempre scroll normal. **Estado:** `PROP`=escena propuesta, pendiente aprobación visual; `FOTO`=pendiente imagen real/licencia; `DATO`=requiere dato comercial validado. Pueden acumularse.

**Regla de continuidad:** los títulos citados en “Contenido” referencian los H1/H2/H3 ya redactados en Fase 03; la implementación debe conservarlos completos y no sustituir el documento por las etiquetas resumidas de la tabla. En páginas con FAQ, la tabla `FAQs` representa **todos los ítems redactados**, no permiso para omitirlos.

## 04 · Partitura de escenas de las 18 páginas

La tabla de cada ruta detalla **Sección · Objetivo · Contenido acreditado · Patrón visual · Imagen/foco · Movimiento · Móvil · CTA · Estado**, como exige el manual.

### PAGE 01 — Home

**Ruta:** `/` · **Movimiento:** M2  
**Criterio particular:** Puerta de entrada con calma y reserva inmediata; la sensación de entrar en un espacio real, no en un spa imaginario.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero / Bienvenida | Orientar y facilitar reserva | “Thai Massage & Wellness, With Time for You.” F3/S1–S5 | HC | H01 foto editorial con espacio negativo a izquierda, sin atribuirla a una sede | H1 RE corto + foto ZF casi imperceptible | Recorte propio, texto nunca sobre persona | Book Your Visit / Explore Treatments | PROP+FOTO |
| Self Love Begins Here | Presentar filosofía sin claim médico | Texto de filosofía F3/S1 | PE | Lino, textura real sin cliché de loto | Titular RE único | Bloque legible a ancho completo | Explore Treatments | PROP |
| Find Your Kind of Massage | Descubrir técnicas | Thai / Combination / Deep Tissue / Swedish / Couples / More F3/S1–S5 | RE + imagen editorial | H02 detalle profesional ilustrativo; textos como índice a lado | Reveal por grupo, no cards en cascada | Lista + imagen integrada vertical | Enlaces a cada tratamiento | PROP+FOTO |
| Transition: Thai Roots | Dar identidad al paso de filosofía a tratamiento | Frase de marca “Thailand to Texas” F3/S1 | EF + ZF | H03 textil / manos de técnica real ilustrativa | ÚNICO momento de zoom escénico acotado, sin sticky largo | Foto superior y gradiente sólido | Discover Our Approach | PROP+FOTO |
| Three Signature Experiences | Diferenciar paquetes | Chiang Mai / Bangkok / Phuket F3/S1 | PE + RE | H04 detalle de compresa; H05 tela; H06 textura cuerpo, 3 focos distintos | Títulos secuenciales suaves | Capítulos verticales separados | View Signature Packages | PROP+FOTO |
| Three Locations | Disminuir fricción de reserva | Frisco / Flower Mound / Southlake F3/S2–S5 | RE + mini GP | Fotografías verdaderas L-F/L-M/L-S identificadas por sede | Revelado simple en orden | Fichas alineadas; CTAs siempre visibles | Book por sede | PROP+FOTO+DATO |
| Gift Moment / Final CTA | Convertir regalos y reserva | Gift Cards + “Make Room for Yourself.” F3/S7 | PE + CP | H07 foto ambiente sobrio ilustrativo opcional | Foto estática con copy directo | Textos sobre fondo sólido si contrastan mejor | Square / Choose Your Location | PROP+FOTO |


### PAGE 02 — All Massage Services

**Ruta:** `/massage-services/` · **Movimiento:** M1–M2  
**Criterio particular:** Página índice: descubrir y comparar sin perderse entre demasiadas tarjetas iguales.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Intro + filtro editorial | Entender oferta completa | “Find the Massage That Feels Right for You.” F3/S1–S5 | PE + RE | S01 fotografía horizontal de sala / textura | Entrada de título aislada | Índice de anclas inmediato | View Techniques | PROP+FOTO |
| The Foundations | Diferenciar cinco bases | Traditional / Combination / Swedish / Deep Tissue / Office Syndrome F3 | RE + gran foto lateral | S02 manos de masaje con tratamiento ilustrativo, no empleados reales | RE encabezado y una foto | Apilar con separadores, sin 5 tarjetas clones | Read Details | PROP+FOTO |
| Together or Different | Distinguir experiencia compartida | Couples / Four Hands / Aromatherapy / Hot Stone F3 | EF breve + texto editorial | S03 dos camillas reales si licencia; no mostrar parejas ficticias como clientes | Fotografía estable, RE muy leve | Imagen integrada antes del texto | View Couples / Specialty | PROP+FOTO |
| More Specialty Choices | Mostrar catálogo ampliado | Todos los servicios y anclas de specialty F3/S3–S5 | PE | Detalles macro únicamente si aportan | Estático | Lista por familias | Explore Specialty | PROP |
| Beyond Massage | Separar otras prestaciones | Spa & Body Treatments F3/S4–S5 | RE | S04 detalle de toallas, sauna solo con foto real del centro específico | Opacidad breve | Sección de ancho completo | Browse Spa Treatments | PROP+FOTO |
| Select Location | Llevar a oferta vigente | Variación de menú por sede F3/S3–S5 | CP sobrio | Imagen innecesaria | Sin animación en selector | Botones grandes | Choose Your Location | PROP+DATO |


### PAGE 03 — Traditional Thai Massage

**Ruta:** `/massage-services/thai-massage/` · **Movimiento:** M1  
**Criterio particular:** El tratamiento fundacional se explica con movimiento corporal real y una fotografía respetuosa, no con ambientación ornamental.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Thai | Identificar técnica | “Traditional Thai Massage.” F3/S1/S3–S5 | HC editorial compacto | T01 estiramiento asistido profesional ilustrativo, encuadre lateral | Título RE breve | Imagen superior si recorte no funciona | Book / Choose Location | PROP+FOTO |
| Movement and Pressure | Comprensión de técnica | “A Tradition of Movement and Pressure” F3 | PE + imagen editorial | T02 mano aplicando presión a través de tela; no manipulación clínica | Estático | 1 columna clara | Explore Options | PROP+FOTO |
| Different Kind of Experience | Describir cómo se distingue | Segundo bloque F3 | RE | Detalle de postura si hay licencia | Un reveal, no por párrafo | Texto íntegro y legible | — | PROP |
| Find Your Session | Selección de sede | Datos variables F3/S3–S5 | PE | — | Estático | 3 acciones táctiles | Book in [City] | PROP+DATO |
| Explore + FAQs | Comparar y despejar dudas | Servicios relacionados y FAQ literal F3 | PE / acordeón accesible | — | Sin animación obligatoria | Acordeones nativos accesibles | Related Services / Book | PROP |


### PAGE 04 — Thai Combination Massage

**Ruta:** `/massage-services/thai-combination-massage/` · **Movimiento:** M1  
**Criterio particular:** Composición dual para explicar mezcla de técnicas sin prometer resultados.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Combination | Definir técnica | “Thai Combination Massage.” F3/S1/S3–S5 | HC editorial dividido | C01 primer plano de masaje ilustrativo, fondo tenue | RE de título solo | Foto y copy apilados | Choose Location | PROP+FOTO |
| Where Techniques Meet | Explicar combinación | H2 y copy F3 | PE + RE | C02 detalle doble de toalla y presión | Ligero reveal de dos elementos | Una columna sencilla | — | PROP+FOTO |
| Who Wants Variety | Acompañar decisión | “For Guests Who Want Variety” F3 | PE | — | Estático | Texto completo | Book | PROP |
| Available Locations | Mostrar menú real | Selector de Fresha F3/S3–S5 | PE | — | Estático | Opciones visibles | Book in [City] | PROP+DATO |
| Keep Exploring / FAQ | Comparar tratamientos | Comparativas y todas las FAQ F3 | RE muy corto | — | Estático en lectura | Acordeones bien etiquetados | Thai / Swedish / Book | PROP |


### PAGE 05 — Deep Tissue Massage

**Ruta:** `/massage-services/deep-tissue-massage/` · **Movimiento:** M1  
**Criterio particular:** Más concentración y claridad, menos promesa de alivio clínico.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Deep Tissue | Identificar modalidad | “Deep Tissue Massage.” F3/S1/S3–S5 | HC recortado | D01 encuadre cerrado de manos en espalda ilustrativo, consentimiento visual | Título y CTA primero | Composición vertical con aire | Choose Location | PROP+FOTO |
| Firmer Massage Style | Informar intensidad | “A Firmer Massage Style” F3 | PE / RE | D02 detalle de presión neutra | RE único | Texto visible sin efecto | — | PROP+FOTO |
| Choose with Preferences | Orientar sin diagnosticar | Bloque F3 | PE | — | Estático | 1 columna | View Other Styles | PROP |
| Booking by Location | Convertir | Fresha 3 sedes F3/S3–S5 | PE | — | Sin reveal | Botones táctiles | Book in [City] | PROP |
| Alternative + FAQs | Evitar confusión | Related services y FAQ F3 | PE | — | Solo acordeón opcional | FAQ completo | Thai Combination / Swedish | PROP |


### PAGE 06 — Swedish Massage

**Ruta:** `/massage-services/swedish-massage/` · **Movimiento:** M1  
**Criterio particular:** Fotografía más abierta y difusa que Deep Tissue para que la distinción se perciba sin cliché.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Swedish | Presentar masaje | “Swedish Massage.” F3/S1/S3–S5 | HC cálido | W01 manos suaves con luz lateral ilustrativas | RE corto | Foto superior en móvil | Book | PROP+FOTO |
| Smooth Rhythmic Experience | Explicar sesión | H2 F3 | PE + imagen integrada | W02 lino y manos desde plano abierto | Estático tras entrada | Imagen texto en flujo | — | PROP+FOTO |
| Make It Your Moment | Conectar con necesidad | Copy F3 | RE suave | — | Solo título | Texto visible | — | PROP |
| Three Locations | Ayudar reserva | Tres accesos Fresha F3 | PE | — | Sin animación | Botones explícitos | Book in [City] | PROP |
| Alternative + FAQs | Orientar comparaciones | Related services + FAQ F3 | PE | — | Sin movimiento obligatorio | Acordeón accesible | Explore Thai / Deep Tissue | PROP |


### PAGE 07 — Couples Massage

**Ruta:** `/massage-services/couples-massage/` · **Movimiento:** M1  
**Criterio particular:** La evidencia es una habitación real preparada para dos, no una pareja de actores interpretando clientes.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero for Two | Comunicar experiencia conjunta | “Couples Massage.” F3/S1/S3–S5 | HC | P01 sala doble real de Frisco o Flower Mound autorizada, etiquetada como corresponde | RE titular | Dos camillas visibles sin recortes | Choose Location | PROP+FOTO |
| Moment You Can Share | Explicar propuesta | Copy F3 | PE editorial | P02 textura de dos toallas; opcional | Reveal discreto | Copy legible | — | PROP |
| Choose Your Location | Disponibilidad por sede | Fresha local F3/S3–S5 | PE | — | Sin animación | Botones siempre visibles | Book in [City] | PROP+DATO |
| Make More Time | Cruzar a paquetes | Paquetes Signature F3/S1 | EF breve fotográfica si existe | P03 interior cálido auténtico | Foto estática | Texto después de foto | View Signature Packages | PROP+FOTO |
| Couples vs Four Hands / FAQ | Evitar confusión de servicios | Comparativa y FAQ F3 | PE | — | Estático | Lectura clara | Four Hands / Book | PROP |


### PAGE 08 — Specialty Massage Therapies

**Ruta:** `/massage-services/specialty-massages/` · **Movimiento:** M1  
**Criterio particular:** Catálogo largo como guía de consulta: las familias organizan el ritmo, no la animación.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Specialty | Explicar amplitud | “Specialty Massage & More Ways to Unwind.” F3/S3–S5 | PE + imagen editorial | X01 detalle masaje de manos ilustrativo | RE H1 único | Índice anclas visible | Jump to Techniques | PROP+FOTO |
| Hands Heat Aromatics | Conservar técnicas | Four Hands / Aromatherapy / Hot Stone / Herbal Compress F3 | PE + 1 EF parcial | X02 piedras/compresa con procedencia y contexto | Solo foto RE | Cada servicio en subsección no cards | Anchors / Book | PROP+FOTO |
| Focused Complementary | Conservar servicios | Reflexology / Stretching / Therapeutic / Cupping / Prenatal / Office Syndrome / CBD F3 | PE | X03 foto de pie/manos ilustrativa opcional, sin embarazada fingida | Estático | Encabezados y anclas fáciles | Jump to Location | PROP+DATO |
| Add-Ons | Presentar como oferta variable | Add-Ons & Location-Specific Choices F3 | PE | — | Estático | Texto, sin claims | View Fresha | PROP+DATO |
| Locations + FAQs | Resolver catálogo por sede | Fresha por local + todas las FAQ F3 | PE / acordeón | — | Sin movimiento | Selector claro | Book in [City] | PROP |


### PAGE 09 — Spa & Body Treatments

**Ruta:** `/spa-treatments/` · **Movimiento:** M1  
**Criterio particular:** Materialidad real: agua, tejidos y objetos. No enseñar una sauna perteneciente a otra sede.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Spa & Body | Separar spa del masaje | “Spa & Body Treatments.” F3/S4–S5 | HC editorial material | B01 toallas y agua, ilustrativo, sin simular instalación | RE suave | Imagen superior con buen contraste | Choose Location | PROP+FOTO |
| Body Scrub | Explicar servicio | Copy F3 | PE + imagen grande | B02 textura de exfoliante sin marcas inventadas | ZF opcional hasta 1.03 | Copy en bloque debajo | View Availability | PROP+FOTO+DATO |
| Sauna | Aclarar disponibilidad | Copy F3/S4–S5 | PE foto real SOLO de sede que la tenga | B03 foto de sauna real autorizada o sin foto | Estático | No ocultar condición por sede | Check Fresha | PROP+FOTO+DATO |
| Day Spa Packages | Presentar categoría | Texto F3/S4–S5 | RE | — | RE de encabezado | Lista simple | Explore Packages | PROP |
| Signature + Planning + FAQ | Conectar con paquetes y reserva | Chiang Mai/Bangkok/Phuket; FAQs F3 | PE + CP | B04 detalle spa ilustrativo para CTA si necesario | Sin efectos obligatorios | Selector visible | Packages / Book | PROP |


### PAGE 10 — Signature Packages

**Ruta:** `/signature-packages/` · **Movimiento:** M2  
**Criterio particular:** Tres capítulos propios, con pausas y tonos diferenciados; jamás una sucesión de tres tarjetas idénticas.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Packages | Presentar experiencias | “Three Signature Ways to Unwind.” F3/S1 | HC sereno | K01 detalle textil o sala; sin atribuir nombre a instalación | H1 RE corto | 16:9 a vertical en móvil | Compare Experiences | PROP+FOTO |
| Chapter Chiang Mai | Mostrar composición y duración histórica por validar | Texto F3/S1 para Chiang Mai | EF + RE | K02 compresa herbal real o ilustrativa, punto focal derecha | Foto ZF ≤1.04 + H2; sin sticky | Imagen y copy integrados en vertical | Choose Location | PROP+FOTO+DATO |
| Chapter Bangkok | Mostrar sauna + body scrub + aromaterapia | Copy F3/S1 | EF suave / contraste visual con previo | K03 foto de materiales scrub y aceite; no sala falsa | Entrada editorial simple | Imagen arriba y texto abajo | Choose Location | PROP+FOTO+DATO |
| Chapter Phuket | Mostrar body scrub + coconut oil massage | Copy F3/S1 | Foto integrada + PE | K04 textura coco/tela; sin promesas dermato | Foto quieta y H2 RE | Sección legible sin overlay denso | Choose Location | PROP+FOTO+DATO |
| Compare Experiences | Facilitar elección real | Comparación F3, precios solo tras confirmación | PE + tabla adaptable | — | Cero animación en tabla | Tabla desplazable solo si inevitable; mejor filas apiladas | Book / Explore Spa | PROP+DATO |
| Find Location + FAQs | Conectar a catálogo vigente | Fresha local y FAQ F3 | CP sobrio | K05 pared/textil y un acento cálido opcional | No secuencia adicional | Botones grandes | Book in [City] | PROP |


### PAGE 11 — Our Story / Our Approach

**Ruta:** `/our-story/` · **Movimiento:** M2  
**Criterio particular:** Historia basada en frases verificadas e interiores auténticos, sin inventar biografía de fundadores.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Opening | Presentar personalidad | “A Thoughtful Approach to Feeling Restored.” F3/S1 | HC editorial | A01 recepción o acceso real con licencia; sin imagen de equipo falsa | RE H1 | Foto y título en bloques si hace falta | Discover Treatments | PROP+FOTO |
| Self Love Begins Here | Identidad verbal | Claim y texto F3/S1 | PE | Fondo marfil; sin imagen obligatoria | Título RE | Amplia lectura | — | PROP |
| Thai Roots | Explicar asociación cultural sin fabular | “Thai Roots, More Than One Way to Unwind.” F3 | EF breve | A02 detalle de técnica ilustrativa autorizada | ZF leve opcional | Sin sticky | Explore Thai Massage | PROP+FOTO |
| Spaces for Calmer Visit | Dar prueba espacial | Descripción F3/S3–S5 | GP (imágenes reales) | A03/A04/A05 imagen identificada por cada sede | GP 900ms, solo si están las 3 autorizadas | Foto vertical por sede, mismo alto | Explore Locations | PROP+FOTO |
| Since 2017 + Locations | Conservar afirmación sin exagerar | “Since 2017.” + “Three Locations, One Name.” F3/S1 | PE + CP | — | Estático | CTA inmediato | Choose Your Location | PROP |


### PAGE 12 — All Locations

**Ruta:** `/locations/` · **Movimiento:** M1  
**Criterio particular:** Elegir correctamente un local antes de reservar: claridad por encima del espectáculo.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Localizations | Explicar tres sedes | “Three Locations. Your Moment to Unwind.” F3/S2–S5 | PE | L00 mapa solo si se trabaja con direcciones confirmadas; no necesaria gran foto | RE de título | Tres sedes accesibles en la primera pantalla útil | Select Location | PROP |
| Frisco | Navegar a local | Dirección, teléfono y booking Frisco F3/S2/S3 | Foto editorial contextual local | L-F entrada o sala real de Frisco | RE foto leve | Foto horizontal y datos debajo | View Frisco / Book Frisco | PROP+FOTO |
| Flower Mound | Navegar a local | Dirección, teléfono y booking F3/S2/S4 | Foto con composición diferente | L-M recepción/sala real de Flower Mound | RE foto leve | Foto horizontal y datos debajo | View Flower Mound / Book | PROP+FOTO |
| Southlake | Navegar a local | Dirección parcial y booking F3/S1/S2/S5 | Foto real contrastada | L-S sala real de Southlake | RE foto leve | Suite excluida hasta confirmación | View Southlake / Book | PROP+FOTO+DATO |
| Checking Availability | Evitar confusión | Aviso de catálogo por sede F3 | PE | — | Sin movimiento | Botón de Fresha visible | Book in [City] | PROP |


### PAGE 13 — Frisco

**Ruta:** `/locations/frisco/` · **Movimiento:** M1  
**Criterio particular:** Local real: habitación y acceso reconocibles, menos fotografía atmosférica genérica.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Frisco | Información inmediata | “Thai Massage in Frisco.” F3/S2/S3 | Hero editorial práctico | L-F1 entrada real suite 605 (licenciada) o sala Frisco | RE leve solo imagen | Dirección y Book sin scroll largo | Book Frisco | PROP+FOTO |
| Find Us in Frisco | Confirmar llegada | Calle/suite y tel F3/S2/S3 | PE | Foto exterior real, mapa enlazable externo | Estático | Direcciones copiables | Directions / Call | PROP |
| Frisco Treatment Menu | Reflejar categorías específicas | Secciones F3/S3 | PE con índice anclas | L-F2 detalle sala si necesario | Estático | Lista legible | Browse Frisco on Fresha | PROP+DATO |
| Inside Frisco | Mostrar evidencia de local | Sección F3/S3 | GP selectiva | L-F3 sala individual + L-F4 sala doble, ambas Frisco | RE de fotos no simultáneas | Galería apilada | Book Frisco | PROP+FOTO |
| Plan Your Appointment + FAQ | Converter sin ambigüedad | Avisos y FAQ F3/S3 | PE | — | M0 | Botón antes de FAQs | Book on Fresha | PROP+DATO |


### PAGE 14 — Flower Mound

**Ruta:** `/locations/flower-mound/` · **Movimiento:** M1  
**Criterio particular:** Enfocar espacio y oferta spa específica, sin suponer que todos los tratamientos están siempre disponibles.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Flower Mound | Mostrar local y reserva | “Massage & Spa Experiences in Flower Mound.” F3/S2/S4 | Hero práctico con foto lateral | L-M1 recepción real de Flower Mound | RE corto | Dirección y Book inmediatamente | Book Flower Mound | PROP+FOTO |
| Your Flower Mound Location | Información de llegada | Dirección y teléfono F3/S2/S4 | PE | Imagen exterior real opcional | Estático | Información copiable | Call / Directions | PROP |
| Massage & Specialty | Descubrir catálogo local | F3/S4 | PE con títulos distribuidos | L-M2 camilla real en Flower Mound | Un RE de imagen | Lista por familias | Browse Fresha | PROP+DATO |
| Spa & Body | Diferenciar servicios listados | Sauna / Body Scrub etc. F3/S4 | EF limitada a foto verificada | L-M3 ducha/sauna del local, si autorizada y exacta | Zoom mínimo opcional | Contenido después de foto | Spa Treatment Options | PROP+FOTO+DATO |
| Inside + Booking + FAQs | Mostrar y convertir | Foto instalaciones y CTA/FAQs F3/S4 | GP breve + PE | L-M4 sala doble Flower Mound | RE una a una | Gallery vertical, no carousel obligatorio | Book on Fresha | PROP+FOTO |


### PAGE 15 — Southlake

**Ruta:** `/locations/southlake/` · **Movimiento:** M1  
**Criterio particular:** La ubicación precisa y la elección del tratamiento prevalecen sobre cualquier imagen de fantasía.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Hero Southlake | Encontrar local y reservar | “Thai Massage & Wellness in Southlake.” F3/S1/S2/S5 | Hero contenido + foto real | L-S1 sala real de Southlake | RE corto | Dirección sin suite disputada | Book Southlake | PROP+FOTO+DATO |
| Find Southlake | Corregir fricción de localización | Dirección parcial, tel F3/S1/S2/S5 | PE | — | Estático | Tel y directions visibles | Call / Get Directions | PROP+DATO |
| Massage Treatments | Detallar catálogo auténtico | F3/S5 | PE | L-S2 detalle sala Southlake si hay original | Estático | Lista con anclas | View Fresha Treatments | PROP+DATO |
| Spa & Longer Visits | Mostrar categorías por sede | F3/S5 | PE + imagen real | L-S3 espacio de Southlake, sin afirmar sauna exclusiva | RE breve | Copy completo | Book / Explore Packages | PROP+DATO |
| Setting + Appointment + FAQ | Probar ambiente y convertir | Fotos F3/S5 + FAQ F3 | GP breve + PE | L-S4 segunda foto real Southlake | RE foto y después estático | Galería vertical | Book Southlake | PROP+FOTO |


### PAGE 16 — Gift Cards

**Ruta:** `/gift-cards/` · **Movimiento:** M0–M1  
**Criterio particular:** Regalo como gesto simple, sin inventar tarjeta física ni validez comercial.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Gift Hero | Presentar oportunidad | “Give the Gift of Time to Unwind.” F3/S7 | PE con foto editorial sobria | G01 toallas / envoltorio neutro, SIN tarjeta falsa de marca | RE de H1 sin retardar CTA | Texto seguido por Square CTA | Purchase an eGift Card | PROP+FOTO |
| An Experience They Can Choose | Explicar compra externa | Copy F3/S7 | PE | — | Estático | Instrucción clara | Visit Square | PROP |
| Looking for Inspiration | Invitar a explorar servicios | Links F3/S1–S5 | RE mínimo | G02 detalle editorial de tejidos opcional | Sin cascada | Enlaces a categorías | Massage / Signature | PROP |
| How to Begin + FAQ | Orientar términos sin inventarlos | Proceso y FAQ F3/S7 | PE | — | Sin movimiento | CTA bajo instrucciones | Purchase an eGift Card | PROP+DATO |


### PAGE 17 — Contact

**Ruta:** `/contact/` · **Movimiento:** M0  
**Criterio particular:** Directorio limpio con información exacta, sin formulario ficticio.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Contact Hero | Dar elección inmediata | “Contact Thaissage Center.” F3 | PE | — | Estático | 3 ciudades de entrada | Choose Location | PROP |
| Frisco | Contactar local | Tel + dirección F3/S2/S3 | PE estructurada | — | M0 | Enlace tel; ruta | Call / Book Frisco | PROP |
| Flower Mound | Contactar local | Tel + dirección F3/S2/S4 | PE estructurada | — | M0 | Enlace tel; ruta | Call / Book Flower Mound | PROP |
| Southlake | Contactar local | Tel + dirección sin suite F3/S1/S2/S5 | PE estructurada | — | M0 | No mostrar suite no confirmada | Call / Book Southlake | PROP+DATO |
| Find Online + Footer | Vincular canales reales | Social F3/S8 | PE | — | M0 | Texto accesible | Instagram / Facebook / Yelp | PROP |


### PAGE 18 — Cryptocurrency

**Ruta:** `/cryptocurrency` · **Movimiento:** M0  
**Criterio particular:** La información original se conserva en ruta secundaria; el pago no se simula ni se promete operativo.

| Sección | Objetivo | Contenido acreditado | Patrón visual | Imagen / foco | Movimiento | Móvil | CTA | Estado |
|---|---|---|---|---|---|---|---|---|
| Bitcoin Intro | Identificar información | H1 redactado F3/S6 | PE | No imágenes crypto genéricas | M0 | Mensaje legible | Contact a Location | PROP+DATO |
| Payment Information | Conservar declaración original con cautela | Textos F3/S6 | PE | — | M0 | Párrafos visibles | Ask Before Paying | PROP+DATO |
| How to Ask / Locations | Facilitar confirmación | Contacto por sede F3/S2–S6 | PE | — | M0 | Tel+enlaces locales | Contact / Locations | PROP |
| Booking and Footnote | Separar pagos de reservas | Booking Fresha F3/S3–S5 | PE | — | M0 | Aviso de verificación comercial | Choose Location | PROP+DATO |


## 05 · Plan de recursos fotográficos (prioridad por uso, NO fotografías ya licenciadas)

Cada imagen de la matriz tiene un **ID de brief**, no es un archivo existente. Prioridad, proporción, encuadre y procedencia se definirán antes de generar o comprar recursos.

| Grupo / IDs | Recurso solicitado | Proporción objetivo y focal | Fuente / regla de verdad |
|---|---|---|---|
| **H01–H07** | Home: hero editorial, manos y técnica, detalle textil, compresas, escenas de paquetes, foto de cierre. | H01 desktop **16:9** + móvil **4:5 o 3:4**; otras 3:2 / 4:5 según escena, negativo para copy. | Ilustrativo licenciado o generado, claramente **no foto de empleados/instalaciones**, salvo si son originales autorizados. No hace falta crear siete recursos si una escena funciona tipográficamente. |
| **S01–S04** | Catálogo: espacio y manos, dos camillas, texturas y tratamientos. | 3:2 horizontal para índices; 4:5 detalle editorial. | Mixto: dos camillas reales solo en páginas o sedes correctas; el resto ilustrativo identificado. |
| **T01–T02, C01–C02, D01–D02, W01–W02** | Cinco tratamientos con lenguaje específico: Thai muestra estiramiento; Combination mezcla de gestos; Deep Tissue toma cerrada; Swedish luz suave; nada de poses médicas. | 16:9 + 4:5 héroes; 4:5 y 1:1 detalles. | Escena ilustrativa de técnica, no trabajos reales de Thaissage. |
| **P01–P03** | Couples: sala doble, dos toallas, interior acogedor. | 16:9 con las dos camillas completas; móvil 4:5 de encuadre diferente. | Si es habitación real, etiquetar sede y obtener licencia; no inventar parejas. |
| **X01–X03, B01–B04** | Specialty y Spa: compresa, piedra, pies/manos, exfoliante, sauna real si existe foto autorizada. | 4:5 macro; 3:2 módulos; sauna 16:9. | Cryotherapy/CBD/prenatal no se visualizan con dispositivos, productos o personas inventados. |
| **K01–K05** | Signature: Chiang Mai=herbal; Bangkok=texturas sauna/body scrub/aroma; Phuket=coco y textiles. | 16:9 desktop, 4:5 móvil; composición por capítulo diferenciada. | Solo asociar objetos como **ilustración del componente comercial acreditado**; no decir que son paquetes ejecutados. |
| **A01–A05** | Our Story: espacio auténtico y pequeña serie de las tres sedes. | A01 16:9; serie 4:5 homogénea. | Origen/autorización de Frisco, Flower Mound y Southlake individualmente. |
| **L-F1–4** | Frisco: entrada suite 605, sala individual, sala doble y detalles. | Hero 16:9, GP 4:5 o 1:1. | **Fotos reales de Frisco.** |
| **L-M1–4** | Flower Mound: recepción, doble, sala y, si corresponde, ducha/sauna. | Hero 16:9, GP 4:5. | **Fotos reales de Flower Mound.** No ubicar imágenes de otra sede. |
| **L-S1–4** | Southlake: sala principal, detalle y ambientes propios. | Hero 16:9, GP 4:5. | **Fotos reales de Southlake**; no mostrar suite hasta confirmación. |
| **G01–G02** | Gift Cards: bodegón de textiles, no gift card ficticia. | 3:2 + 4:5. | Ilustrativo de stock/IA, licencia o identificación apropiada. |

**No se compran ni se generan todas las imágenes de una vez.** Se aprueba el Home, se eligen 1 hero + 1 tratamiento + 1 ambiente auténtico; después se produce por familias para evitar imagen repetida o recursos innecesarios.

### Exportación web e inventario SEO (cuando existan archivos reales)

- Convención: `thaissage-[tipo]-[motivo]-[sede-si-real]-[desktop|mobile].webp` y AVIF si el navegador y la cadena de distribución lo justifican. Ejemplo solo de nombre objetivo, **no fichero existente:** `thaissage-couples-room-frisco-desktop.webp`.
- Responsive: 375–768px un recorte propio con focal intacto; 1024–1440px imagen editorial ancha; `srcset` y `sizes` acordes a los componentes. Peso y resolución objetivos se fijarán después de medir exportación real y LCP, no con promesas arbitrarias.
- Alt text: describir solo el contenido visible y la sede **si la fotografía pertenece de verdad a ella**. Fondos puramente ornamentales deben tener alt vacío cuando corresponda.
- Metadatos internos por imagen: ID de brief, URL de procedencia, autor/titular, licencia/consentimiento, sede, fecha de exportación, ratio desktop/móvil, título/alt propuestos y ruta de uso. No incorporar recursos sin trazabilidad.

## 06 · Guardarraíles de producción y puertas de aprobación

1. **Página que se aprueba primero:** Home. No generar 18 clones antes de ver y aprobar el Home real en navegador. Una vez aprobado, no cambiar sus secciones, tipografías, imágenes ni movimiento para extender estilos a páginas internas.
2. **Familias visuales diferenciadas:** una plantilla base para tratamientos técnicos con 5 variantes de encuadre y relato; catálogo largo con índice, Signature con tres capítulos, Our Story fotográfica, ubicaciones funcionales y utilidades prácticamente estáticas. Compartir componentes de navegación y semántica, **no** una sucesión de cards.
3. **Pruebas posteriores obligatorias:** 375, 768, 1024, 1440px y dimensiones intermedias; keyboard, focus, hover, desplazamiento rápido/inverso, sin JS, reduced-motion, LCP/CLS, enlaces Fresha/Square y accesibilidad WCAG 2.2 AA. **Ninguna prueba está realizada todavía**.
4. **Contenido:** conservar al 100% los H1/H2/H3, textos, FAQs, enlaces y disclaimers editoriales de Fase 03; las tablas de este documento no autorizan resumirlos. Si un tratamiento fuera retirado oficialmente, corregir únicamente el contenido afectado con registro de cambio.
5. **SEO:** no cambiar los 18 pares title/meta aprobados para pruebas sin causa. Cada página puede tener fotografía OG propia cuando esté disponible, canonical autorreferente, breadcrumb si aporta y JSON-LD solo de información real; demos `noindex` hasta publicación autorizada.
6. **Reservas:** nunca simular transacción. Confirmar enlace por sede y flujo hacia Fresha. La suite Southlake, el horario Frisco, disponibilidad de sauna/otras técnicas, tarifas y pagos deben validarse antes de pasar a producción.
7. **Condiciones legales y salud:** no crear claims de resultados físicos, certificaciones, FDA, políticas, reseñas o «staff portraits» inventados. No poner fotos de otra sede como si fueran de una concreta.

### Checklist de aceptación visual previo a desarrollo

- [ ] El concepto podría reconocerse sin el logo por **tono, tratamiento fotográfico y relato real**; no parece una plantilla de spa intercambiable.
- [ ] Book Now se encuentra sin esperar animaciones y llega a un selector claro, o directamente a la sede en páginas locales.
- [ ] Las 18 páginas tienen partitura singular y **todos** los bloques del copy de Fase 03 conservados.
- [ ] Hay una sola transición escénica significativa en Home, y tres capítulos naturales en Signature, sin scroll-jacking.
- [ ] Sedes: fotos auténticas y exactas; contenido y horarios diferenciados, sin afirmaciones contradictorias.
- [ ] En móvil se mantienen jerarquía, imágenes, lectura y botones; los efectos se reducen sin perder contenido.
- [ ] Contraste sobre foto, menú, selector de sede y foco de teclado diseñados, pendientes de verificación funcional.
- [ ] Los recursos tienen licencia y trazabilidad. Stock/IA no se confunde con trabajos o equipo real.

## 07 · Registro de evidencias y contradicciones no resueltas

| Evidencia | Fuente | Implicación para diseño | Estado |
|---|---|---|---|
| Marca: Thailand to Texas / Self Love Begins Here / Since 2017 | S1 | Conservar lenguaje y evitar historia biográfica inventada. | **Confirmado como copy de marca** |
| Galería de Frisco con sala individual/doble y fachada | S3 | Permite fotos propias del local si se consigue permiso. | **Visual observado; derechos pendientes** |
| Galería Flower Mound con recepción, salas y ducha | S4 | Hero local específico; posibilidad de sección spa real. | **Visual observado; derechos pendientes** |
| Galería Southlake con salas | S5 | Hero local distinto al de Frisco. | **Visual observado; derechos pendientes** |
| Southlake suite 101 vs 110 | S2 frente a S1/S5 | No fijar el número en arte, alt text, mapas o JSON-LD. | **DATO** |
| Frisco domingo 10 vs 11 AM | S1/S2 frente a S3 | Evitar horario conflictivo en hero y location summary. | **DATO** |
| Sauna, prenatal, CBD, cryotherapy y variantes de servicios | S3/S4/S5 | Etiquetar servicio por sede, con decisión fotográfica sensible. | **DATO** |
| Tarifas de paquetes $200/$230 en Home original | S1, junto a oferta Fresha | No fijar precio en tipografía ni overlays antes de validar. | **DATO** |
| Square eGift y enlaces Fresha | S1/S3–S5/S7 | CTA externo y señalización funcional. | **Documentado; pago no probado** |

### Fuentes y archivos de continuidad

- [S1] https://thaissagecenter.com/ — HTML original aportado.
- [S2] https://thaissagecenter.com/our-locations
- [S3] https://www.fresha.com/a/thaissage-center-frisco-9300-john-hickman-parkway-kaw23s8f
- [S4] https://www.fresha.com/a/thaissage-center-flower-mound-1021-long-prairie-road-kiv9ttxc
- [S5] https://www.fresha.com/a/thaissage-center-southlake-101-river-oaks-drive-t52fypr6
- [S6] https://thaissagecenter.com/cryptocurrency
- [S7] https://app.squareup.com/gift/ML5VCT5JSJQYH/order
- [F3] `FASE-03-CONTENIDO-COMPLETO-18-PAGINAS.md`
- `ATREZZO_WEBS_DIRECCION_ARTISTICA_Y_SCROLL_V2.md`, §§1A–9
- `REGLA DE CONTINUIDAD Y CIERRE DE FASES 1.0.md`

## 08 · Cierre de fase

**REALIZADO:** ficha de identidad sustentada; una dirección creativa; paleta/tipografía/composición; mapa de movimiento; partitura de todas las páginas/secciones; plan de fotografía; reglas responsive/accesibilidad/SEO/CTA y registro de bloqueos.

**VERIFICADO DOCUMENTALMENTE:** correspondencia de las **18 rutas de Fase 03** con las partituras; categorías del contenido y vínculos de reserva documentados; referencias visuales públicas de salas reales (sin licencia de uso confirmada).

**NO COMPROBADO:** diseño renderizado, animación, responsive, accesibilidad en navegador, reservas completadas, fotografía licenciada, tarifas vigentes o exactitud de datos contradictorios.

**ESTADO:** Fase 04 **EN VALIDACIÓN DE DIRECCIÓN ARTÍSTICA**; no está cerrada ni autorizada para publicación.

**SIGUIENTE ACCIÓN ÚNICA:** aprobar esta partitura como diseño rector y construir **únicamente el Home** en prototipo interactivo, con fotografías cuyo uso esté autorizado o material claramente ilustrativo; revisar antes de extender a 17 páginas restantes.
