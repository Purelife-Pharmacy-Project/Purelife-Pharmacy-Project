FROM node:18-alpine

WORKDIR /purelife-frontend

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 300000000000

RUN npm install

COPY . .

RUN npm run build --if-present

EXPOSE 3829

CMD [ "npm", "start" ]
