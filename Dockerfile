FROM node:20-alpine

WORKDIR /app

RUN npm install -g pm2

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.cjs"]