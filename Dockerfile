FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

#COPY . .

RUN npm run build --if-present

EXPOSE 3400

CMD [ "npm", "start" ]
