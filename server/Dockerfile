# Build stage
FROM node:15-alpine
WORKDIR /cryptpaste/server
COPY ./server/package*.json ./

RUN npm install

COPY ./.env ../.env
ENV PORT 3000
EXPOSE $PORT

CMD [ "npm", "run", "start" ]
