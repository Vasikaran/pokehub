# syntax=docker.io/docker/dockerfile:1

FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy root package.json and lerna config
COPY package.json package-lock.json* lerna.json ./
# Copy package.json files from all workspaces
COPY packages/components/package.json ./packages/components/
COPY packages/utils/package.json ./packages/utils/
COPY apps/pokehub/package.json ./apps/pokehub/

# Install dependencies at the root (this will handle workspaces through lerna)
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY --from=deps /app/apps ./apps

# Copy all source files
COPY . .

# Build the Next.js app specifically
WORKDIR /app/apps/pokehub
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy the standalone output - preserving the directory structure
COPY --from=builder /app/apps/pokehub/.next/standalone/ ./
COPY --from=builder /app/apps/pokehub/public ./apps/pokehub/public
COPY --from=builder /app/apps/pokehub/.next/static ./apps/pokehub/.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Navigate to the correct directory before starting
WORKDIR /app/apps/pokehub

# Run the server directly - using the correct path
CMD ["node", "server.js"]