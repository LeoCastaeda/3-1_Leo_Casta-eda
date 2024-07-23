Learn You the Node.js!

Este proyecto es una colección de ejercicios prácticos para aprender Node.js,
basado en el curso interactivo "Learn You the Node.js" de Nodeschool.
Cada ejercicio cubre aspectos fundamentales de Node.js, desde la manipulación de archivos 
hasta la creación de servidores HTTP.



Descripción del Proyecto

El proyecto contiene 13 ejercicios que abarcan una variedad de conceptos de Node.js. 
Aquí tienes un resumen de cada uno:

Hello World

Archivo: dist/hello-world.js
Descripción: Un servidor HTTP básico que responde con "Hello World" a todas las solicitudes.
Ejecución: node dist/hello-world.js

Baby Steps

Archivo: dist/baby-steps.js
Descripción: Un script que suma todos los números pasados como argumentos de la línea de comandos.
Ejecución: node dist/baby-steps.js <num1> <num2> ...

My First I/O!

Archivo: dist/my-first-io.js
Descripción: Lee un archivo y cuenta el número de líneas.
Ejecución: node dist/my-first-io.js <archivo>
My First Async I/O!

Archivo: dist/my-first-async-io.js
Descripción: Lee un archivo de manera asíncrona y cuenta el número de líneas.
Ejecución: node dist/my-first-async-io.js <archivo>
Filtered LS

Archivo: dist/filtered-ls.js
Descripción: Lee el contenido de un directorio y filtra los archivos por extensión.
Ejecución: node dist/filtered-ls.js <directorio> <extensión>
Make It Modular

Archivo: dist/make-it-modular.js
Descripción: Crea un módulo que filtra archivos en un directorio por extensión y lo utiliza en un script.
Ejecución: node dist/make-it-modular.js <directorio> <extensión>
HTTP Client

Archivo: dist/http-client.js
Descripción: Envía una solicitud HTTP GET a una URL y muestra el contenido de la respuesta.
Ejecución: node dist/http-client.js <url>
HTTP Collect

Archivo: dist/http-collect.js
Descripción: Recoge y muestra el contenido completo de una respuesta HTTP.
Ejecución: node dist/http-collect.js <url>
Juggling Async

Archivo: dist/juggling-async.js
Descripción: Realiza varias operaciones asíncronas en paralelo y maneja sus resultados cuando todas están completas.
Ejecución: node dist/juggling-async.js <archivo1> <archivo2> <archivo3>
Time Server

Archivo: dist/time-server.js
Descripción: Un servidor HTTP que responde con la hora actual en formato JSON.
Ejecución: node dist/time-server.js <puerto>
HTTP File Server

Archivo: dist/http-file-server.js
Descripción: Un servidor HTTP que sirve archivos de un directorio especificado.
Ejecución: node dist/http-file-server.js <directorio> <puerto>
HTTP Uppercaserer

Archivo: dist/http-uppercaserer.js
Descripción: Un servidor HTTP que convierte el cuerpo de las solicitudes POST a mayúsculas.
Ejecución: node dist/http-uppercaserer.js <puerto>
HTTP JSON API Server

Archivo: dist/http-json-api-server.js
Descripción: Proporciona una API que devuelve información de tiempo en formato JSON.
Ejecución: node dist/http-json-api-server.js <puerto>
Instalación
Para trabajar con los ejercicios, sigue estos pasos:

Clona el Repositorio

 
 
git clone https://github.com/LeoCastaeda/3-1_Leo_Casta-eda.git
Accede al Directorio del Proyecto
 
cd 3-1_Leo_Casta-eda
Instala las Dependencias

Este proyecto utiliza npm para gestionar dependencias. Instala las dependencias con el siguiente comando:

npm install

Ejecución de Ejercicios

Cada ejercicio se encuentra en su propio archivo dentro del directorio dist. Puedes ejecutar los ejercicios utilizando Node.js desde la línea de comandos. Por ejemplo:
node dist/time-server.js 3000
Reemplaza <puerto>, <archivo>, o <url> con los parámetros correspondientes para cada ejercicio.

Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un Fork del repositorio.
Crea una rama para tu nueva característica o corrección de errores.
Haz tus cambios y realiza un commit.
Envía un Pull Request con una descripción de tus cambios.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
