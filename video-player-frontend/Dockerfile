# 1️⃣ Usar una imagen oficial de Node.js
FROM node:18 AS build

# 2️⃣ Establecer directorio de trabajo
WORKDIR /app

# 3️⃣ Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# 4️⃣ Copiar el código fuente y construir el proyecto
COPY . .
RUN npm run build

# 5️⃣ Crear un nuevo contenedor para servir los archivos estáticos
FROM node:18
WORKDIR /app

# 6️⃣ Instalar un servidor estático (serve)
RUN npm install -g serve

# 7️⃣ Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist /app/dist

# 8️⃣ Definir el comando para servir la aplicación
CMD ["serve", "-s", "dist", "-l", "3000"]

# 9️⃣ Exponer el puerto 3000
EXPOSE 3000
