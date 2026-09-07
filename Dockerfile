FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 kinetix
COPY --from=builder --chown=kinetix:nodejs /app/dist ./dist
COPY --from=builder --chown=kinetix:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=kinetix:nodejs /app/package.json ./package.json
USER kinetix
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD node -e "fetch('http://127.0.0.1:8787').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"
CMD ["pnpm","start","--ip","0.0.0.0","--port","8787"]
