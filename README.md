# Learn You the Node.js for Much Win!

Este proyecto es una colección de ejercicios prácticos para aprender Node.js, basado en el curso interactivo "Learn You the Node.js for Much Win!" de [Nodeschool](https://nodeschool.io/). Cada ejercicio cubre aspectos fundamentales de Node.js, desde la manipulación de archivos hasta la creación de servidores HTTP.

## Descripción del Proyecto

El proyecto contiene 13 ejercicios que abarcan una variedad de conceptos de Node.js. Aquí tienes un resumen de cada uno:

1. **Hello World**
   - **Archivo**: `dist/hello-world.js`
   - **Descripción**: Un servidor HTTP básico que responde con "Hello World" a todas las solicitudes.
   - **Ejecución**: `node dist/hello-world.js`

2. **Baby Steps**
   - **Archivo**: `dist/baby-steps.js`
   - **Descripción**: Un script que suma todos los números pasados como argumentos de la línea de comandos.
   - **Ejecución**: `node dist/baby-steps.js <num1> <num2> ...`

3. **My First I/O!**
   - **Archivo**: `dist/my-first-io.js`
   - **Descripción**: Lee un archivo y cuenta el número de líneas.
   - **Ejecución**: `node dist/my-first-io.js <archivo>`

4. **My First Async I/O!**
   - **Archivo**: `dist/my-first-async-io.js`
   - **Descripción**: Lee un archivo de manera asíncrona y cuenta el número de líneas.
   - **Ejecución**: `node dist/my-first-async-io.js <archivo>`

5. **Filtered LS**
   - **Archivo**: `dist/filtered-ls.js`
   - **Descripción**: Lee el contenido de un directorio y filtra los archivos por extensión.
   - **Ejecución**: `node dist/filtered-ls.js <directorio> <extensión>`

6. **Make It Modular**
   - **Archivo**: `dist/make-it-modular.js`
   - **Descripción**: Crea un módulo que filtra archivos en un directorio por extensión y lo utiliza en un script.
   - **Ejecución**: `node dist/make-it-modular.js <directorio> <extensión>`

7. **HTTP Client**
   - **Archivo**: `dist/http-client.js`
   - **Descripción**: Envía una solicitud HTTP GET a una URL y muestra el contenido de la respuesta.
   - **Ejecución**: `node dist/http-client.js <url>`

8. **HTTP Collect**
   - **Archivo**: `dist/http-collect.js`
   - **Descripción**: Recoge y muestra el contenido completo de una respuesta HTTP.
   - **Ejecución**: `node dist/http-collect.js <url>`

9. **Juggling Async**
   - **Archivo**: `dist/juggling-async.js`
   - **Descripción**: Realiza varias operaciones asíncronas en paralelo y maneja sus resultados cuando todas están completas.
   - **Ejecución**: `node dist/juggling-async.js <archivo1> <archivo2> <archivo3>`

10. **Time Server**
    - **Archivo**: `dist/time-server.js`
    - **Descripción**: Un servidor HTTP que responde con la hora actual en formato JSON.
    - **Ejecución**: `node dist/time-server.js <puerto>`

11. **HTTP File Server**
    - **Archivo**: `dist/http-file-server.js`
    - **Descripción**: Un servidor HTTP que sirve archivos de un directorio especificado.
    - **Ejecución**: `node dist/http-file-server.js <directorio> <puerto>`

12. **HTTP Uppercaserer**
    - **Archivo**: `dist/http-uppercaserer.js`
    - **Descripción**: Un servidor HTTP que convierte el cuerpo de las solicitudes POST a mayúsculas.
    - **Ejecución**: `node dist/http-uppercaserer.js <puerto>`

13. **HTTP JSON API Server**
    - **Archivo**: `dist/http-json-api-server.js`
    - **Descripción**: Proporciona una API que devuelve información de tiempo en formato JSON.
    - **Ejecución**: `node dist/http-json-api-server.js <puerto>`

## Instalación

Para trabajar con los ejercicios, sigue estos pasos:

1. **Clona el Repositorio**

   ```sh
   git clone https://github.com/LeoCastaeda/3-1_Leo_Casta-eda.git

## Instala las dependencias

Algunos de los retos requieren la instación de los siguientes paquetes:

```npm install bl```


```npm install through2-map```


```npm i --save-dev @types/through2-map```

## Ejecución de Ejercicios

Cada ejercicio se encuentra en su propio archivo dentro del directorio dist. Puedes ejecutar los ejercicios utilizando Node.js desde la línea de comandos. Por ejemplo:

```node dist/time-server.js 3000```

## Verificación de Ejercicios

Para verificar si tus soluciones cumplen con los requisitos esperados, 
utiliza el comando learnyounode:

```learnyounode verify dist/ejercicio.js```

Reemplaza ejercicio.js con el nombre del archivo del ejercicio que deseas verificar.


