# Etapa 1: Build del Frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

RUN pnpm install

COPY . .
RUN pnpm run build

FROM node:20-alpine
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY --from=builder /app/build ./build

RUN corepack enable && corepack prepare pnpm@8.6.6 --activate

RUN pnpm install --prod --frozen-lockfile

ENV PORT=3000
EXPOSE 3000

# Ejecutar el comando de inicio definido en el package.json
# (asegúrate de que en tu package.json el script "start" sea:
#  "start": "ls -R build && react-router-serve build/server/index.js")
CMD ["pnpm", "run", "start"]