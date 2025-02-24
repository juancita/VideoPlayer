# 1️⃣ Usar imagen oficial de Node.js
FROM node:18

# 2️⃣ Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copiar package.json y package-lock.json
COPY package*.json ./

# 4️⃣ Instalar dependencias
RUN npm install

# 5️⃣ Copiar todo el código fuente dentro del contenedor
COPY . .

# 6️⃣ Exponer el puerto del backend
EXPOSE 5000

# 7️⃣ Comando para iniciar el backend
CMD ["npm", "run", "dev"]
