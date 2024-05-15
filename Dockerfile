# Usa una imagen de Node.js como base
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json si los tienes
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el código TypeScript
RUN npm run tsc

# Expone el puerto en el que la aplicación va a correr
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "build/index.js"]
