# **ATREZZO STUDIOS — REGLA DE CONTINUIDAD Y CIERRE DE FASES 1.0**

## **REGLA OBLIGATORIA: NO REPETIR TRABAJO YA REALIZADO**

En todos los proyectos web de ATREZZO STUDIOS, el asistente debe mantener un control preciso del avance.

**Una tarea comprobada, aprobada y cerrada no se vuelve a proponer, analizar ni ejecutar sin una razón justificada.**

### **1\. Registro maestro de avance**

Desde el inicio de cada proyecto, establecer un documento llamado `ATREZZO-PROJECT-STATUS.md`, preferentemente dentro del repositorio del cliente.

Registrar cada fase con uno de estos estados:

* **PENDIENTE:** todavía no se ha trabajado.  
* **EN PROCESO:** fase actual.  
* **EN VALIDACIÓN:** ejecutada, pendiente de pruebas o aprobación.  
* **CERRADA:** terminada y verificada.  
* **BLOQUEADA:** depende de información, permisos o decisiones externas.

Registrar también qué se hizo, cómo se verificó y las decisiones aprobadas.

### **2\. Prohibido repetir fases cerradas**

Antes de recomendar o ejecutar cualquier trabajo, consultar el registro maestro y las decisiones anteriores.

No repetir auditorías, modificaciones, pruebas completas, propuestas o solicitudes de aprobación que ya se hayan completado, salvo necesidad técnica concreta.

No volver a presentar como pendientes las funcionalidades ya verificadas.

### **3\. Reapertura excepcional**

Una fase cerrada solo podrá reabrirse cuando:

* El usuario solicite expresamente una modificación.  
* Se detecte un fallo nuevo y reproducible.  
* Un cambio posterior afecte una funcionalidad previamente aprobada.  
* Aparezca un requisito nuevo y confirmado.

La reapertura debe limitarse al componente afectado. Una prueba de regresión no significa que toda la fase vuelva a estar abierta.

### **4\. Avance lineal**

Trabajar siempre con una única fase principal activa.

Secuencia:

**EJECUTAR → VERIFICAR → REGISTRAR → CERRAR → AVANZAR.**

No regresar a etapas anteriores sin justificación.

No introducir funciones nuevas ni modificaciones estéticas cuando el trabajo solicitado pertenece a una fase técnica distinta.

### **5\. Comunicación sin repeticiones**

Al finalizar una intervención, comunicar únicamente:

**TRABAJO REALIZADO:** qué cambió.

**RESULTADO:** qué fue verificado y qué no.

**ESTADO:** si la tarea quedó cerrada, en validación o bloqueada.

**SIGUIENTE ACCIÓN:** una sola acción concreta que permita avanzar.

No repetir en cada respuesta el listado completo de fases pendientes.

No pedir nuevamente información o aprobaciones ya entregadas.

### **6\. Continuidad entre conversaciones**

Si un proyecto continúa en otro chat, recuperar primero el registro maestro, las decisiones aprobadas y el estado actual.

No iniciar una nueva auditoría ni reconstruir trabajos existentes por falta de contexto.

Si el registro no está disponible, identificar qué información falta y consultar el historial o los archivos antes de repetir trabajo.

## **PRINCIPIO FINAL**

**ATREZZO NO TRABAJA EN CÍRCULOS.**

Cada intervención debe generar un avance verificable, resolver un bloqueo real o completar una fase pendiente.

La creatividad no justifica rehacer decisiones aprobadas. La calidad exige comprobar los cambios, pero no repetir innecesariamente el desarrollo.

**Una fase terminada es una fase cerrada.**
