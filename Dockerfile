# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN npm install

COPY . .

# Variables de Entorno
    # URL de la api
ENV API_URL=""
    # X-Token de la API
ENV API_TOKEN=""
    # Intervalo en ms para la solicitud a la API
ENV FETCH_INTERVAL=5000
    # URL de la base de datos mongo
ENV MONGODB_URL='mongodb://mongodb:27017/'

EXPOSE 3000

CMD ["node", "index.mjs"]
