# Etapa 1: Build del Frontend
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Habilitar Corepack y preparar pnpm (versión fija)
RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

# Instalar dependencias (todas: dev y prod)
RUN pnpm install

# Copiar el resto del código y ejecutar el build
COPY . .
RUN pnpm run build

# Etapa 2: Imagen de Producción para el Frontend
FROM node:20-alpine
WORKDIR /app

# Copiar archivos de configuración
COPY package.json pnpm-lock.yaml ./
# Copiar la carpeta generada en la etapa de build
COPY --from=builder /app/build ./build

# Habilitar Corepack y fijar pnpm nuevamente
RUN corepack enable && corepack prepare pnpm@8.6.6 --activate
# Instalar solo las dependencias de producción
RUN pnpm install --prod --frozen-lockfile

# Configurar el puerto y exponerlo
ENV PORT=3000
EXPOSE 3000

# Ejecutar el comando de inicio definido en el package.json
CMD ["pnpm", "run", "start"]
