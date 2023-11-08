# Aplicación de Recolección de Datos con MongoDB

Este repositorio contiene una aplicación de recolección de datos que obtiene información de una fuente externa y la almacena en una base de datos MongoDB. La aplicación está diseñada para ejecutarse en un entorno de contenedores Docker.

## Requisitos

Asegúrate de tener instalados los siguientes componentes antes de ejecutar la aplicación:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuración

1. Clona este repositorio en tu máquina:

   ```bash
   git clone https://github.com/pablogalle/ApiRequestApp.git
   ```
2. Crea un archivo ``.env`` en la raíz del proyecto para configurar las variables de entorno requeridas. Aquí tienes un ejemplo:

    ```
    MONGODB_URL=mongodb://usuario:contrasena@mongo:27017/
    FETCH_INTERVAL=5000
    API_URL=http://aquilaURLdelaAPI
    API_TOKEN=TU_TOKEN
    ```
    Asegúrate de configurar adecuadamente los valores de conexión a tu base de datos MongoDB, el intervalo de recolección de datos, la URL de la API y el token.

3. Ejecuta el archivo `buildImage.bat` para crear una imagen Docker y poder crear un contenedor con ella.

## Notas adicionales
La aplicación comenzará a recopilar datos de la fuente externa y guardarlos en la base de datos MongoDB.


Puedes acceder a la base de datos MongoDB utilizando una herramienta de administración de bases de datos o desde tu aplicación. Asegúrate de que MongoDB esté configurado para aceptar conexiones en la dirección proporcionada en ``MONGODB_URL`` en el archivo ``.env``.

Asegúrate de que los puertos requeridos estén disponibles en tu máquina antes de ejecutar la aplicación.
Puedes modificar la frecuencia de recolección de datos ajustando el valor de ``FETCH_INTERVAL`` en el archivo .env.
¡Listo! Tu aplicación de recolección de datos con MongoDB debería estar en funcionamiento. Si tienes algún problema o pregunta, no dudes en preguntar.






