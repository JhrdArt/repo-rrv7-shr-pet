# Etapa 1: Build del Frontend
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package.json pnpm-lock.yaml ./

# Habilitar Corepack y fijar la versión de pnpm
RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

# Instalar dependencias (dev + prod)
RUN pnpm install

# Copiar el resto del código y ejecutar el build
COPY . .
RUN pnpm run build

# Etapa 2: Imagen de producción para el Frontend
FROM node:20-alpine
WORKDIR /app

# Copiar los archivos de configuración y el build generado
COPY package.json pnpm-lock.yaml ./
COPY --from=builder /app/build ./build

# Habilitar Corepack y fijar pnpm nuevamente
RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

# Instalar solo las dependencias de producción
RUN pnpm install --prod --frozen-lockfile

# Configurar el puerto (ajústalo según lo que necesites)
ENV PORT=3000
EXPOSE 3000

# Ejecutar el comando de inicio definido en el package.json
CMD ["pnpm", "run", "start"]