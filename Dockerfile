FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV VERSION=v1-blue
EXPOSE 3000

CMD ["npm", "start"]
