# Usar una imagen oficial de Node.js
FROM node:18-alpine

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la API
EXPOSE 5000

# Iniciar la aplicación
CMD ["npm", "run", "dev"]
