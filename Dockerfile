# Step 1: Build frontend (CRA)
FROM node:18 as client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Step 2: Setup backend and copy frontend build
FROM node:18
WORKDIR /app
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server ./server
COPY --from=client /app/client/build ./server/build

# Start backend
WORKDIR /app/server
ENV NODE_ENV=production
CMD ["node", "server.js"]
