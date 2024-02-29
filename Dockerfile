FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

#COPY . .

RUN npm run build --if-present


#FROM node:18-alpine AS runner

#WORKDIR /app

#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/.next/standalone ./.next/standalone
#COPY --from=builder /app/.next/static ./.next/standalone/.next/static
#COPY --from=builder /app/public ./.next/standalone/public
EXPOSE 3000

CMD [ "npm", "start" ]
