# Usar una imagen oficial de Node.js
FROM node:18-alpine AS builder

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios e instalar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar el código fuente y construir el proyecto
COPY . .
RUN npm run build

# Servir la aplicación con Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para servir la app
EXPOSE 80
