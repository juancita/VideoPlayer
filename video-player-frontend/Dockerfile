# 1️⃣ Usar imagen de Node.js
FROM node:18

# 2️⃣ Establecer directorio de trabajo
WORKDIR /app

# 3️⃣ Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# 4️⃣ Copiar todo el código fuente
COPY . .

# 5️⃣ Construir el frontend
RUN npm run build

# 6️⃣ Servir la aplicación con un servidor estático
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]

# 7️⃣ Exponer el puerto del frontend
EXPOSE 3000
