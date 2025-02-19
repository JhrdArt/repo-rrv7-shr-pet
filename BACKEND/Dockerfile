FROM node:20-alpine
WORKDIR /app

# Copiar archivos de configuración (si tienes package-lock.json, inclúyelo; si no, solo package.json)
COPY package.json package-lock.json* ./

# Instalar las dependencias de producción
RUN npm install --production

# Copiar el resto del código
COPY . .

# Configurar la variable de entorno y exponer el puerto
ENV PORT=3001
EXPOSE 3001

# Comando de inicio: arranca el backend con "node index.js"
CMD ["npm", "run", "start"]