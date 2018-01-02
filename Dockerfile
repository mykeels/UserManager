FROM node:8.9.3
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3010
EXPOSE 27017

CMD ["npm", "start"]