FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json /app/

RUN npm i --silent

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "dev"]