# Backend Dockerfile
# Step 1: Use Node.js 16 as the base image
FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
