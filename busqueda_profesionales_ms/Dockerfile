FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install mongoose express
COPY . .
CMD ["node", "app.js"]



