FROM node:16

WORKDIR /backend

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "npm run dbsetup && npm start"]