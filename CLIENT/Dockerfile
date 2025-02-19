# Etapa de construcción
FROM node:22-alpine AS builder

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package.json pnpm-lock.yaml ./

# Habilitar Corepack y preparar PNPM
RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Ejecutar el proceso de construcción
RUN pnpm run build

# Etapa de producción
FROM node:22-alpine

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para la ejecución
COPY package.json pnpm-lock.yaml ./
COPY --from=builder /app/build ./build

# Habilitar Corepack y preparar PNPM
RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

# Instalar solo las dependencias de producción
RUN pnpm install --prod --frozen-lockfile

# Exponer el puerto
ENV PORT=3001
EXPOSE 3001

# Comando para iniciar el servidor
CMD ["pnpm", "run", "start"]