FROM node:15-alpine
WORKDIR /cryptpaste/client
COPY ./client/package*.json ./

RUN npm install

COPY ./client/*.config.js ./

EXPOSE 8080
CMD ["npm", "run", "dev"]