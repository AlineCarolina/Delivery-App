FROM node:16

WORKDIR /backend

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["./wait-for-it.sh", "database:3306", "--", "sh", "-c", "npm run dbsetup && npm start"]