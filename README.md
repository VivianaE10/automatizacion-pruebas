# AA1 – Diseño de scripts de prueba automatizados para servicios REST y formularios web

## 1. Introducción

La automatización de pruebas de software permite verificar el correcto funcionamiento de una aplicación mediante la ejecución de scripts que validan sus funcionalidades de manera sistemática y repetible. Este proceso contribuye a identificar errores oportunamente, reducir las tareas de validación manual y mejorar la calidad del software.

En esta actividad se plantea el diseño de pruebas automatizadas para un sistema de registro y gestión de productos, compuesto por un formulario web y una API REST. Para ello, se utilizarán herramientas como Selenium, Postman y Newman, con el propósito de validar el comportamiento de las funcionalidades, comprobar las respuestas del servicio y documentar los resultados obtenidos.

El desarrollo permitirá aplicar conceptos de automatización de pruebas funcionales, diseño de casos de prueba y documentación técnica en un entorno práctico.

## 2. Objetivos

### 2.1 Objetivo general

Diseñar e implementar pruebas automatizadas para validar las funcionalidades de un formulario web y los servicios de una API REST, utilizando herramientas de automatización que permitan comprobar el comportamiento del sistema y contribuir a la calidad del software.

### 2.2 Objetivos específicos

- Identificar las funcionalidades principales del sistema de registro y gestión de productos que requieren validación.
- Diseñar casos de prueba para verificar el ingreso de información en un formulario web y el funcionamiento de los servicios REST.
- Utilizar herramientas de automatización para estructurar y ejecutar pruebas funcionales.
- Documentar el procedimiento realizado y registrar evidencias de los resultados obtenidos.
- Analizar la utilidad de la automatización de pruebas en la detección temprana de errores y el aseguramiento de la calidad del software.

## 3. Descripción del proyecto

El proyecto consiste en el desarrollo de un sistema sencillo para el registro y consulta de productos, compuesto por un formulario web y una API REST que permite gestionar la información.

El sistema permitirá ingresar los datos básicos de un producto, como nombre, descripción, precio y categoría. A través de la API REST se podrán realizar operaciones de registro y consulta, facilitando la validación de los datos y las respuestas del servicio.

Para verificar el funcionamiento de la aplicación se diseñarán pruebas funcionales automatizadas en dos componentes:

- **Formulario web:** se comprobará el ingreso de información, la validación de campos obligatorios y el envío correcto de los datos mediante Selenium.
- **API REST:** se verificarán las solicitudes de registro y consulta de productos, los códigos de respuesta HTTP y el contenido devuelto por el servicio mediante Postman.

Las pruebas de la API también se ejecutarán desde la terminal utilizando Newman, con el propósito de comprobar que los scripts automatizados funcionan correctamente fuera de la interfaz gráfica de Postman.

### 3.1 Alcance del proyecto

El desarrollo se centrará en las siguientes funcionalidades:

1. Visualizar el formulario de registro de productos.
2. Validar los campos obligatorios del formulario.
3. Registrar productos mediante una solicitud HTTP POST.
4. Consultar los productos registrados mediante una solicitud HTTP GET.
5. Verificar las respuestas correctas y los posibles errores.
6. Ejecutar y documentar las pruebas automatizadas.

## 4. Herramientas y tecnologías utilizadas

Para el desarrollo del proyecto y la ejecución de las pruebas automatizadas se utilizarán las siguientes herramientas y tecnologías:

| Herramienta | Aplicación en el proyecto |
|---|---|
| Node.js | Entorno de ejecución para desarrollar la API REST. |
| JavaScript | Lenguaje utilizado para implementar la lógica del sistema y los scripts de prueba. |
| HTML5 | Estructura del formulario web de registro de productos. |
| CSS3 | Presentación visual y estilos del formulario. |
| Selenium | Automatización de las interacciones y validaciones del formulario web. |
| Postman | Diseño y ejecución de pruebas para los servicios de la API REST. |
| Newman | Ejecución de colecciones de Postman desde la terminal. |
| Cursor | Editor de código utilizado para desarrollar y organizar el proyecto. |
| Git y GitHub | Control de versiones y almacenamiento del código fuente. |

### 4.1 Justificación de las herramientas

La selección de estas herramientas permite abordar las pruebas desde dos perspectivas complementarias: la validación de la interfaz web y la comprobación de los servicios REST.

Selenium permite automatizar las acciones que realizaría un usuario en el formulario, mientras que Postman facilita la creación de solicitudes y la validación de las respuestas de la API. Por su parte, Newman permite ejecutar las colecciones de pruebas desde la terminal, facilitando su repetición y documentación.

## 5. Diseño de casos de prueba

Para validar el funcionamiento del sistema de registro y gestión de productos se establecen diferentes escenarios de prueba funcionales. Estos permitirán comprobar tanto el comportamiento del formulario web como las respuestas de los servicios de la API REST.

Las pruebas contemplan escenarios positivos, en los que se espera que las operaciones se realicen correctamente, y escenarios negativos, en los que se verifica que el sistema identifique y controle los datos incorrectos o incompletos.

### 5.1 Pruebas del formulario web

| Código | Caso de prueba | Datos o acción | Resultado esperado |
|---|---|---|---|
| FW-01 | Registro exitoso | Ingresar todos los campos correctamente. | El producto se registra y aparece un mensaje de confirmación. |
| FW-02 | Campo obligatorio vacío | Dejar vacío el nombre del producto. | El formulario impide el envío y muestra una validación. |
| FW-03 | Precio inválido | Ingresar un precio negativo. | El formulario rechaza el valor ingresado. |

### 5.2 Pruebas de la API REST

| Código | Caso de prueba | Solicitud | Resultado esperado |
|---|---|---|---|
| API-01 | Registro exitoso | POST /api/products | Código HTTP 201 y producto creado. |
| API-02 | Consulta de productos | GET /api/products | Código HTTP 200 y listado de productos. |
| API-03 | Registro sin nombre | POST /api/products sin el campo nombre. | Código HTTP 400 y mensaje de validación. |
| API-04 | Consulta de producto inexistente | GET /api/products/9999 | Código HTTP 404 y mensaje de recurso no encontrado. |

### 5.3 Criterios de aceptación

Se considerará que las pruebas cumplen su propósito cuando:

- Los registros válidos sean procesados correctamente.
- Los campos obligatorios sean validados.
- Los datos incorrectos sean rechazados.
- Los servicios REST respondan con los códigos HTTP correspondientes.
- Los resultados obtenidos coincidan con los resultados esperados definidos en cada caso de prueba.