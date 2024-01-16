FROM node:16

WORKDIR /frontend/delivery_app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev" ]