FROM node:20-alpine

WORKDIR /app

# Instala solo dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copia el código
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
