# Etapa 1: construir frontend
FROM node:18 AS build
WORKDIR /app
COPY client ./client
RUN cd client && npm install && npm run build

# Etapa 2: servidor
FROM node:18
WORKDIR /app
COPY server ./server
COPY --from=build /app/client/dist ./client/dist
WORKDIR /app/server
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
