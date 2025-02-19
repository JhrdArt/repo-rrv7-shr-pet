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

CMD ["pnpm", "run", "start"]