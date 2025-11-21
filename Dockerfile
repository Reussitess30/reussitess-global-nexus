# Dockerfile optimisé pour Next.js PWA - Production Ready
# Build multi-stage pour image légère et performante

# Étape 1 : Build de l'application Next.js
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Build de l'application Next.js
RUN npm run build

# Étape 2 : Image de production
FROM node:18-alpine AS runner

# Définir le répertoire de travail
WORKDIR /app

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis le builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Définir les permissions
RUN chown -R nextjs:nodejs /app

# Utiliser l'utilisateur non-root
USER nextjs

# Exposer le port 3000
EXPOSE 3000

# Variable d'environnement pour le port
ENV PORT 3000
ENV NODE_ENV production

# Démarrer l'application
CMD ["node", "server.js"]
